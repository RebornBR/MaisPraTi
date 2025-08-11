import { useState, useEffect } from 'react';
import axios from 'axios';
import FilmeCard from '../../components/filmeCard/FilmeCard.jsx';
import ModalFilmeDetalhe from '../../components/modalFilmeDetalhes/ModalFilmeDetalhe.jsx';
import './home.css';

function Home() {
    const [filmeInput, setFilmeInput] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [filmeDetalhes, setFilmeDetalhes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);



    const apiKey = "b12bcf6e"

    async function procurarFilmes(e) {
        e.preventDefault();
        setError(null);
        const getSearch = `https://www.omdbapi.com/?apikey=${apiKey}&s=${filmeInput}`
        setLoading(true);
        try {
            const response = await axios.get(getSearch);
            if (response.data.Search && Array.isArray(response.data.Search)) {
                const filmesOrdenados = [...response.data.Search].sort((a, b) => a.Year.localeCompare(b.Year));
                setFilmes(filmesOrdenados);
            } else {
                setFilmes([]);
                setError(`Nenhum filme com: ${filmeInput} foi encontrado.`);
            }
            setLoading(false);
        } catch (err) {
            setError('Erro ao carregar filmes:');
            setLoading(false);
        }
    }


    async function detalhesFilme(imdbID) {
        setError(null);
        const getDetalhes = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
        try {
            const response = await axios.get(getDetalhes);
            if (response.data) {
                return response.data;
            } else {
                setError('Detalhes do filme não encontrados.');
            }
        } catch (err) {
            setError('Erro ao carregar detalhes do filme:');
        }
    }

    async function clickModalFilmeDetalhe(imdbID) {
        const detalhes = await detalhesFilme(imdbID);
        if (detalhes) {
            setFilmeDetalhes(detalhes);
            setModalAberto(true);
        }
    }

    return (
        <div className="container">
            <form className='pesquisa-filme' onSubmit={procurarFilmes}>
                    <input type="text"
                        placeholder='Digite o nome do filme'
                        value={filmeInput}
                        onChange={(e) => setFilmeInput(e.target.value)}
                    />
                    <button type='submit' id='butao-pesquisa'>Buscar</button>
            </form>
            <FilmeCard
                filmes={filmes}
                loading={loading}
                error={error}
                clickModalDetalheFilme={clickModalFilmeDetalhe}
            />
            {modalAberto && filmeDetalhes && (
                <ModalFilmeDetalhe
                    filmeDetalhe={filmeDetalhes}
                    onClose={() => setModalAberto(false)}
                />
            )}
        </div>
    )
}


export default Home;