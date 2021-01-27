module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    left: {
      '0': '0px',
      '8': '2rem',
      '-10': '-2.5rem',
      '-20': '-5rem',
      '-30': '-7.5rem',
      '-40': '-10rem'
    },
    right: {
      '0': '0',
      '-10': '-2.5rem',
      '-20': '-5rem',
      '-30': '-7.5rem',
      '-40': '-10rem'
    },
    screens: {
      'phone1': '410px',
      'phone2': '420px',
      'smallDesktop': '560px',
      'sm': '640px',
      'tablet': '769px',
      'half': '1024px',
      '3quart': '1280px',
      'full': '1536px',
      'screen': '1850px'
    },
    fontFamily: {
      'sans': ['Oswald', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '13xl': '11rem',
    },
    height: {
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      15: '4rem',
      18: '4.5rem',
      20: '5rem',
      28: '7rem',
      30: '7.5rem',
      36: '9rem',
      40: '10rem',
      42: '10.5rem',
      48: '12rem',
      52: '13rem',
      54: '13.5rem',
      56: '14rem',
      96: '24rem',
      112: '32rem',
      120: '36rem',
      128: '40rem',
      192: '48rem',
      '60': '15rem',
      '10p': '10%',
      '20p': '20%',
      '25p': '25%',
      '30p': '30%',
      '40p': '40%',
      '50p': '50%',
      '60p': '60%',
      '70p': '70%',
      '80p': '80%',
      '90p': '90%',
      '100p': '100%',
      '35vh': '35vh',
      '40vh': '40vh',
      '50vh': '50vh',
      auto: 'auto',
      full: '100%',
      screen: '100vh',
      homeIMG: '40.5rem',
      detailsHeight: '85vh',
      detailsInHeight: 'calc(85vh - 10rem)'
    },
    width: {
      0: '0px',
      0.5: '0,125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      22: '5.5rem',
      24: '6rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      34: '8.5rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      66: '16.5rem',
      72: '18rem',
      80: '20rem',
      84: '21rem',
      88: '22rem',
      92: '23rem',
      96: '24rem',
      100: '22rem',
      104: '28rem',
      108: '30rem',
      112: '32rem',
      120: '36rem',
      128: '40rem',
      192: '48rem',
      '20p': '20%',
      '30p': '30%',
      '40p': '40%',
      '80p': '80%',
      '90p': '90%',
      full: '100%',
      auto: 'auto',
      detailsWidth: '85vw',
      screen: '100vw',
      slider: '100rem',
      slider90: '90rem',
      slider80: '80rem',
      slider3Quart: '75rem',
      slider60: '60rem',
      sliderHalf: '50rem',
      sliderTablet: '35rem',
      sliderPhone: '30rem',  
      sliderQuarter: '25rem',
      sliderMobile1: '18rem',
      sliderMobile: '15rem',
      header: '98rem',
      header3Quart: '72rem',
      headerHalf: '48rem',
      headerTablet: '33rem',
      headerPhone: '28rem',
      headerQuarter: '23rem',
      headerMobile: '14rem',
      headerMobile1: '17rem',
      orgbyCategory: '115rem',
      orgbyCategory3Quart: '86.25rem',
      orgbyCategoryHalf: '57.5rem',
      orgbyCategoryQuarter: '28.75rem'
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '60': 60,
      '70': 70,
      '80': 80,
      '90': 90,
      '100': 100,
      'auto': 'auto',
    },
    extend: {
      backgroundImage: theme => ({
        'volunteer': "url('./images/volunteer.png')",
      }),
      keyframes: {
        toggleNav: {
          '0%': { transform: 'translateY(-150%)' },
          '100%': { transform: 'translateY(0px)' }, 
        },
        unToggleNav: {
          '0%': { transform: 'translateY(0px)' }, 
          '100%': { transform: 'translateY(-150%)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
      },
      animation: {
        toggleNav: 'toggleNav 0.5s ease-in-out',
        unToggleNav: 'unToggleNav 0.5s ease-in-out',
        toggleSidebar: 'toggleSidebar 0.5s ease-in-out',
        unToggleSidebar: 'unToggleSidebar 0.5s ease-in-out',
        appear: 'appear 0.75s ease-in-out',
        appear1: 'appear 1s ease-in-out',
        appear2: 'appear 1.25s ease-in-out',
        appear3: 'appear 1.5s ease-in-out',
        appear4: 'appear 1.75s ease-in-out',
        appear5: 'appear 2s ease-in-out',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
