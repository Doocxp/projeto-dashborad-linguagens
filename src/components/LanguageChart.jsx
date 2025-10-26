import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const LanguageChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/languages")
 // ✅ corrigido o endpoint
      .then((response) => response.json())
      .then((dados) => setData(dados))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  if (!data) return <p>Carregando gráfico...</p>;

  const chartData = {
    labels: data.map((item) => item.nome), // ✅ ajustado
    datasets: [
      {
        label: "Popularidade (%)",
        data: data.map((item) => item.popularidade), // ✅ ajustado
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Linguagens de Programação Mais Usadas nas Empresas</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default LanguageChart;
