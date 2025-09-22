package exercicio1e2;

public class DescontoInvalidoException extends  IllegalArgumentException{
    public DescontoInvalidoException(String mensagem){
        super(mensagem);
    }
}
