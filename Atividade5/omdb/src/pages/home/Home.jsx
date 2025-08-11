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
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);


    const apiKey = "b12bcf6e"

    async function procurarFilmes(e) {
        if (e?.preventDefault) e.preventDefault()
        setError(null);
        const getSearch = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${filmeInput}&page=${pagina}`;
        console.log(getSearch);// depurar
        setLoading(true);
        try {
            const response = await axios.get(getSearch);
            if (response.data.Search && Array.isArray(response.data.Search)) {
                setTotalPaginas(Math.ceil(response.data.totalResults / 10));
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

    useEffect(() => {
        if (filmeInput.trim() !== '') {
            procurarFilmes();
        }
    }, [pagina]);

    useEffect(() => {
        if (filmes.length > 0) {
            console.log('Filmes atualizados:', filmes); // depurar
        }
    }, [filmes]);


    function avancarPagina() {
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
        }
    }

    function voltarPagina() {
        if (pagina > 1) {
            setPagina(pagina - 1);
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
                    onChange={(e) => { setFilmeInput(e.target.value);}}
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
            <div className='paginacao'>
                {pagina > 1 && (
                    <button onClick={voltarPagina}><span>&lt;</span></button>
                )}
                {filmes.length > 0 && pagina < totalPaginas && (
                    <button onClick={avancarPagina}><span>&gt;</span></button>
                )}
            </div>

        </div>
    )
}


export default Home;