import { Router } from 'express';
const router = new Router();
router.all('*', (req, res) => {
  console.log('not implemented');
  res.status(404).send('Not implemented!');
});
export default router;