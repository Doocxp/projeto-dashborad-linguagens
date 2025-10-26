import React, { useEffect, useState } from "react";
import LanguageChart from "./components/LanguageChart";

export default function App() {
  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/languages?min=${min}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
        setLoading(false);
      });
  }, [min]);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Linguagens de Programação Mais Usadas nas Empresas</h1>

      <p>
        Filtrar por percentual mínimo: <strong>{min}%</strong>
      </p>
      <input
        type="range"
        min="0"
        max="60"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <LanguageChart data={data} />
      )}
    </div>
  );
}
