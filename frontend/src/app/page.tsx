'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import ServiceCatalog from '../components/ServiceCatalog';
import KbliSearchWidget from '../components/KbliSearchWidget';
import TrackingWidget from '../components/TrackingWidget';
import Workflow from '../components/Workflow';
import ReviewsAndTrust from '../components/ReviewsAndTrust';
import Articles from '../components/Articles';
import ConsultationForm from '../components/ConsultationForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ClientDashboard from '../components/ClientDashboard';
import AdminDashboard from '../components/AdminDashboard';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen transition-colors duration-200 selection:bg-teal-500 selection:text-white ${
      isDark ? 'bg-[#070F1E] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />
      
      {/* Role-based Isolated Workspace Dashboards (Without Landing Page Footer Bleed) */}
      {user ? (
        <>
          {user.role === 'admin' && <AdminDashboard />}
          {user.role === 'client' && <ClientDashboard />}
        </>
      ) : (
        /* Guest Landing Page - Structured Corporate Regulatory Platform */
        <>
          <Hero />
          <TrackingWidget />
          <Profile />
          <ServiceCatalog />
          <KbliSearchWidget />
          <Workflow />
          <ReviewsAndTrust />
          <Articles />
          <ConsultationForm />
          <FAQ />
          <Footer />
        </>
      )}
    </main>
  );
}
