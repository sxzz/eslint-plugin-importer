import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'neutral',
  dts: {
    tsgo: true,
  },
  exports: true,
})
