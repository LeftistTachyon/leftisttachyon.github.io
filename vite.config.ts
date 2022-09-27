import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { minify } from "html-minifier";

const minifyHtml = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    optimizeDeps: {
      exclude: ["@roxi/routify"],
    },
    plugins: [svelte(), isProduction && minifyHtml()],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        "@lib": resolve(__dirname, "./src/lib"),
      },
    },
  };
});
