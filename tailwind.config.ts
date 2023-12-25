import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    content: [
        './pages/**/*.{html,js,vue,jsx,tsx}',
        './components/**/*.{html,js,vue,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'gilroy-heavy': ['Gilroy Heavy', 'sans-serif'],
            'gilroy-black': ['Gilroy Black', 'sans-serif'],
            'gilroy-extrabold': ['Gilroy ExtraBold', 'sans-serif'],
            'gilroy-bold': ['Gilroy Bold', 'sans-serif'],
            'gilroy-semibold': ['Gilroy SemiBold', 'sans-serif'],
            'gilroy-medium': ['Gilroy Medium', 'sans-serif'],
            'gilroy-regular': ['Gilroy Regular', 'sans-serif'],
            'gilroy-light': ['Gilroy Light', 'sans-serif'],
            'gilroy-UL': ['Gilroy UL', 'sans-serif'],
            'gilroy-thin': ['Gilroy Thin', 'sans-serif'],
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1000px',
            'xl': '1300px',
            '2xl': '1700px'
        },
        container: {
            center: true
        },
        extend: {
            colors: {
                orange: '#FF4C00',
                white: '#FFF',
                yellow: '#FBB01C',
                brown: '#6C4133',
            },
            screens: {
                'xs': '320px',
                's': '480px',
            },
            fontSize: {
                logo: '2.625rem',
                link: '1.125rem',
            },
            opacity: {
                'link-active': '0.88',
                'link-non-active': '.5'
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
            }
        },
    },
    plugins: [],
}