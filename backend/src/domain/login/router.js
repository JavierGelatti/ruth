import { Router } from 'express';

var Controller = require('./controller');

const router = Router({ promise: true });


router.route('/api/auth/callback/')
  .get(Controller.backofficeCallback)


export default router;