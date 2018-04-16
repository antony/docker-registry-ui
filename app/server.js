import polka from 'polka';
import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
import { Store } from 'svelte/store'

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		serve('assets'),
		sapper({
			routes,
			store: request => {
        return new Store({
          dockerRegistry: process.env.DOCKER_REGISTRY_URL
        });
      }
		})
	)
	.listen(process.env.PORT);
