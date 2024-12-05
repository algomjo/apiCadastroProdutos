import React, { useEffect, useState } from "react";
import { getProdutos, deleteProduto } from "../services/produtoService";
import "./ProdutoList.css"; // Importe o arquivo CSS para estilizar

const ProdutoList = ({ onEdit, onProdutoDeleted }) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Carrega os produtos quando o componente é montado
        const fetchProdutos = async () => {
            const produtos = await getProdutos();
            setProdutos(produtos);
        };
        fetchProdutos();
    }, [onProdutoDeleted]); // Atualiza a lista sempre que um produto for deletado

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir este produto?")) {
            await deleteProduto(id);
            onProdutoDeleted(); // Notifica o componente pai sobre a exclusão
        }
    };

    return (
        <div className="produto-list-container">
            <h2>Lista de Produtos</h2>
            <table className="produto-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.length > 0 ? (
                        produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R$ {produto.preco.toFixed(2)}</td>
                                <td>{produto.descricao}</td>
                                <td>
                                    <button onClick={() => onEdit(produto.id)}>Editar</button>
                                    <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum produto encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProdutoList;
