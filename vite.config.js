import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import WindiCSS from "vite-plugin-windicss";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/index.jsx"],
            refresh: true,
        }),
        WindiCSS(),
        react(),
    ],
});
