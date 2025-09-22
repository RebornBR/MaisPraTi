package exercicio8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Pedido pedido = new Pedido(new BigDecimal("250.00"), "51020300", new Sedex());
        System.out.println("Frete com Sedex: R$" + pedido.calcularFrete());

        pedido.setEstrategiaFrete(new Pac());
        System.out.println("Frete com Pac: R$" + pedido.calcularFrete());

        pedido.setEstrategiaFrete(new RetiradaNaLoja());
        System.out.println("Frete com Retirada na Loja: R$" + pedido.calcularFrete());

        // PROMOCIONAL
        CalculadoraFrete fretePromocional = p -> {
            if (p.getValorTotal().compareTo(new BigDecimal("200")) >= 0) {
                return BigDecimal.ZERO;
            }
            return new BigDecimal("15.00");
        };

        pedido.setEstrategiaFrete(fretePromocional);
        System.out.println("Frete com promoção: R$" + pedido.calcularFrete());

        // CEP INVALIDO, DESCOMENTE PARA VER
        //Pedido pedidoInvalido = new Pedido(new BigDecimal("100.00"), "ABC123", new Sedex());
    }
}