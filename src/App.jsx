// JSX = JavaScript + XML
// import { Post } from "./Post";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import {Header}  from "./components/Header";
import './global.css'

// import styles from './App.modules.css'

export function App() {
  const [textos,setTextos] = useState([])
  useEffect(() => {
    const getCharacters = async () => {
        
          await fetch("https://rickandmortyapi.com/api/character", {
            method:"GET"
          }).then((res) => {
          return res.json()
          }).then((data) => {
            setTextos(data.results)
            console.log(data.results)
          }).catch((err) => {
            console.log(err)
          })

    }

    getCharacters()
  },[])

  const names = ["Digite seu nome", "Digite seu email", "Digite sua senha"]

  return (
    <div> 
      <Header/>
      {names.map(item => {
        return <Form key={item.id} texto={item.name}/>
      })}

      {textos.map(item => {
        return <img key={item.id} src={item.image} alt={item.name}/>
      })}
      
      </div>      
  );
}
