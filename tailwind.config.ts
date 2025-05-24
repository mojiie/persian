import animatePlugin from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                purple: {
                    500: '#7A3DE2',
                    800: '#43217C',
                },

                black: {
                    200: '#A0A0A0',
                    400: '#595959',
                    500: '#303030',
                    900: '#141414',
                },

                white: {
                    100: '#FFFFFF',
                    200: '#FCFCFC',
                },

                grey: {
                    50: '#F9F9F9',
                    100: '#ECECEC',
                    600: '#B1B1B1',
                    700: '#8A8A8A',
                    800: '#6B6B6B',
                    900: '#515151',
                },

                red: {
                    400: '#E13333',
                },
            },
        },
    },
    plugins: [animatePlugin],
} satisfies Config;
