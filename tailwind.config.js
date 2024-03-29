/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1s ease-in forwards",
                moveRi: "moveRi 1s ease-in forwards",
                moveLe: "moveLe 1s ease-in forwards",
                moveUp: "moveUp 0.7s ease-in forwards"
            },
            colors: {
                trans: {
                    1: "#5BCEFA",
                    2: "#F5A9B8",
                    3: "#FFFFFF"
                },
                lesbian: {
                    1: "#D52D00",
                    2: "#FF9A56",
                    3: "#FFFFFF",
                    4: "#D162A4",
                    5: "#A30262"
                }
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                },
                moveRi: {
                    "0%": {
                        opacity: 0 ,
                        transform: "translate(-100px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0px)"
                    }
                },
                moveLe: {
                    "0%": {
                        opacity: 0 ,
                        transform: "translate(100px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(0px)"
                    }
                },
                moveUp: {
                    "0%": {
                        opacity: 0 ,
                        transform: "translateY(50px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0px)"
                    }
                }
            },
            variants: {
                animation: ["motion-safe"]
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
