import { useState, useEffect } from 'react';
import axios from 'axios';
import FilmeCard from '../../components/filmeCard/FilmeCard.jsx';
import ModalFilmeDetalhe from '../../components/modalFilmeDetalhes/ModalFilmeDetalhe.jsx';
import './home.css';

function Home() {
    const [filmeInput, setFilmeInput] = useState("");
    const [nomeFilmeBusca, setNomeFilmeBusca] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [filmesFavoritos, setFilmesFavoritos] = useState([]);
    const [filmeFavoritoRemovido, setFilmeFavoritoRemovido] = useState(false);
    const [visualizacao, setVisualizacao] = useState('busca');
    const [filmeDetalhes, setFilmeDetalhes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    const apiKey = "b12bcf6e";

    async function buscarFilmesPorNomePagina(nomeDofilme, paginaAtual) {
        setError(null);
        setLoading(true);
        const getSearch = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${nomeDofilme}&page=${paginaAtual}`;
        try {
            const response = await axios.get(getSearch);
            if (response.data.Search && Array.isArray(response.data.Search)) {
                setTotalPaginas(Math.ceil(response.data.totalResults / 10));
                const filmesOrdenados = [...response.data.Search].sort((a, b) => a.Year.localeCompare(b.Year));
                setFilmes(filmesOrdenados);
            } else {
                setFilmes([]);
                setError(`Nenhum filme com: ${nomeDofilme} foi encontrado.`);
            }
        } catch (err) {
            setError('Erro ao carregar filmes.');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (visualizacao === 'busca' && nomeFilmeBusca.trim() !== '') {
            buscarFilmesPorNomePagina(nomeFilmeBusca, pagina);
        }
    }, [nomeFilmeBusca, pagina, visualizacao]);

    useEffect(() => {
        if (visualizacao === 'favoritos') {
            if (filmesFavoritos.length > 0) {
                setFilmes(filmesFavoritos);
            } else {
                setFilmes([]);
                setError('Nenhum filme favorito encontrado.');
            }
        }
    }, [visualizacao, filmesFavoritos]);

    useEffect(() => {
        const favoritosSalvos = localStorage.getItem('filmesFavoritos');
        if (favoritosSalvos) {
            setFilmesFavoritos(JSON.parse(favoritosSalvos));
        }
    }, []);

    useEffect(() => {
        if (filmeFavoritoRemovido && visualizacao === 'favoritos') {
            setFilmes(filmesFavoritos);
            setFilmeFavoritoRemovido(false);
        }
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [filmesFavoritos, visualizacao, error]);

    function procurarFilmes(e) {
        e.preventDefault();
        setPagina(1);
        setVisualizacao("busca");
        setNomeFilmeBusca(filmeInput);
    }

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
            setError('Erro ao carregar detalhes do filme.');
        }
    }

    async function clickModalFilmeDetalhe(imdbID) {
        const detalhes = await detalhesFilme(imdbID);
        if (detalhes) {
            setFilmeDetalhes(detalhes);
            setModalAberto(true);
        }
    }

    async function adicionaFavorito(filme) {
        const filmeExistente = filmesFavoritos.find(f => f.imdbID === filme.imdbID);
        let novaLista;
        if (filmeExistente) {
            novaLista = filmesFavoritos.filter(f => f.imdbID !== filme.imdbID);
            setError(`O filme ${filme.Title} foi removido dos favoritos.`);
            setFilmeFavoritoRemovido(true);
        } else {
            novaLista = [...filmesFavoritos, filme];
        }
        setFilmesFavoritos(novaLista);
        localStorage.setItem('filmesFavoritos', JSON.stringify(novaLista));
    }

    return (
        <div className="container">
            <form className='pesquisa-filme' onSubmit={procurarFilmes}>
                <input
                    type="text"
                    placeholder='Digite o nome do filme'
                    value={filmeInput}
                    onChange={(e) => setFilmeInput(e.target.value)}
                />
                <div className='botoes'>
                    <button type='submit' id='butao-pesquisa'>Buscar</button>
                    <button type='button' onClick={() => {
                        setPagina(1);
                        setVisualizacao("favoritos");
                    }}>Favoritos</button>
                </div>
            </form>

            <FilmeCard
                filmes={filmes}
                filmesFavoritos={filmesFavoritos}
                loading={loading}
                error={error}
                adicionaFavorito={adicionaFavorito}
                clickModalDetalheFilme={clickModalFilmeDetalhe}
            />

            {modalAberto && filmeDetalhes && (
                <ModalFilmeDetalhe
                    filmeDetalhe={filmeDetalhes}
                    onClose={() => setModalAberto(false)}
                />
            )}

            {visualizacao === 'busca' && (
                <div className='paginacao'>
                    {pagina > 1 && (
                        <button onClick={voltarPagina}><span>&lt;</span></button>
                    )}
                    {filmes.length > 0 && pagina < totalPaginas && (
                        <button onClick={avancarPagina}><span>&gt;</span></button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;