import express from 'express';
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client';

import multer from 'multer';

export const uploadFiles = multer({ dest: './uploads/'})

const router = express.Router()
const prisma = new PrismaClient()


router.post('/upload-avatar',  uploadFiles.single('file'), async (req, res) => {
  const { user } = req.body
  if (req.file && user) {
    let _user = JSON.parse(user)

    const candidate = await prisma.user.findUnique({
      where: {
        email: _user.email
      }
    })
    if (candidate) {
      let _upd_user = await prisma.user.update({
        data: {
          avatar: req.file.filename || ''
        },
        where: {
          email: _user.email
        }
      })
      console.log("🚀 ~ router.post ~ _upd_user:", _upd_user)


    }

    
  }
  res.json({ok: true}).send()
})

export default router