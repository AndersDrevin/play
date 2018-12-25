import { Router } from 'express';
const router = new Router();
router.all('*', (req, res) => {
  res.status(404).send('Not implemented!');
});
export default router;