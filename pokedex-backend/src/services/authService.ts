
import { prismaClient } from '../database/prismaClient.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (name: string, email: string, password: string) => {
  // 1. Verificar se o e-mail já existe
  const userExists = await prismaClient.user.findUnique({ where: { email } });
  if (userExists) {
    throw new Error('Email já cadastrado.');
  }

  // 2. Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Criar o usuário e a Pokédex associada
  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      pokedex: {
        create: {} // Cria uma Pokédex vazia para o novo usuário
      }
    },
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  // 1. Encontrar o usuário pelo e-mail
  const user = await prismaClient.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error('Credenciais inválidas.');
  }

  // 2. Comparar a senha fornecida com a senha criptografada
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error('Credenciais inválidas.');
  }

  // 3. Gerar um token JWT
  const secret = process.env.JWT_SECRET || 'your_secret_key';
  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

  return { user, token };
};