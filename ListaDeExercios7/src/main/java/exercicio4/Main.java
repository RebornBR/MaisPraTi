package exercicio4;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeioTransporte> meios = new ArrayList<>();
        meios.add(new Carro());
        meios.add(new Bicicleta());
        meios.add(new Trem());

        for (IMeioTransporte meio : meios) {
            System.out.println("\n--- " + meio.getClass().getSimpleName() + " ---");
            meio.acelerar();
            meio.acelerar();
            meio.frear();
            meio.frear();
            //descomente abaixo para ver a exception
           // meio.frear();
        }
    }
}