import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Star, 
  Navigation, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ChevronDown,
  Lock,
  Wifi,
  Battery,
  Signal,
  Home,
  Calendar,
  Wallet,
  User
} from 'lucide-react';
import { ASSETS } from '@/core/repositories/MockData';

export const AppPhoneMockup = ({ 
  showFloatingBadges = true,
  className = '',
  eta = '8 mins',
  distance = '1.4 km',
  proName = 'Rajesh Verma',
  serviceTitle = 'Full Home Deep Clean',
  otp = '4829'
}) => {
  const [activeTab, setActiveTab] = useState('tracking'); // 'tracking' | 'details'
  const [isCalling, setIsCalling] = useState(false);
  const [copiedOtp, setCopiedOtp] = useState(false);

  const handleCall = () => {
    setIsCalling(true);
    setTimeout(() => setIsCalling(false), 2500);
  };

  const handleCopyOtp = () => {
    setCopiedOtp(true);
    setTimeout(() => setCopiedOtp(false), 2000);
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient background glow behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 via-primary/25 to-emerald-400/20 rounded-full blur-2xl -z-10 opacity-75" />

      {/* Floating Badge 1: Top Right - Live GPS Telemetry */}
      {showFloatingBadges && (
        <div className="hidden sm:flex absolute -top-4 -right-12 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 text-left animate-bounce-subtle">
          <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
            <Navigation className="w-4 h-4 animate-pulse fill-teal-600" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <p className="text-[11px] font-bold text-navy leading-none">Live GPS Tracking</p>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">ETA: {eta} ({distance})</p>
          </div>
        </div>
      )}

      {/* Floating Badge 2: Bottom Left - Pro Verification */}
      {showFloatingBadges && (
        <div className="hidden sm:flex absolute -bottom-4 -left-10 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 text-left">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-navy leading-none">100% Verified Pro</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Background & Skill Certified</p>
          </div>
        </div>
      )}

      {/* Phone Hardware Container */}
      <div className="relative w-[300px] sm:w-[320px] bg-[#0c131a] p-2.5 sm:p-3 rounded-[46px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_30px_rgba(13,148,136,0.15)] border-4 border-[#1f2937]/90 ring-1 ring-white/20 transition-all duration-300">
        
        {/* Hardware Side Buttons */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-sm" />

        {/* Screen Bezel & Surface */}
        <div className="relative bg-[#07131D] w-full rounded-[38px] overflow-hidden text-slate-100 font-sans border border-slate-800/80 shadow-inner flex flex-col justify-between" style={{ minHeight: '620px' }}>
          
          {/* 1. iOS Status Bar & Dynamic Island */}
          <div className="relative z-30 pt-2.5 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-200">
            <span>9:41</span>
            
            {/* Dynamic Island */}
            <div className="w-26 h-5 bg-black rounded-full flex items-center justify-between px-2 text-[9px] shadow-sm border border-white/5">
              <div className="flex items-center gap-1.5 text-teal-400">
                <img src={ASSETS.logo} alt="Logo" className="w-3 h-3 object-contain" />
                <span className="text-[8px] font-bold tracking-tight text-white">NOROZZ</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-teal-500/40" />
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            </div>
          </div>

          {/* 2. In-App Header: NOROZZ Brand & Location */}
          <div className="relative z-20 px-3.5 pt-2 pb-2 bg-[#07131D]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* NOROZZ Official Logo beside brand name */}
              <div className="w-7 h-7 rounded-xl bg-white/10 backdrop-blur-sm p-1 flex items-center justify-center border border-white/15 shadow-md shrink-0">
                <img 
                  src={ASSETS.logo} 
                  alt="NOROZZ Official Logo" 
                  className="w-full h-full object-contain drop-shadow" 
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black tracking-wider text-white font-heading">NOROZZ</span>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold border border-teal-500/30">PRO</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-slate-300">
                  <MapPin className="w-2.5 h-2.5 text-teal-400" />
                  <span className="truncate max-w-[110px]">Indiranagar, BLR</span>
                  <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-bold text-emerald-300 flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                <span>Verified</span>
              </div>
            </div>
          </div>

          {/* 3. Live Service Status Strip */}
          <div className="relative z-10 px-3.5 py-1.5 bg-gradient-to-r from-teal-900/60 via-[#0a273b] to-slate-900/80 border-b border-teal-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-[10px] font-extrabold text-white leading-tight">Partner On The Way</p>
                <p className="text-[8px] text-teal-200">Arriving in <span className="font-bold text-emerald-300">{eta}</span> ({distance})</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">#NZ-8492</span>
            </div>
          </div>

          {/* 4. Realistic Map Simulation Screen */}
          <div className="relative flex-1 bg-[#101c26] overflow-hidden min-h-[190px]">
            {/* Vector Map Canvas Graphics */}
            <svg className="w-full h-full absolute inset-0 opacity-80" viewBox="0 0 320 220" fill="none">
              {/* Map Background Blocks / City grid */}
              <rect width="320" height="220" fill="#0d1b2a" />
              
              {/* City Blocks */}
              <rect x="15" y="15" width="60" height="45" rx="4" fill="#15263a" />
              <rect x="85" y="15" width="80" height="45" rx="4" fill="#15263a" />
              <rect x="175" y="15" width="65" height="45" rx="4" fill="#15263a" />
              <rect x="250" y="15" width="55" height="45" rx="4" fill="#15263a" />
              
              <rect x="15" y="70" width="50" height="60" rx="4" fill="#15263a" />
              {/* City Park (Green tint) */}
              <rect x="75" y="70" width="70" height="60" rx="6" fill="#0e3436" stroke="#134e4a" strokeWidth="1" />
              <text x="85" y="103" fill="#2dd4bf" fontSize="7" fontWeight="bold" opacity="0.7">100ft Park</text>
              
              <rect x="155" y="70" width="85" height="60" rx="4" fill="#15263a" />
              <rect x="250" y="70" width="55" height="60" rx="4" fill="#15263a" />
              
              <rect x="15" y="140" width="70" height="70" rx="4" fill="#15263a" />
              <rect x="95" y="140" width="60" height="70" rx="4" fill="#15263a" />
              <rect x="165" y="140" width="75" height="70" rx="4" fill="#15263a" />
              <rect x="250" y="140" width="55" height="70" rx="4" fill="#15263a" />

              {/* Road Network (Lighter grid lines) */}
              <path d="M 0 65 L 320 65" stroke="#223954" strokeWidth="10" />
              <path d="M 0 135 L 320 135" stroke="#223954" strokeWidth="12" />
              <path d="M 70 0 L 70 220" stroke="#223954" strokeWidth="8" />
              <path d="M 150 0 L 150 220" stroke="#223954" strokeWidth="10" />
              <path d="M 245 0 L 245 220" stroke="#223954" strokeWidth="8" />

              {/* Street Names */}
              <text x="160" y="63" fill="#64748b" fontSize="6" fontWeight="bold">100 FEET ROAD</text>
              <text x="15" y="132" fill="#64748b" fontSize="6" fontWeight="bold">12TH MAIN</text>

              {/* Active Route Path Glowing Gradient */}
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Glowing Route Line */}
              <path 
                d="M 50 165 L 70 165 L 70 135 L 150 135 L 150 65 L 210 65" 
                stroke="#0d9488" 
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                opacity="0.4"
                filter="url(#routeGlow)"
              />
              <path 
                d="M 50 165 L 70 165 L 70 135 L 150 135 L 150 65 L 210 65" 
                stroke="url(#routeGradient)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Dash flow animation effect */}
              <path 
                d="M 50 165 L 70 165 L 70 135 L 150 135 L 150 65 L 210 65" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="4 8"
                className="animate-pulse"
                opacity="0.8"
              />
            </svg>

            {/* Destination Pin (User's Home) */}
            <div className="absolute top-[52px] left-[200px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="px-2 py-0.5 rounded-md bg-navy text-[8px] font-bold text-white shadow-lg border border-teal-400/40 mb-1 flex items-center gap-1">
                <span>📍 My Home</span>
              </div>
              <div className="relative">
                <span className="animate-ping absolute -inset-1 rounded-full bg-teal-400 opacity-60"></span>
                <div className="w-5 h-5 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white shadow-md">
                  <Home className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            {/* Moving Pro Pin (Specialist GPS Location) */}
            <div className="absolute top-[135px] left-[110px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="px-2 py-0.5 rounded-full bg-emerald-600 text-[8px] font-bold text-white shadow-lg border border-emerald-300/40 mb-1 flex items-center gap-1 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Rajesh (Pro) • 32 km/h</span>
              </div>
              <div className="relative">
                <span className="animate-ping absolute -inset-2 rounded-full bg-emerald-400 opacity-75"></span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 p-0.5 shadow-xl border-2 border-white">
                  <img 
                    src={ASSETS.registerPro} 
                    alt="Pro Avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white flex items-center justify-center text-[7px] text-white font-bold">
                  ✓
                </div>
              </div>
            </div>

            {/* Map Overlay Pill: Distance & Battery Safety */}
            <div className="absolute top-2 left-2 z-10 bg-navy/90 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-[8px] text-slate-200 flex items-center gap-1.5 shadow-md">
              <Clock className="w-2.5 h-2.5 text-teal-400" />
              <span>Speed: 32 km/h • GPS Active</span>
            </div>
          </div>

          {/* 5. Pro Partner Bottom Sheet (Authentic NOROZZ Platform Details) */}
          <div className="relative z-20 bg-white text-navy px-3.5 pt-3 pb-2.5 rounded-t-[24px] shadow-[0_-8px_25px_rgba(0,0,0,0.25)] border-t border-slate-100">
            {/* Sheet Handle */}
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-2" />

            {/* Service & Pro Identity Row */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={ASSETS.registerPro} 
                      alt={proName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">
                    ✓
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-navy leading-tight">{proName}</h4>
                    <span className="text-[8px] font-extrabold px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-0.5">
                      <Star className="w-2 h-2 fill-amber-500 text-amber-500" />
                      4.92
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">{serviceTitle}</p>
                  <p className="text-[8px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-0.5">
                    <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
                    <span>NOROZZ Verified • 1,240+ jobs</span>
                  </p>
                </div>
              </div>

              {/* Secure Start Service OTP Card */}
              <button 
                onClick={handleCopyOtp}
                className="bg-slate-50 hover:bg-slate-100 active:scale-95 transition-all p-1.5 rounded-xl border border-slate-200/80 text-right cursor-pointer"
                title="Click to copy OTP"
              >
                <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase tracking-wide justify-end">
                  <Lock className="w-2 h-2 text-teal-600" />
                  <span>Start OTP</span>
                </div>
                <div className="text-xs font-mono font-black text-primary tracking-widest mt-0.5">
                  {copiedOtp ? 'COPIED!' : otp}
                </div>
              </button>
            </div>

            {/* Quick Action Buttons: Call & Message & Safety */}
            <div className="grid grid-cols-2 gap-2 pt-2.5">
              <button 
                onClick={handleCall}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-xl text-[10px] font-bold transition-all shadow-sm cursor-pointer"
              >
                <Phone className={`w-3 h-3 ${isCalling ? 'animate-bounce' : ''}`} />
                <span>{isCalling ? 'Connecting...' : 'Call Partner'}</span>
              </button>

              <button 
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-navy rounded-xl text-[10px] font-bold transition-all border border-slate-200/80 cursor-pointer"
              >
                <MessageSquare className="w-3 h-3 text-teal-600" />
                <span>Message</span>
              </button>
            </div>

            {/* Safety Guarantee Pill */}
            <div className="mt-2 flex items-center justify-between text-[8px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
              <span className="flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                NOROZZ Verified & Trained Specialist
              </span>
              <span className="font-bold text-teal-700">NOROZZ Care</span>
            </div>
          </div>

          {/* 6. In-App Bottom Tab Bar */}
          <div className="relative z-20 bg-white border-t border-slate-100 px-5 pt-1.5 pb-4 flex items-center justify-between text-slate-400">
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[7px]">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-teal-600 font-bold">
              <Calendar className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-[7px]">Bookings</span>
              <span className="w-1 h-1 rounded-full bg-teal-600 mt-[-2px]" />
            </div>
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Wallet className="w-3.5 h-3.5" />
              <span className="text-[7px]">Wallet</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <User className="w-3.5 h-3.5" />
              <span className="text-[7px]">Account</span>
            </div>
          </div>

          {/* iPhone Home Indicator Line */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-900/60 rounded-full z-30 pointer-events-none" />

        </div>
      </div>
    </div>
  );
};

export default AppPhoneMockup;
