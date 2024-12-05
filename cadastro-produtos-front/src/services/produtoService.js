import axios from "axios";

const API_URL = "http://localhost:5042/api/Produtos"; // Altere para o URL da sua API

export const getProdutos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getProdutoById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createProduto = async (produto) => {
    const response = await axios.post(`${API_URL}`, produto);
    return response.data;
};

export const updateProduto = async (id, produto) => {
    try {
        // Inclui o ID no corpo da requisição
        // Envia a requisição PUT para atualizar o produto
        const response = await axios.put(`${API_URL}/${id}`, produto);
        console.log("Produto atualizado:", response.data);  // Verifica a resposta da API
        return response.data; // Retorna os dados do produto atualizado
    } catch (error) {
        // Em caso de erro, imprime o erro e lança uma exceção
        console.error("Erro ao atualizar produto:", error.response ? error.response.data : error.message);
        throw error; // Lança o erro para ser tratado pelo frontend
    }
};

export const deleteProduto = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
