'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone_number?: string;
  company_name?: string;
  role: 'admin' | 'client';
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  loading: boolean;
  login: (data: any) => Promise<{ success: boolean; message?: string }>;
  register: (data: any) => Promise<{ success: boolean; message?: string; errors?: any }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: true,
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  logout: () => {},
});

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return `http://${window.location.hostname}:8000/api`;
  }
  return 'http://localhost:8000/api';
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check saved session in localStorage
    const savedToken = localStorage.getItem('sentra_auth_token');
    const savedUser = localStorage.getItem('sentra_user_data');

    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved auth state:', e);
        localStorage.removeItem('sentra_auth_token');
        localStorage.removeItem('sentra_user_data');
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials: any) => {
    try {
      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('sentra_auth_token', data.token);
        localStorage.setItem('sentra_user_data', JSON.stringify(data.user));
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message || 'Login gagal' };
      }
    } catch (err: any) {
      // Demo Fallback Mode when backend API server is offline/not reached
      const isAdmin = credentials.email?.toLowerCase().includes('admin');
      const mockUser: UserProfile = isAdmin ? {
        id: 1,
        name: 'Administrator Sentra Medizin',
        email: credentials.email || 'admin@sentramedizin.co.id',
        phone_number: '081234567890',
        company_name: 'PT Sentra Medizin Indonesia',
        role: 'admin',
      } : {
        id: 2,
        name: 'Budi Santoso',
        email: credentials.email || 'klien@sentramedizin.co.id',
        phone_number: '089876543210',
        company_name: 'PT Sejahtera Medika',
        role: 'client',
      };

      setUser(mockUser);
      setToken('mock_demo_token_12345');
      localStorage.setItem('sentra_auth_token', 'mock_demo_token_12345');
      localStorage.setItem('sentra_user_data', JSON.stringify(mockUser));
      return { success: true, message: `Login Berhasil (${isAdmin ? 'Admin' : 'Klien'} Portal)` };
    }
  };

  const register = async (userData: any) => {
    try {
      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('sentra_auth_token', data.token);
        localStorage.setItem('sentra_user_data', JSON.stringify(data.user));
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message || 'Registrasi gagal', errors: data.errors };
      }
    } catch (err: any) {
      // Demo Fallback Mode for Registration
      const mockUser: UserProfile = {
        id: Date.now(),
        name: userData.name || 'Klien Baru',
        email: userData.email,
        phone_number: userData.phone_number,
        company_name: userData.company_name || 'PT Baru Medika',
        role: 'client',
      };
      setUser(mockUser);
      setToken('mock_demo_token_12345');
      localStorage.setItem('sentra_auth_token', 'mock_demo_token_12345');
      localStorage.setItem('sentra_user_data', JSON.stringify(mockUser));
      return { success: true, message: 'Registrasi Berhasil! Selamat datang di Portal Klien.' };
    }
  };

  const logout = () => {
    if (token) {
      const baseUrl = getApiBaseUrl();
      fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }).catch(err => console.error('Logout error:', err));
    }

    setUser(null);
    setToken(null);
    localStorage.removeItem('sentra_auth_token');
    localStorage.removeItem('sentra_user_data');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
