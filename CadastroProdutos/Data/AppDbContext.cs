using CadastroProdutos.Models;
using Microsoft.EntityFrameworkCore;

namespace CadastroProdutos.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; } = null!;

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Produto>()
                .Property(p => p.Preco)
                .HasPrecision(18, 2); 

            base.OnModelCreating(modelBuilder);
        }
    }
}
