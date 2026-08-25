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

      {/* iPhone 16 Pro Titanium Hardware Chassis */}
      <div className="relative w-[310px] sm:w-[330px] bg-gradient-to-b from-[#3a3f47] via-[#22262c] to-[#181a1f] p-[10px] rounded-[52px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7),0_10px_30px_-5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-[#4b525d]/60 ring-1 ring-black/80 transition-all duration-300">
        
        {/* Antenna Bands (Top & Bottom on Titanium Frame) */}
        <div className="absolute -left-[1px] top-20 w-[2px] h-2 bg-[#121417]/80 pointer-events-none" />
        <div className="absolute -right-[1px] top-20 w-[2px] h-2 bg-[#121417]/80 pointer-events-none" />
        <div className="absolute -left-[1px] bottom-20 w-[2px] h-2 bg-[#121417]/80 pointer-events-none" />
        <div className="absolute -right-[1px] bottom-20 w-[2px] h-2 bg-[#121417]/80 pointer-events-none" />

        {/* iPhone Left Buttons: Action Button + Volume Up + Volume Down */}
        <div className="absolute -left-[4px] top-[95px] w-[3px] h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-l-sm shadow-sm" title="Action Button" />
        <div className="absolute -left-[4px] top-[135px] w-[3px] h-12 bg-gradient-to-b from-slate-400 to-slate-600 rounded-l-sm shadow-sm" title="Volume Up" />
        <div className="absolute -left-[4px] top-[195px] w-[3px] h-12 bg-gradient-to-b from-slate-400 to-slate-600 rounded-l-sm shadow-sm" title="Volume Down" />

        {/* iPhone Right Buttons: Power / Siri Button + Camera Control */}
        <div className="absolute -right-[4px] top-[140px] w-[3px] h-18 bg-gradient-to-b from-slate-400 to-slate-600 rounded-r-sm shadow-sm" title="Power Button" />
        <div className="absolute -right-[3px] bottom-[150px] w-[2px] h-10 bg-slate-500/80 rounded-r-sm shadow-sm" title="Camera Control" />

        {/* Top Speaker Earpiece Slit */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#111] rounded-full z-40" />

        {/* OLED Screen Bezel & Surface (Ultra-thin uniform 3.5mm iPhone bezel) */}
        <div className="relative bg-[#07131D] w-full rounded-[44px] overflow-hidden text-slate-100 font-sans border-[3px] border-black shadow-[inset_0_0_8px_rgba(0,0,0,0.8)] flex flex-col justify-between" style={{ minHeight: '630px' }}>
          
          {/* Diagonal Glass Sheen Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-30" />

          {/* 1. iOS Status Bar & Dynamic Island */}
          <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-200">
            {/* iOS Time */}
            <span className="font-semibold tracking-tight text-[12px] pl-1 text-white">9:41</span>
            
            {/* Signature iPhone Dynamic Island */}
            <div className="w-[100px] h-[26px] bg-black rounded-full flex items-center justify-between px-3 shadow-md border border-white/5 select-none">
              {/* FaceID Sensor Cutout (Left) */}
              <div className="w-2 h-2 rounded-full bg-[#0a0a0a]" />
              {/* Front Camera Lens with Blue Anti-Reflective Optics Ring (Right) */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#060e18] ring-1 ring-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#0b243b]" />
              </div>
            </div>

            {/* iOS Signal, Wi-Fi, and Battery Status Icons */}
            <div className="flex items-center gap-1.5 text-slate-200 pr-1">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              {/* Authentic iOS Battery Icon */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 rounded-[3px] border border-white/80 p-[1px] flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-[1.5px]" />
                </div>
                <div className="w-[1.5px] h-1 bg-white/80 rounded-r-[1px] -ml-[0.5px]" />
              </div>
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
          <div className="relative flex-1 bg-[#101c26] overflow-hidden min-h-[210px]">
            {/* Vector Map Canvas Graphics */}
            <svg className="w-full h-full absolute inset-0 opacity-80" viewBox="0 0 300 210" preserveAspectRatio="none" fill="none">
              {/* Map Background Blocks / City grid */}
              <rect width="300" height="210" fill="#0d1b2a" />
              
              {/* City Blocks */}
              <rect x="15" y="15" width="55" height="40" rx="4" fill="#15263a" />
              <rect x="80" y="15" width="70" height="40" rx="4" fill="#15263a" />
              <rect x="170" y="15" width="40" height="40" rx="4" fill="#15263a" />
              <rect x="230" y="15" width="55" height="40" rx="4" fill="#15263a" />
              
              <rect x="15" y="75" width="65" height="55" rx="4" fill="#15263a" />
              {/* City Park (Green tint) */}
              <rect x="90" y="75" width="60" height="55" rx="6" fill="#0e3436" stroke="#134e4a" strokeWidth="1" />
              <text x="96" y="105" fill="#2dd4bf" fontSize="7" fontWeight="bold" opacity="0.8">100ft Park</text>
              
              <rect x="170" y="75" width="115" height="55" rx="4" fill="#15263a" />
              
              <rect x="15" y="155" width="65" height="45" rx="4" fill="#15263a" />
              <rect x="90" y="155" width="60" height="45" rx="4" fill="#15263a" />
              <rect x="170" y="155" width="115" height="45" rx="4" fill="#15263a" />

              {/* Road Network Grid Lines */}
              <path d="M 0 65 L 300 65" stroke="#223954" strokeWidth="12" />
              <path d="M 0 145 L 300 145" stroke="#223954" strokeWidth="12" />
              <path d="M 80 0 L 80 210" stroke="#223954" strokeWidth="8" />
              <path d="M 160 0 L 160 210" stroke="#223954" strokeWidth="12" />
              <path d="M 230 0 L 230 210" stroke="#223954" strokeWidth="8" />

              {/* Street Names */}
              <text x="175" y="62" fill="#64748b" fontSize="6" fontWeight="bold">100 FEET ROAD</text>
              <text x="15" y="142" fill="#64748b" fontSize="6" fontWeight="bold">12TH MAIN</text>

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

              {/* Glowing Ambient Route Line (Centered exactly from Rajesh at (90,145) to Home at (220,65)) */}
              <path 
                d="M 90 145 L 160 145 L 160 65 L 220 65" 
                stroke="#0d9488" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                opacity="0.4"
                filter="url(#routeGlow)"
              />
              <path 
                d="M 90 145 L 160 145 L 160 65 L 220 65" 
                stroke="url(#routeGradient)" 
                strokeWidth="4.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Dash flow animation effect */}
              <path 
                d="M 90 145 L 160 145 L 160 65 L 220 65" 
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                strokeDasharray="4 6"
                className="animate-pulse"
                opacity="0.9"
              />
            </svg>

            {/* Destination Pin (User's Home at x=220, y=65) */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '73.33%', top: '30.95%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="px-2 py-0.5 rounded-md bg-navy text-[8px] font-bold text-white shadow-lg border border-teal-400/40 mb-1 flex items-center gap-1">
                <span>📍 My Home</span>
              </div>
              <div className="relative">
                <span className="animate-ping absolute -inset-1 rounded-full bg-teal-400 opacity-60"></span>
                <div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white shadow-md">
                  <Home className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Moving Pro Pin (Rajesh at x=90, y=145) */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '30%', top: '69.05%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="px-2 py-0.5 rounded-full bg-emerald-600 text-[8px] font-bold text-white shadow-lg border border-emerald-300/40 mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Rajesh (Pro) • 32 km/h</span>
              </div>
              <div className="relative">
                <span className="animate-ping absolute -inset-1.5 rounded-full bg-emerald-400 opacity-75"></span>
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

            {/* Map Overlay Pill: Speed */}
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

          {/* Authentic iPhone Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-slate-900/90 rounded-full z-30 pointer-events-none shadow-sm" />

        </div>
      </div>
    </div>
  );
};

export default AppPhoneMockup;
