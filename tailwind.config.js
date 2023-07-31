/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js', './app/**/*.{ts,tsx}', './public/**/*.html',
  ],
  theme: {
    fontFamily:{
      inter: 'Inter, sans-serif'
    },
    extend: {
      colors:{
        primary:'rgba(var(--primary), <alpha-value>)',
        secondary:'rgba(var(--secondary), <alpha-value>)',
        Info:'rgba(var(--Info), <alpha-value>)',

        'neutral-white':'rgba(var(--neutral-white), <alpha-value>)',
        'neutral-black':'rgba(var(--neutral-black), <alpha-value>)',
        'neutral-d-grey':'rgba(var(--neutral-d-grey), <alpha-value>)',
        'neutral-grey':'rgba(var(--neutral-grey), <alpha-value>)',
        'neutral-l-grey':'rgba(var(--neutral-l-grey), <alpha-value>)',
        'neutral-grey-blue':'rgba(var(--neutral-grey-blue), <alpha-value>)',
        'neutral-silver':'rgba(var(--neutral-silver), <alpha-value>)',
        
        'shade-s-1':'rgba(var(--shade-s-1), <alpha-value>)',
        'shade-s-2':'rgba(var(--shade-s-2), <alpha-value>)',
        'shade-s-3':'rgba(var(--shade-s-3), <alpha-value>)',
        'shade-s-4':'rgba(var(--shade-s-4), <alpha-value>)',
        'shade-s-5':'rgba(var(--shade-s-5), <alpha-value>)',

        'tint-t-1':'rgba(var(--tint-t-1), <alpha-value>)',
        'tint-t-2':'rgba(var(--tint-t-2), <alpha-value>)',
        'tint-t-3':'rgba(var(--tint-t-3), <alpha-value>)',
        'tint-t-4':'rgba(var(--tint-t-4), <alpha-value>)',
        'tint-t-5':'rgba(var(--tint-t-5), <alpha-value>)',

        'action-warning':'rgba(var(--action-warning), <alpha-value>)',
        'action-error':'rgba(var(--action-error), <alpha-value>)',
        'action-success':'rgba(var(--action-success), <alpha-value>)',
      },
      backgroundColor:{
          disabled:'rgba(var(--neutral-silver), <alpha-value>)'
      },
      textColor:{
        disabled:'rgba(var(--neutral-grey-blue), <alpha-value>)'
      },
      boxShadow:{
        'shadow-2':'var(--shadow-2)',
        'shadow-4':'var(--shadow-2)',
        'shadow-6':'var(--shadow-2)',
        'shadow-8':'var(--shadow-2)',
        'shadow-16':'var(--shadow-2)',
      },
      borderRadius:{
        none: 'var(--border-radius-non)',
        sm:'var(--border-radius-sm)',
        md:'var( --border-radius-md)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
