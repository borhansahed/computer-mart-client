import { useEffect, useState } from "react"

const UseAdmin = user =>{

     const [admin , setAdmin] = useState(false);

     useEffect( () =>{
         const email = user?.email;
         if(email){
            fetch(`https://cryptic-retreat-01074.herokuapp.com/admin/user/${email}`,{
                method:'GET',
                headers:{
                    'content-type': 'application/json'

                }

            })
            .then(res => res.json())
            .then (data =>{
               setAdmin(data.admin)
            })
        
         }

     } ,[user])
     return [admin]
}
export default UseAdmin