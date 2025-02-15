import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
    globals: true,
    coverage: {
      provider: "istanbul",
      exclude: ["*/**/errors/*", "test/**/*"],
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
