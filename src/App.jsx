import React, { useEffect, useState } from "react";
import LanguageChart from "./components/LanguageChart";
import "./Dashboard.css";

export default function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("bar");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [percentAdjust, setPercentAdjust] = useState(100);
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.setAttribute("data-theme", next);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3001/api/languages");
        const json = await res.json();

        const mapped = json.map((item, i) => ({
          id: i,
          language: item.nome ?? "Desconhecido",
          percentual: Number(item.popularidade ?? 0),
          empresas: item.empresas ?? [],
        }));

        setData(mapped);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar dados do servidor.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const adjustedData = data.map((item) => ({
    ...item,
    percentual: Math.min((item.percentual * percentAdjust) / 100, 100),
  }));

  const filteredData = adjustedData.filter(
    (lang) =>
      lang.language.toLowerCase().includes(search.toLowerCase()) ||
      lang.empresas.some((emp) =>
        emp.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="dashboard">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      <h1>Dashboard de Linguagens</h1>
      <h2>Linguagens de Programação Mais Usadas</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Buscar linguagem ou empresa..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="bar">📊 Barras</option>
          <option value="pie">🥧 Pizza</option>
          <option value="line">📈 Linha</option>
          <option value="area">🌄 Área</option>
          <option value="radar">🕸️ Radar</option>
        </select>
      </div>

      <div className="slider-container">
        <p>
          Ajustar percentuais: <strong>{percentAdjust}%</strong>
        </p>
        <input
          type="range"
          min="1"
          max="100"
          value={percentAdjust}
          onChange={(e) => setPercentAdjust(Number(e.target.value))}
        />
      </div>

      <div className="chart-container">
        {loading ? (
          <p>Carregando dados...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <LanguageChart data={filteredData} type={chartType} theme={theme} />
        )}
      </div>
    </div>
  );
}
