
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        blush: '#F7D6E0',
        midnight: '#0F172A'
      },
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Helvetica','Arial']
      }
    },
  },
  plugins: [],
}
export default config
