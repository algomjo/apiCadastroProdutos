using CadastroProdutos.Data;
using CadastroProdutos.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CadastroProdutos.Controllers
{
    [Route("api/[controller]")]  // Define o prefixo da URL base para as rotas
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/produtos
        // Retorna a lista de todos os produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return await _context.Produtos.ToListAsync();
        }

        // GET: api/produtos/{id}
        // Retorna um produto específico pelo ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProdutoById(long id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound(); // Retorna 404 caso o produto não seja encontrado
            }

            return produto;
        }

        // POST: api/produtos
        // Cria um novo produto
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProdutoById), new { id = produto.Id }, produto);
            // Retorna 201 com o link para o novo recurso criado
        }

        // PUT: api/produtos/{id}
        // Atualiza um produto existente
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(long id, Produto produto)
        {
            if (id != produto.Id)
            {
                produto.Id = id;
                //return BadRequest(); // Retorna 400 se os IDs não coincidirem
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound(); // Retorna 404 se o produto não existir
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Retorna 204 quando a atualização for bem-sucedida
        }

        
        // DELETE: api/produtos/{id}
        // Deleta um produto específico
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduto(long id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound(); // Retorna 404 se o produto não for encontrado
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent(); // Retorna 204 após o produto ser deletado
        }

        // Método auxiliar para verificar se o produto existe
        private bool ProdutoExists(long id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
