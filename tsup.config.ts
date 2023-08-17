import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.prod.ts"],
  clean: true,
  splitting: true,
  minify: true,
  format: ["esm", "cjs"],
  dts: true,
  outDir: "./dist",
});
