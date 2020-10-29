import express from 'express';
const authRouter = express.Router();
import authController from '../controllers/authController';
// import express from 'express';
// import authController from '../controllers/authController';

// Direct user to GitHub for authentication
authRouter.get('/', (_req, res) => {
  res.status(301).redirect(`https://github.com/login/oauth/authorize?client_id=21b87ca77f7f56db3dcf`);
});

// Redirected back from GitHub
authRouter.get('/profile', authController.getData, (_req, _res) => {
  console.log('get here');
  // res.status(200).json('getData done');
});

// export default authRouter;
export default authRouter;