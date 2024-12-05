import React, { useState, useEffect } from "react";
import { createProduto, updateProduto, getProdutoById } from "../services/produtoService";
import "./ProdutoForm.css"; // Importe o arquivo CSS para estilizar

const ProdutoForm = ({ produtoId, onProdutoSaved, onCancel }) => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (produtoId) {
            const fetchProduto = async () => {
                const produto = await getProdutoById(produtoId);
                setNome(produto.nome);
                setPreco(produto.preco.toFixed(2));
                setDescricao(produto.descricao); // Definindo a descrição
            };
            fetchProduto();
        } else {
            setNome("");
            setPreco("");
            setDescricao("");
        }
    }, [produtoId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const produto = { nome, preco: parseFloat(preco), descricao , produtoId };
    
        try {
            console.log("Produto a ser atualizado:", produto , produtoId);  // Verifica se o produto está correto
            if (produtoId) {
                await updateProduto(produtoId, produto);
            } else {
                await createProduto(produto);
            }
    
            onProdutoSaved(); // Notifica o componente pai sobre a conclusão
        } catch (error) {
            console.error("Erro ao salvar produto:", error.response ? error.response.data : error.message);
        }
    };
    

    return (
        <div className="produto-form-container">
            <h2>{produtoId ? "Editar Produto" : "Adicionar Produto"}</h2>
            <form onSubmit={handleSubmit} className="produto-form">
                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Preço:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={onCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default ProdutoForm;
