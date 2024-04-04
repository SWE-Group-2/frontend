import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

const env = loadEnv("", process.cwd());
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
    'import.meta.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(env.VITE_GOOGLE_CLIENT_ID),
  }
});
