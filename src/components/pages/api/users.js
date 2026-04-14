import fs, { readFile, readFileSync } from 'fs'
import path from 'path'

export default function handler(req , res) {

  const filePath  = path.join(process.cwd() , 'data' ,'users.json')

  try {
    const fileContent = readFileSync(filePath , 'utf-8')
    const users = JSON.parse(fileContent)

    if  (req.method == 'GET'){
      res.status(200).json(users)
    }
    else if(req.method == 'POST') { 
      const newUser = req.body
    }
    req.status(201).json({message:'کاربر  با  موفقیت اضافه  شد  '})
  } catch (error) {
    console.error('خطا  در  خواندن  فایل  ها  ' ,  error);
    res.status(500).json({message : 'خطا  در  سرور '})
  }

}