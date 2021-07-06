import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const ex = [{
  input: './src/UnicodeEditor.tsx',
  output: [
    { file: './dist/lib.js', format: 'esm' },
  ],
  plugins: [
    typescript({ lib: ['es5', 'es6', 'dom'], target: 'es6' }),
  ],
  external: ['react', 'react/jsx-runtime'],
},
{
  input: './typings/UnicodeEditor.d.ts',
  output: [{ file: 'dist/lib.d.ts', format: 'es' }],
  plugins: [dts({})],
}];

export default ex;