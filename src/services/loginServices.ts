interface FieldsLogin {
  email:string
  password:string
}
interface VerifyDataUserType {
  fields:{ [k: string]: FormDataEntryValue; } | FieldsLogin
}
interface CheckData {
  email:string
  message:string
  verify:boolean
  error:string | undefined
}
export const verifyDataUser = ({fields}:VerifyDataUserType)=> {
  const response:Promise<CheckData> = fetch(`http://localhost:3000/api/loginVerify`, {
    method: "POST",
    body: JSON.stringify(fields),
  })
    .then((res) => res.json())
    .then((accountStatus) => {
      accountStatus.email = fields.email;
      return accountStatus;
    })
    .catch(() => {
      return  {
        verify: false,
        message: "server failed",
        error: "server failed",
        email: "",
       }
    })
    
    return response
}