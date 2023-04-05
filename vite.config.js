import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //設定縮寫路徑為@
    },
  },
  esbuild: {
    drop: ["console"],
  },
  server: {
    port: 5173,
  },
});
