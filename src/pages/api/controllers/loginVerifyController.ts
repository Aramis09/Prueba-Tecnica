import { DataUserType, VerifyType } from "@/interfaces"
import { state } from "../db/users"





interface FindUserType {
  dataUser:DataUserType
}

export function findUser({dataUser}:FindUserType):VerifyType {
  
  const userFound = state.users.find(user => String(user.email) === String(dataUser.email))
  const verifyPassword = userFound && userFound.password !== dataUser.password
  if(!userFound) return {
    verify:false,
    message: "please send a correctly email",
    error: "user Not found"
  } 
  if(verifyPassword) return {
    verify:false,
    message: "please send a correctly password",
    error: "Password incorrectly"
  }
  return {
    verify:true,
    message: "all correct",
    error: undefined
  }
}