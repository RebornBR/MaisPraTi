package exercicio5;

public class PagamentoInvalidoException extends RuntimeException {
    public PagamentoInvalidoException(String mensagem) {
        super(mensagem);
    }
}