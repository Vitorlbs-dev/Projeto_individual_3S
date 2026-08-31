import FormularioAutomovel from './components/FormularioAutomovel/FormularioAutomovel'
import ListaAutomoveis from './components/ListaAutomoveis/ListaAutomoveis'
import { useState } from "react";
import './App.css'

function App() {
  const [atualizarLista, setAtualizarLista] = useState(0);
  return(
    <div>
       <h1>AutoCatalog</h1>
      <FormularioAutomovel atualizarLista={() => setAtualizarLista(atualizarLista + 1)}/>
      <ListaAutomoveis atualizarLista={atualizarLista} />
    </div>
  

  )
  
}

export default App
