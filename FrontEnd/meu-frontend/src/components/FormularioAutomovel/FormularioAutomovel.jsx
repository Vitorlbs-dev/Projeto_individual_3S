import { useState } from "react";
import styles from "./FormularioAutomovel.module.css";

function FormularioAutomovel({atualizarLista}){

    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");
    const [cor, setCor] = useState("");
    const [preco, setPreco] = useState("");
    const [quilometragem, setQuilometragem] = useState("");
   

    const cadastrarFormulario = async (event) => {
        event.preventDefault()

        setCarregando(true);
        setMensagem("");
        setErro("");

        const automovel = {
            marca:marca,
            modelo:modelo,
            ano: Number(ano),
            cor:cor,
            preco: Number(preco) ,
            quilometragem: Number(quilometragem)
        }

       try {

        const resposta = await fetch("http://localhost:8080/automoveis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(automovel)
        });

        if (!resposta.ok) {
            const mensagemErro = await resposta.text();
            throw new Error(mensagemErro);
        }

        setMensagem("Automóvel cadastrado com sucesso!");
         
        setMarca("");
        setModelo("");
        setAno("");
        setCor("");
        setPreco("");
        setQuilometragem("");
        atualizarLista(); 

    } catch (error) {

        setErro(error.message);

    } finally {

        setCarregando(false);
          
    };

}

return (
        <form className={styles.formulario}
            onSubmit={cadastrarFormulario}>

            <h2>Cadastrar Automóvel</h2>

            <label>Marca</label>
            <input
                type="text"
                value={marca}
                onChange={(event) => setMarca(event.target.value)}
                />

                 <label>Modelo</label>
            <input
                type="text"
                value={modelo}
                onChange={(event) => setModelo(event.target.value)}
            />

            <label>Ano</label>
            <input
                type="number"
                value={ano}
                onChange={(event) => setAno(event.target.value)}
            />

            <label>Cor</label>
            <input
                type="text"
                value={cor}
                onChange={(event) => setCor(event.target.value)}
            />

            <label>Preço</label>
            <input
                type="number"
                value={preco}
                onChange={(event) => setPreco(event.target.value)}
            />

            <label>Km</label>
            <input
                type="text"
                value={quilometragem}
                onChange={(event) => setQuilometragem(event.target.value)}         
                />

            {carregando && <p>Salvando automóvel...</p>}

            {mensagem && <p>{mensagem}</p>}

            {erro && <p>{erro}</p>}   

            <button type="submit"disabled={carregando}>
                {carregando ? "Salvando..." : "Cadastrar Automóvel"}
            </button>

        </form>
        
    );


         
}

export default FormularioAutomovel;