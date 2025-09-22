package exercicio1e2;

public class Main {
    public static void main(String[] args) {
        // Produto válido
        Produto produto = new Produto("Celular", 1500.0, 5);
        System.out.println("Produto criado:");
        System.out.println("Nome: " + produto.getNome());
        System.out.println("Preço: R$" + produto.getPreco());
        System.out.println("Estoque: " + produto.getQuantidadeEmEstoque());

        // Alterações válidas
        produto.setNome("Smartphone");
        produto.setPreco(1200.0);
        produto.setQuantidadeEmEstoque(10);
        System.out.println("\nApós alterações:");
        System.out.println("Nome: " + produto.getNome());
        System.out.println("Preço: R$" + produto.getPreco());
        System.out.println("Estoque: " + produto.getQuantidadeEmEstoque());

        // Aplicar desconto válido
        produto.aplicarDescontoPorcentagem(20);
        System.out.println("\nApós aplicar 20% de desconto:");
        System.out.println("Preço com desconto: R$" + produto.getPreco());

        // Aplicar desconto inválido (>50%)
       // produto.aplicarDescontoPorcentagem(60);

        // Produto com nome nulo
       // Produto produtoInvalido1 = new Produto(null, 100.0, 1);

        // Produto com nome vazio
       // Produto produtoInvalido2 = new Produto("   ", 100.0, 1);

        // Produto com preço negativo
        //Produto produtoInvalido3 = new Produto("TV", -200.0, 1);

        // Produto com estoque negativo
        //Produto produtoInvalido4 = new Produto("Geladeira", 800.0, -3);
    }
}
