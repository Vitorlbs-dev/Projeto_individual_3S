import { useEffect, useState } from "react";
import styles from "./ListaAutomoveis.module.css";

function ListaAutomoveis({atualizarLista}) {

    const [automoveis, setAutomoveis] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    const buscarAutomoveis = async () => {

        try {

            const resposta = await fetch("http://localhost:8080/automoveis");

            if (!resposta.ok) {
                throw new Error("Erro ao buscar os automóveis");
            }

            const dados = await resposta.json();

            setAutomoveis(dados);

        } catch (error) {

            setErro(error.message);

        } finally {

            setCarregando(false);

        }
    };

    useEffect(() => {
        buscarAutomoveis();
    }, [atualizarLista]);

    if (carregando) {
        return <p>Carregando automóveis...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <div className={styles.lista}>

            <h2>Automóveis cadastrados</h2>

            {automoveis.length === 0 ? (
                <p>Nenhum automóvel cadastrado.</p>
            ) : (
                <div className={styles.cards}>

            {automoveis.map((automovel) => (
                <div className={styles.card} key={automovel.id}>

                    <h3>
                        {automovel.marca} {automovel.modelo}
                    </h3>

                    <p>Ano: {automovel.ano}</p>
                    <p>Cor: {automovel.cor}</p>
                    <p>Preço: R$ {automovel.preco}</p>
                    <p>Quilometragem: {automovel.quilometragem} km</p>

                </div>
            ))}

        </div>
            )}

        </div>
    );
}

export default ListaAutomoveis;