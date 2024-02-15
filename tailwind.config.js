const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg-color)',
                primary: 'var(--bg-color-primary)',
                foreground: 'var(--text-color)',
            },
            content: {
                tick: 'url(/src/app/assets/checkbox_tick.svg)',
            },
            backgroundImage: {
                cross: 'var(--cross)',
            },
            boxShadowColor: {
                color: 'var(--header-shadow-color)',
            },
            boxShadow: {
                header: 'var(--header-shadow)',
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.shadow-header': {
                    'box-shadow':
                        'var(--header-shadow) var(--header-shadow-color)',
                },
            });
        }),
    ],
};
