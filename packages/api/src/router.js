import { Router } from 'express';
import * as event from './controllers/event/index.js';
import * as middleware from './middlewares/index.js';
import * as user from './controllers/user/index.js';

const router = Router();

const resolver = handlerFn => (req, res, next) =>
  Promise.resolve(handlerFn(req, res, next)).catch(error => next(error));

router.post('/event', resolver(event.create));
router.get('/calendar/:week_and_year', resolver(event.get));

router.post('/user', resolver(user.create));

router.post(
  '/login',
  resolver(middleware.userLogin),
  resolver(middleware.generateJwt)
);

export { router };
