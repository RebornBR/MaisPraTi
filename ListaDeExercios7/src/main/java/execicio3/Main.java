package execicio3;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Funcionario gerente = new Gerente("Rodrigo", new BigDecimal("10000"));
        Funcionario desenvolvedor = new Desenvolvedor("Jesus", new BigDecimal("6000"));

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(gerente);
        funcionarios.add(desenvolvedor);

        for(Funcionario funcionario: funcionarios){
            System.out.println("Funcionario: " + funcionario.getNome());
            System.out.println("Salario: " + funcionario.getSalario());
            System.out.println("Bonus: " + funcionario.calcularBonus());
            System.out.println("==============================");
        }

    }
}
