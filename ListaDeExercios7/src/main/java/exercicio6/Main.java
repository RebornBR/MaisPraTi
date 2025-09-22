package exercicio6;

import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto caneta = new Produto("Caneta", new Dinheiro(new BigDecimal("5.00"), Moeda.BRL));
        Produto caderno = new Produto("Caderno", new Dinheiro(new BigDecimal("20.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(List.of());
        carrinho = carrinho.adicionarItem(new ItemCarrinho(caneta, 2));
        carrinho = carrinho.adicionarItem(new ItemCarrinho(caderno, 1));

        System.out.println("Total sem desconto: " + carrinho.calcularTotal());

        Carrinho comDesconto = carrinho.aplicarCupom(new BigDecimal("30"));
        System.out.println("Total com 30% de desconto: " + comDesconto.calcularTotal());

        Carrinho semCaneta = comDesconto.removerItemPorProduto("Caneta");
        System.out.println("Total após remover Caneta: " + semCaneta.calcularTotal());
    }
}