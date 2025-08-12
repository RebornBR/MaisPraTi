import './filmeCard.css'

function FilmeCard({ filmes, error, loading, clickModalDetalheFilme }) {
    return (
        <div className='lista-filmes'>
            
                {loading && <p>Carregando...</p>}
                {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

            {filmes.length > 0 && filmes.map((filme) => (
                <div key={filme.imdbID} className='card'>
                    <button class="icone-favorito">🤍</button>  
                    <button onClick={() => clickModalDetalheFilme(filme.imdbID)}>  
                    <img
                        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/150"}
                        alt={filme.Title}
                    />
                    </button>
                </div>
            ))}
        </div>
    )
}


export default FilmeCard