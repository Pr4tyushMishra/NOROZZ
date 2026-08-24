/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488', // Norozz Teal
          dark: '#0B7A70',    // Hover state
          light: '#14B8A6',
          tint: '#ECFDF5',    // Soft mint background
          soft: '#F0FDFA',
        },
        navy: {
          DEFAULT: '#0F172A', // Dark ink / footer
          surface: '#1E293B',
          light: '#334155',
        },
        slate: {
          text: '#334155',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8FAFC',
          light: '#F1F5F9',
          border: '#E2E8F0',
        },
        brandSuccess: '#16A34A',
        brandWarning: '#F59E0B',
        brandDanger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.12)',
        'glow': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
