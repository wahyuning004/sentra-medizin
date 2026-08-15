'use client';

import React, { useState } from 'react';
import { Shield, LogIn, Sun, Moon, BookOpen, Menu, X, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login' | 'register'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const openAuth = (tab: 'login' | 'register') => {
    setAuthDefaultTab(tab);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  // When logged in (Admin or Client), dedicated full-height Sidebar in Dashboards handles navigation & header
  if (user) {
    return (
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    );
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950 border-b border-teal-500/20 shadow-xl shadow-black/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Section: Brand Logo & Navigation Links Aligned Left */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              
              {/* Brand Logo */}
              <a href="#" className="flex items-center space-x-3 group shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 font-black" />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black tracking-tight text-white block leading-tight">
                    SENTRA <span className="text-teal-400">MEDIZIN</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-teal-300 uppercase block font-extrabold">
                    Konsultan Regulasi Medis
                  </span>
                </div>
              </a>

              {/* Public Guest Landing Page Navigation (Desktop Left Aligned with High Contrast) */}
              <nav className="hidden lg:flex items-center space-x-2 border-l border-slate-800 pl-6 sm:pl-8">
                <a href="#profile" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  Profil
                </a>
                <a href="#services" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  Layanan
                </a>
                <a href="#kbli" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  Cari KBLI
                </a>
                <a href="#tracking" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  Lacak Status
                </a>
                <a href="#articles" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                  <span>Artikel</span>
                </a>
                <a href="#consultation" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  Form Konsultasi
                </a>
                <a href="#faq" className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 hover:text-teal-300 hover:bg-slate-900 transition-all">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Ganti ke Mode Terang (Biru)' : 'Ganti ke Dark Mode'}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-amber-400 hover:text-amber-300 transition-all flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600" />
                )}
              </button>

              {/* Guest Login & Register Buttons */}
              <div className="hidden sm:flex items-center space-x-2">
                <button
                  onClick={() => openAuth('login')}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-200 bg-slate-900 border border-slate-700 hover:border-teal-400 transition-all flex items-center space-x-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-teal-400" />
                  <span>Masuk</span>
                </button>
                <button
                  onClick={() => openAuth('register')}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md shadow-teal-500/30"
                >
                  Daftar
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 lg:hidden hover:bg-slate-800"
                title="Menu Navigasi"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-teal-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a 
                href="#profile" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                Profil
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                Layanan
              </a>
              <a 
                href="#kbli" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                Cari KBLI
              </a>
              <a 
                href="#tracking" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                Lacak Status
              </a>
              <a 
                href="#articles" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                Artikel
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-teal-400 text-center"
              >
                FAQ
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => openAuth('login')}
                className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-900 border border-slate-800 flex items-center justify-center space-x-1.5"
              >
                <LogIn className="w-3.5 h-3.5 text-teal-400" />
                <span>Masuk Portal</span>
              </button>
              <button
                onClick={() => openAuth('register')}
                className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 text-center"
              >
                Daftar Akun
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    </>
  );
}
