package exercicio4;

public class Trem implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAXIMA = 300;

    @Override
    public void acelerar() {
        if (velocidade + 50 > VELOCIDADE_MAXIMA) {
            throw new RuntimeException("Trem não pode ultrapassar " + VELOCIDADE_MAXIMA + " km/h.");
        }
        velocidade += 50;
        System.out.println("Trem acelerou para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade - 50 < 0) {
            throw new RuntimeException("Trem já está parado.");
        }
        velocidade -= 50;
        System.out.println("Trem reduziu para " + velocidade + " km/h.");
    }
}