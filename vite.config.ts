import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [{find: '@', replacement: resolve(__dirname, 'src')}],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'React-CSStick',
      // the proper extensions will be added
      fileName: 'react-csstick',
    },
    cssCodeSplit: false,
    sourcemap: false,
    outDir: 'lib',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
