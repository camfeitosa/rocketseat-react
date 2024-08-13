import React from 'react' // o core do react - completo
import ReactDOM from 'react-dom/client' // core do react com o Document Object Model
import {App} from './App.jsx'

// Qual é o elemento raiz da nossa página HTML = root
ReactDOM.createRoot(document.getElementById('root')).render(
  // 
  <React.StrictMode>
    <App />
    {/* <h1>Camila</h1> */}
  </React.StrictMode>,
)
