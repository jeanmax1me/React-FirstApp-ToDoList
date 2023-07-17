# React-FirstApp-ToDoList
my first React project


Ah the classic TodoList, my first app using React.

I followed this great tutorial from Web Dev Simplified > https://www.youtube.com/watch?v=Rh3tobg7hEo

few things: 

While I didn't really learn much React from doing this as I just copy pasted his code, I could start to gain an understanding of the logic of React. 
My eslint kept highlighting "props" , so I googled how to disable this option, which I added inside the rules in the .eslintrc.cjs file
I have completely reworked the CSS file to give it a different appearence, I think my CSS is much cooler than the original from the project now

It was a great introduction to React, it looks quite complicated but I'm sure with enough practice things starts to fall into place. 

Then, when the project was finished and I wanted to go through the normal process of distribution. The real issues arrived. Oh god. 
I add to install and read the tutorial of Babel, to transpile my JSX React files to JS. 
Did that. 
It was not enough, I still had CommonJS syntax where I should have ESM or ES6.
Had to research again what is the issue, turns out I have to install a bundler, chose Rollup. 
Then also add to install Node-Resolve and PostCSS.
Finally worked out thanks to ChatGPT and Google a rollup config, vite config, babel config (especially the rollup one) that did the job. So here is the full JS in ./assets

I uploaded the rollup config as it was really the hardest part of all of this.

React tutorial = 2 hours

Deploying the React tutorial to Github pages = 8 hours 

lol 
