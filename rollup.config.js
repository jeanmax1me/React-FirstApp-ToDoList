import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.jsx', // Update the entry point here
  output: {
    file: 'dist/main.js',
    format: 'esm',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.svelte'], // Add the extensions option
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    postcss({ extract: false }),
  ],
  external: ['react', 'react-dom'],
};
