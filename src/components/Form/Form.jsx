import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({texto}) => {
  
const [nome,setNome] = useState("")

// const returnHTML = () => {
//   if(nome.toLowerCase() === "murilo"){
//     return (
//       <>
//         <h1>Esse é o melhor nome de todos</h1>
//       </>
//     )
//   }else if(nome.toLowerCase() === "camila"){
//     return(
//       <>
//         <h1>O Murilo ama!</h1>
//       </>
//     )
//   }
// }



  return (<>
      <div>
        <h1>{nome}</h1>
        {/* <input value={nome} onChange={(e) => setNome(e.target.value)}/> */}
        {/* <input placeholder={texto}/> */}
        {/* {returnHTML()} */}
      </div>
  </> );
}
 
export default Form;