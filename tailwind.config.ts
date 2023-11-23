import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'myblack': '#161616',
        'background': '#F9FAFC',
        'card': "#F3F4F6"
      },
      boxShadow: {
        'topbar': '0px 2px 4px 0px rgba(22, 22, 22, 0.04)',
        'blackbutton': '0px 2px 4px 0px rgba(22, 22, 22, 0.03), 0px 4px 4px 0px rgba(255, 255, 255, 0.08) inset',
        'whitebutton': '0px 2px 4px 0px rgba(22, 22, 22, 0.03), 0px -1px 4px 0px rgba(22, 22, 22, 0.03) inset',
        'card': '0px 2px 6px 0px rgba(22, 22, 22, 0.04), 0px -1px 0px 0px rgba(22, 22, 22, 0.04) inset'
      },
      opacity: {
        '7': '0.07'
      },
      scale: {
        '102': '1.02'
      }
    },
  },
  plugins: [],
}
export default config
