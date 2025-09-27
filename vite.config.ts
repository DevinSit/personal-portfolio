import path from "path";
import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    // Tech Debt: Should switch to new import Sass import system.
                    // Ref: https://sass-lang.com/documentation/breaking-changes/import/
                    "import"
                ]
            }
        }
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            // This is for Sass imports, not TypeScript.
            // TypeScript imports are handled by the `vite-tsconfig-paths` plugin.
            "@": path.resolve(__dirname, "./src")
        }
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
        strictPort: true
    },
    preview: {
        // Keep using port 3000 cause of CORS reasons (Backend only allows port 3000 on localhost).
        port: 3000
    }
});
