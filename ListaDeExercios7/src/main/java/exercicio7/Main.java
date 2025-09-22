package exercicio7;

public class Main {
    public static void main(String[] args) {
        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();
        IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

        Produto produto1 = new Produto(1, "Caneta", 200.00);
        Produto produto2 = new Produto(2, "Chiclete", 2.00);

        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);

        System.out.println("Produtos antes da remoção:");
        for (Produto produto : produtoRepository.getAll()) {
            System.out.println(produto.getNome());
        }

        // Remoção válida
        produtoRepository.remover(1);

        System.out.println("Produtos após remover ID 1:");
        for (Produto produto : produtoRepository.getAll()) {
            System.out.println(produto.getNome());
        }


        produtoRepository.remover(3);
    }
}
