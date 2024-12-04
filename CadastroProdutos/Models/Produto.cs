namespace CadastroProdutos.Models
{
    public class Produto
    {
        public long Id { get; set; }
        public string Nome { get; set; } = String.Empty;
        public decimal Preco { get; set; }
        public string Descricao { get; set; } = String.Empty;
    }
}
