import './filmeCard.css';

function FilmeCard({ filmes, filmesFavoritos, error, loading, adicionaFavorito, clickModalDetalheFilme }) {
  return (
    <div className='lista-filmes'>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {filmes.length > 0 && filmes.map((filme) => {
        const ehFavorito = filmesFavoritos.some(f => f.imdbID === filme.imdbID);
        return (
          <div key={filme.imdbID} className='card'>
            <button
              onClick={() => adicionaFavorito(filme)}
              className="icone-favorito"
            >
              {ehFavorito ? '❤️' : '🤍'}
            </button>

            <button onClick={() => clickModalDetalheFilme(filme.imdbID)}>
              <img
                src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/150"}
                alt={filme.Title}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FilmeCard;