package exercicio4;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAXIMA = 40;

    @Override
    public void acelerar() {
        if (velocidade + 5 > VELOCIDADE_MAXIMA) {
            throw new RuntimeException("Bicicleta não pode ultrapassar " + VELOCIDADE_MAXIMA + " km/h.");
        }
        velocidade += 5;
        System.out.println("Bicicleta acelerou para " + velocidade + " km/h.");
    }

    @Override
    public void frear() {
        if (velocidade - 5 < 0) {
            throw new RuntimeException("Bicicleta já está parada.");
        }
        velocidade -= 5;
        System.out.println("Bicicleta reduziu para " + velocidade + " km/h.");
    }
}