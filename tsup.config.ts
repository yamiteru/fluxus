import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.prod.ts", "./src/index.dev.ts"],
  clean: true,
  splitting: false,
  minify: true,
  format: ["esm", "cjs"],
  dts: true,
  outDir: "./dist",
});
