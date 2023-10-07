import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import WindiCSS from "vite-plugin-windicss"; // Add this line

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        WindiCSS(), // Add this line
    ],
});
