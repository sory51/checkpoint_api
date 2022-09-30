import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [listOfUSer, setListOfUser] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setListOfUser(response.data);
    });
  }, []);
  console.log(listOfUSer);

  if (!listOfUSer) return null;

  return (
    <div >
             <table>
                     <tr>
                         <th>name</th>
                         <th>username</th>
                        <th>email</th>
                         <th>street</th>
                         <th>suite</th>
                         <th>city</th>
                         <th>phone</th>
                      </tr>
 
            {
                listOfUSer.map(user=>(
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                  </tr>               
                             ))
             }
    
    </table>
    </div>
    );
       
    
 
   

}