import { useEffect, useState } from "react"

const useToken = user =>{

    const [token , setToken]=useState('');

    useEffect(()=>{
         const email = user?.user?.email;
         const password = user?.user?.password;
         
         const currentUser = {email: email , password : password};
          if(email){
              fetch(`https://computer-mart2.onrender.com/user/${email}`,{
                  method:'PUT',
                  headers:{
                      'content-type': 'application/json'
                      

                  },
                  body:JSON.stringify(currentUser)

              })
              .then(res => res.json())
              .then (data =>{
                  console.log(data)
                  const accesstoken = data.token;
                  localStorage.setItem('accessToken' ,accesstoken);


                  setToken(accesstoken)
              })
          }

    },[user]);
    return[token];

}

export default useToken;