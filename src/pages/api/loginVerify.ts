import { NextApiRequest, NextApiResponse } from "next";
import { findUser } from "./controllers/loginVerifyController";
import { DataUserType, VerifyType } from "@/interfaces";



export default async function verifyLogin(
  req: NextApiRequest,
  res: NextApiResponse<VerifyType | any>
) {
  try {
    if(req.method !== "POST") throw new Error("please use a correctly method")
    const dataUser:DataUserType = JSON.parse( req.body);
    const userFound = findUser({dataUser}) 
    if(userFound.error) return res.status(200).json(userFound)
    return res.status(200).json(userFound)
  } catch (error) {
    return res.status(400).json({error:error})
  }
}