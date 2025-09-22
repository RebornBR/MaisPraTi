package exercicio8;

import java.math.BigDecimal;
import java.util.Objects;

public class Pedido {
    private final BigDecimal valorTotal;
    private final String cep;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(BigDecimal valorTotal, String cep, CalculadoraFrete estrategiaFrete) {
        if (valorTotal == null || valorTotal.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor total não pode ser negativo.");
        }
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new CepInvalidoException("CEP inválido. Deve conter 8 dígitos.");
        }
        this.valorTotal = valorTotal;
        this.cep = cep;
        this.estrategiaFrete = Objects.requireNonNull(estrategiaFrete);
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public String getCep() {
        return cep;
    }

    public void setEstrategiaFrete(CalculadoraFrete novaEstrategia) {
        this.estrategiaFrete = novaEstrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }
}