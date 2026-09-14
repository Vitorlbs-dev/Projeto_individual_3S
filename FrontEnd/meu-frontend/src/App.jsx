import FormularioAutomovel from './components/FormularioAutomovel/FormularioAutomovel'
import ListaAutomoveis from './components/ListaAutomoveis/ListaAutomoveis'
import { useState } from "react";
import styles from "./App.module.css";
import './App.css'

function App() {
  const [atualizarLista, setAtualizarLista] = useState(0);
  return(
           <div>

            <header className={styles.header}>
                <h1>AutoCatalog</h1>
                <p>Catálogo de Automóveis</p>
            </header>

            <FormularioAutomovel
                atualizarLista={() => setAtualizarLista(atualizarLista + 1)}
            />

            <ListaAutomoveis
                atualizarLista={atualizarLista}
            />

        </div>
  

  )
  
}

export default App
