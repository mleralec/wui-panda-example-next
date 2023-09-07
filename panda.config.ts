import { defineConfig } from '@pandacss/dev'
import { preset } from "@welcome-ui/core"

export default defineConfig({
  preflight: true,
  include: ['./node_modules/@welcome-ui/**/dist/index.css.json', './src/pages/*.{ts,tsx}',],
  exclude: [],
  jsxFramework: 'react',
  outdir: '@welcome-ui/panda',
  emitPackage: true,
  minify: false,
  hash: false,
  presets: [preset],
})
