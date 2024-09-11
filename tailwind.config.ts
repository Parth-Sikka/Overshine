import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#0D4C79",
                secondaryColor: "#72B000",
                accentColor: "#0DC6FE",
                gradientBlue1: "#C8F2FF",
                gradientBlue2: "#C8F2FF",
                gradientBlue3: "#F5F8FA",
                gradientBlue4: "#DEF7FF"
            },
            // that is animation class
            animation: {
                fade: 'fadeOut 5s ease-in-out',
            },
        },
    },
    variants: {},
    plugins: [],
};
export default config;
