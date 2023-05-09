export const verifyDataUserMock = ({fields})=> {
  const response = fetch(`http://localhost:3000/api/loginVerify`, {
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

module.exports = {
  email: "grupoASD@gmail.com",
  password: "Rjs2022*",
  verifyDataUserMock
};