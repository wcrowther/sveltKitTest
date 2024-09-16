
/** @type {import('tailwindcss').Config} */
export default 
{
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = 
{
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xxs:'390px',
      xs: '480px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: 
    {
      boxShadow: {
        main: '-8px 8px 18px -4px rgba(97,97,97,0.75)'
      },
      backgroundImage: {
        'gradient-main':      'linear-gradient( 205deg, #b8d7ed 0%, white 35%)',
      },
      colors: ({ colors }) => ({
        'warm': {
          DEFAULT: '#A9A791',
          '50': '#E8E7E1',
          '100': '#DFDED6',
          '200': '#CDCCBF',
          '300': '#BBB9A8',
          '400': '#A9A791',
          '500': '#908E72',
          '600': '#716F59',
          '700': '#525040',
          '800': '#323127',
          '900': '#13120F'
        },
        'slate':    { DEFAULT: colors.slate['500'],   ...colors.slate},
        'gray':     { DEFAULT: colors.gray['500'],    ...colors.gray},
        'zinc':     { DEFAULT: colors.zinc['500'],    ...colors.zinc},
        'neutral':  { DEFAULT: colors.neutral['500'], ...colors.neutral},
        'stone':    { DEFAULT: colors.stone['500'],   ...colors.stone},
        'red':      { DEFAULT: colors.red['500'],     ...colors.red},
        'orange':   { DEFAULT: colors.orange['500'],  ...colors.orange},
        'amber':    { DEFAULT: colors.amber['500'],   ...colors.amber},
        'yellow':   { DEFAULT: colors.yellow['500'],  ...colors.yellow},
        'lime':     { DEFAULT: colors.lime['500'],    ...colors.lime},
        'green':    { DEFAULT: colors.green['500'],   ...colors.green},
        'emerald':  { DEFAULT: colors.emerald['500'], ...colors.emerald},
        'teal':     { DEFAULT: colors.teal['500'],    ...colors.teal},
        'cyan':     { DEFAULT: colors.cyan['500'],    ...colors.cyan},
        'sky':      { DEFAULT: colors.sky['500'],     ...colors.sky},
        'blue':     { DEFAULT: colors.blue['500'],    ...colors.blue},
        'indigo':   { DEFAULT: colors.indigo['500'],  ...colors.indigo},
        'violet':   { DEFAULT: colors.violet['500'],  ...colors.violet},
        'purple':   { DEFAULT: colors.purple['500'],  ...colors.purple},
        'fuchsia':  { DEFAULT: colors.fuchsia['500'], ...colors.fuchsia},
        'pink':     { DEFAULT: colors.pink['500'],    ...colors.pink},
        'rose':     { DEFAULT: colors.rose['500'],    ...colors.rose},
        'color-gray':             '#cccccc',
        'color-lighter-gray':     '#e8e8e8', 
        'color-light-gray':       '#dddddd',
        'color-mid-gray':         '#b7b7b7',
        'color-dark-gray':        '#595A50',
        'color-red':              '#e53119',
        'color-dark-red':         '#b0321f',
        'color-primary':          '#99b3cf',  
        'color-secondary':        '#9b6f24',
        'color-tertiary' :        '#d6901a',
        'color-blue-gray':        '#99b3cf',
        'color-light-blue':       '#b8d7ed',
        'color-mid-blue':         '#6fa2ca',
        'color-blue':             '#1c2157',
        'color-dark-blue':        '#3e5091' 
      }),   
      fontFamily: {
        sans: 'Verdana, Helvetica, Sans-Serif', //Roboto, "Trebuchet MS", 
        serif: 'serif', // "Roboto Serif", Merriweather, 
        // display: '"Roboto Condensed", Merriweather, "Trebuchet MS", Verdana, Helvetica, Sans-Serif',
      },     
      fontSize: {
          xxs: ['0.5rem', { lineHeight: '.75rem' }],
      } 
    }
  },
  plugins: [ 
    require('@tailwindcss/forms'),
  ],
  
}
