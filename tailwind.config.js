/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
        fontFamily: {
            figtree: ["Figtree", "sans-serif"],
            coolvetica: ["Coolvetica","sans-serif"],
        },
        colors: {
            white: colors.white,
            neutral: colors.neutral,
            primary: {
                50: "#effaff",
                100: "#daf3ff",
                200: "#beebff",
                300: "#91dfff",
                400: "#5ecbfc",
                500: "#38aff9",
                600: "#2293ee",
                700: "#1976d2",
                800: "#1c63b1",
                900: "#1c548c",
                950: "#163355",
            },
        },
    },
    plugins: [],
};
