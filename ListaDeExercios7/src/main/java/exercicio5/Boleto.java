package exercicio5;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigoBoleto;

    public Boleto(String codigoBoleto) {
        this.codigoBoleto = codigoBoleto;
    }

    @Override
    public void validarPagamento() {
        if (codigoBoleto == null) {
            throw new PagamentoInvalidoException("Código de boleto inválido. Valor nulo.");
        }
        if (!codigoBoleto.matches("\\d{47}") && !codigoBoleto.matches("\\d{48}")) {
            throw new PagamentoInvalidoException("Código de boleto inválido. Deve conter 47 ou 48 dígitos numéricos.");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de R$" + valor + " via Boleto.");
    }
}