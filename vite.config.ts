import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "lcov"],
    },
  },
  define: {
    'import.meta.env.VITE_GOOGLE_CLIENT_ID': 'process.env.VITE_GOOGLE_CLIENT_ID'
  }
});
