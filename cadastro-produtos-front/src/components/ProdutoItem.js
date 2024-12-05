import React from "react";

const ProdutoItem = ({ produto, onDelete, onEdit }) => {
    return (
        <tr>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco.toFixed(2)}</td> {/* Ajustando para exibir o preço com 2 casas decimais */}
            <td>{produto.descricao}</td> {/* Exibindo a descrição */}
            <td>
                <button onClick={() => onEdit(produto.id)}>Editar</button>
                <button onClick={() => onDelete(produto.id)}>Excluir</button>
            </td>
        </tr>
    );
};

export default ProdutoItem;
