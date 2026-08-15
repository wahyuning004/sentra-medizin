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
      return { success: false, message: 'Gagal terhubung ke server API Laravel.' };
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
      return { success: false, message: 'Gagal terhubung ke server API Laravel.' };
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
