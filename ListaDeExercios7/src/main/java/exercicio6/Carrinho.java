package exercicio6;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(ItemCarrinho novoItem) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(novoItem);
        return new Carrinho(novaLista);
    }

    public Carrinho removerItemPorProduto(String nomeProduto) {
        List<ItemCarrinho> novaLista = itens.stream()
                .filter(item -> !item.getProduto().getNome().equalsIgnoreCase(nomeProduto))
                .collect(Collectors.toList());
        return new Carrinho(novaLista);
    }

    public Carrinho aplicarCupom(BigDecimal porcentagem) {
        List<ItemCarrinho> novaLista = itens.stream()
                .map(item -> {
                    Dinheiro precoComDesconto = item.getProduto().getPreco().aplicarDesconto(porcentagem);
                    Produto produtoComDesconto = new Produto(item.getProduto().getNome(), precoComDesconto);
                    return new ItemCarrinho(produtoComDesconto, item.getQuantidade());
                })
                .collect(Collectors.toList());
        return new Carrinho(novaLista);
    }

    public Dinheiro calcularTotal() {
        BigDecimal total = itens.stream()
                .map(item -> item.getSubtotal().getValor())
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        Moeda moeda = itens.isEmpty() ? Moeda.BRL : itens.get(0).getProduto().getPreco().getMoeda();
        return new Dinheiro(total, moeda);
    }
}