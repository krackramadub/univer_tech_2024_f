import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client';

const router = express.Router()
const prisma = new PrismaClient()

export default router