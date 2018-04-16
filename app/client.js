import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js';
import { Store } from 'svelte/store';

init(document.querySelector('#sapper'), routes, {
  store: data => {
    return new Store(data);
  }
});

if (module.hot) module.hot.accept();