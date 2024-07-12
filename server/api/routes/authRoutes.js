import express from 'express';

const authRouter = express.Router();

authRouter.post('/login',login);
authRouter.post('/register', register);

