package exercicio5;

import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<FormaPagamento> formas = List.of(
                new CartaoCredito("1234567890123456"),
                new Boleto("12345678901234567890123456789012345678901234567"),
                new Pix("chave@exemplo.com")
        );

        for (FormaPagamento forma : formas) {
            forma.processarPagamento(new BigDecimal("150.00"));
        }

        FormaPagamento cartaoInvalido = new CartaoCredito("1234");
        // descomente abaixo para ver a exception
        //cartaoInvalido.processarPagamento(new BigDecimal("200.00")); // Vai lançar exceção
    }
}