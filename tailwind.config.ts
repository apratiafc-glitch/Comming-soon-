import type { Config } from 'tailwindcss'
import tailwindForms from '@tailwindcss/forms'
import tailwindTypography from '@tailwindcss/typography'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // ── Page Backgrounds ───────────────────────────────────
        dark:        '#070c18',   // Deep navy page bg
        'dark-card': '#0c1322',   // Card surface
        'dark-lift': '#111b30',   // Elevated card / hover

        // ── Aprati Foods Company Brand (BLUE) ──────────────────
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#7ab4fa',
          400: '#3b8ef8',
          500: '#1a6ff5',   // Primary brand blue
          600: '#1558d6',
          700: '#1044b0',
          800: '#0d3490',
          900: '#0a2575',
        },

        // ── Sub-brand: Green ────────────────────────────────────
        'sb-green': {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          900: '#064e3b',
        },

        // ── Sub-brand: Red ──────────────────────────────────────
        'sb-red': {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          900: '#450a0a',
        },

        // ── Sub-brand: Orange ───────────────────────────────────
        'sb-orange': {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6c0c',
          900: '#431407',
        },

        // ── Gold accent (premium / CTA) ─────────────────────────
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },

        // ── Keep for backward compat ────────────────────────────
        corporate: {
          gold: '#dd9207ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
    },
  },
  plugins: [
    tailwindForms,
    tailwindTypography,
    tailwindAspectRatio,
  ],
} satisfies Config
