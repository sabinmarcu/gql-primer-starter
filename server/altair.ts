import { altairExpress } from 'altair-express-middleware';
import config from './config';

export default {
  // @ts-ignore
  applyMiddleware({ app }) {
    app.use(config.altair, altairExpress({
      endpointURL: config.playground,
    }));
  },
};
