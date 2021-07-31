# my-first-app

## Project setup
```
npm install
```
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

- node --version
- npm install -g @vue/cli
- vue --version
- vue create my-app
- cd my-app
- npm run serve
- additional: Vue VSCode Snippets


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Example of 2 ways creating components:

import Vue from 'vue'

//first way to create component

const Button = Vue.component('Btn', {
  render(createElement) {
    return createElement('button', this.$slots.default)
  }
})

// second way to crete component => not useful due Vue does not compile 
template diring compilation => needs permition

const Button = Vue.component('Btn', {
  template: '<button>Click me </button>'
})



export default Button