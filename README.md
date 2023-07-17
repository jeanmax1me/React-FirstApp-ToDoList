# React-FirstApp-ToDoList
my first React project


Ah the classic TodoList, my first app using React.

I followed this great tutorial from Web Dev Simplified > https://www.youtube.com/watch?v=Rh3tobg7hEo

few things: 

While I didn't really learn much React from doing this as I just copy pasted his code, I could start to gain an understanding of the logic of React. 
My eslint kept highlighting "props" , so I googled how to disable this option, which I added inside the rules in the .eslintrc.cjs file
I have completely reworked the CSS file to give it a different appearence, I think my CSS is much cooler than the original from the project now

It was a great introduction to React, it looks quite complicated but I'm sure with enough practice things starts to fall into place. 

Then, when the project was finished and I wanted to upload it to Github Pages. The real issues arrived. Oh god. 
I add to install and read the tutorial of Babel, to transpile my JSX React files to JS. 
Did that. 
Turns out it was not enough, I still had CommonJS syntax where I should have ESM or ES6.
Had to research again what is the issue, turns out I have to install a bundler, chose Rollup. 

I had multiple errors with Rollup:
[!] RollupError: "default" is not exported by "node_modules/react-dom/client.js", imported by "src/main.jsx". 

> Solution: The error is due to the import of ReactDOM from react-dom/client in src/main.jsx file. the react-dom/client module does not export a default property. Instead, you should import ReactDOM directly from react-dom.

[!] RollupError: Could not resolve "./TodoList" from "src/App.jsx"

> Solution: this one took many hours to fix, I ended up with this rollup.config.js settings
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
    postcss({ extract: true, minimize: true }),
  ],
  external: ['react', 'react-dom'],
};

 Ah yes also add to npm install PostCSS and Node-Resolve, and also worked out this config file step by step with chatGPT and google. 
 So all in all, React tutorial : 2 hours 
 Deploying the React tutorial : 6 hours 
 lol 
