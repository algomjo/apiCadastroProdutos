import React, { useState } from "react";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoList from "./components/ProdutoList";

function App() {
    const [produtoId, setProdutoId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [refresh, setRefresh] = useState(false); // Usado para forçar a atualização da lista

    const handleEdit = (id) => {
        setProdutoId(id);
        setIsEditing(true);
    };

    const handleProdutoSaved = () => {
        setIsEditing(false);
        setProdutoId(null);
        setRefresh(!refresh); // Força a atualização da lista
    };

    const handleCancel = () => {
        setIsEditing(false);
        setProdutoId(null);
    };

    const handleProdutoDeleted = () => {
        setRefresh(!refresh); // Força a atualização da lista
    };

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          Cadastro de Produtos
      </h1>
      {isEditing ? (
          <ProdutoForm
              produtoId={produtoId}
              onProdutoSaved={handleProdutoSaved}
              onCancel={handleCancel}
          />
      ) : (
          <div style={{ textAlign: "center" }}>
              <button
                  onClick={() => setIsEditing(true)}
                  style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "10px 20px",
                      fontSize: "16px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginBottom: "20px",
                  }}
              >
                  Adicionar Produto
              </button>
              <ProdutoList onEdit={handleEdit} onProdutoDeleted={handleProdutoDeleted} />
          </div>
      )}
  </div>
    );
}

export default App;
