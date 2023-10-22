import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      lineHeight: {
        'oh': '1.22',
      },
      colors:{
        oblue:'#4482DA',
        op:"#f9a8d4",
        oy:'#F8AB06',
        ob:"#0A3F7A",
        olightb:"#E8F0F8",
        obrown:"#5B5757",
        olighty:"#F8C006",
        ogray:"#A6C5E3"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
