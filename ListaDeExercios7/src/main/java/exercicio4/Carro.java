package exercicio4;

public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAXIMA = 180;

    @Override
    public void acelerar() {
        if (velocidade + 20 > VELOCIDADE_MAXIMA) {
            throw new RuntimeException("Carro não pode ultrapassar " + VELOCIDADE_MAXIMA + " km/h.");
        }
        velocidade += 20;
        System.out.println("Carro acelerou para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade - 20 < 0) {
            throw new RuntimeException("Carro já está parado.");
        }
        velocidade -= 20;
        System.out.println("Carro reduziu para " + velocidade + " km/h.");
    }
}
