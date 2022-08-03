import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), external(), commonjs(), typescript({tsconfig: './tsconfig.json'}), postcss()],
  },
  {
    input: 'lib/esm/index.d.ts',
    output: [{file: 'lib/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
