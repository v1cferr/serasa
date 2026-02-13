import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Arial', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        experian: {
          'dark-blue': '#1D4F91',
          'light-blue': '#426DA9',
          purple: '#77127B',
          raspberry: '#C1188B',
          magenta: '#E80070',
          navy: '#1A2B4B',
          sapphire: '#3087AA',
          teal: '#54C2B8',
          lime: '#AFB904',
          'alert-red': '#FA1320',
          'alert-green': '#0FAC67',
          orange: '#FF9735',
          yellow: '#FEDB00',
        },
        'experian-blue': {
          10: '#F7F8FB',
          20: '#E1E4EF',
          30: '#C6CBE1',
          40: '#A6AFD0',
          50: '#8795C0',
        },
        'experian-purple': {
          10: '#FBF7FA',
          20: '#EEE0ED',
          30: '#DEC4DD',
          40: '#CBA4CA',
          50: '#B985B7',
        },
        'experian-raspberry': {
          10: '#FDF6FA',
          20: '#F8DDEB',
          30: '#F1BDD8',
          40: '#E699C3',
          50: '#DB73AF',
        },
        'experian-magenta': {
          10: '#FFF6F8',
          20: '#FFDDE5',
          30: '#FFBACB',
          40: '#FF8EAD',
          50: '#FE5B90',
        },
        'experian-grey': {
          DEFAULT: '#495765',
          10: '#F8F8F9',
          20: '#E2E4E7',
          30: '#C8CCD1',
          40: '#ABB1B8',
          50: '#8F97A0',
        },
        'serasa-dark': '#1A2B4B', // Mapping to Experian Navy as a dark tone

      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'squircle': '20px',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
