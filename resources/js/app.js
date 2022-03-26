/* require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start(); */


import { createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'



InertiaProgress.init({
  color:'red',
  showSpinner:true
})


createInertiaApp({
  resolve: name => require(`./Pages/${name}.svelte`),
  setup({ el, App, props }) {
    new App({ target: el, props })
  }
})