import './modalFilme.css';

function ModalFilmeDetalhe({ filmeDetalhe, onClose }) {
  if (!filmeDetalhe) return null;
  return (
      <div className="modal-conteudo">
        <span className="close" onClick={onClose}>X</span>
        <h2>{filmeDetalhe.Title}</h2>
        <p><strong>Ano:</strong> {filmeDetalhe.Year}</p>
        <p><strong>Diretor:</strong> {filmeDetalhe.Director}</p>
        <p><strong>Sinopse:</strong> {filmeDetalhe.Plot}</p>
        <img src={filmeDetalhe.Poster} alt={`${filmeDetalhe.Title} poster`} />
      </div>
  );
}


export default ModalFilmeDetalhe