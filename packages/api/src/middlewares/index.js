import { verify } from 'argon2';
import jwt from 'jsonwebtoken';

import { prisma } from '../prisma.js';
import { credentialsDecoderByBasicAuth } from '../services/index.js';

export const userLogin = async (req, res, next) => {
  const basicAuth = req.headers.authorization;

  const { email, password } = credentialsDecoderByBasicAuth(basicAuth);

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).send('Usuário não encontrado.');
    }

    const passwordMatch = await verify(user.passwordHash, password);

    if (!passwordMatch) {
      return res.status(401).send('Senha incorreta.');
    }

    req.user = { email };
    return next();
  } catch (error) {}
};

export const generateJwt = (req, res) => {
  try {
    const token = jwt.sign(req.user.email, process.env.SECRET);

    return res.send(token);
  } catch (error) {}
};

export const verifyJwt = (req, res, next) => {
  const params = !!req.params ? req.params : '';

  const token = req.headers.auth;

  try {
    const signed = jwt.verify(`${token}`, process.env.SECRET);

    if (!signed) {
      return res.status(401).send('Falha ao verificar dados.');
    }

    req.params = { params };

    return next();
  } catch (error) {}
};
