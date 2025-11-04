import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

export default function LanguageChart({ data, type, theme }) {
  const [percentualMax, setPercentualMax] = useState(100);

  const filteredData = data.filter((item) => item.percentual <= percentualMax);

  const COLORS =
    theme === "dark"
      ? ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#A66DD4", "#FFA351"]
      : ["#E63946", "#F1FA8C", "#06D6A0", "#118AB2", "#9B5DE5", "#FFD166"];

  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="language" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentual">
                {filteredData.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={filteredData}
                dataKey="percentual"
                nameKey="language"
                cx="50%"
                cy="50%"
                outerRadius={130}
                label
              >
                {filteredData.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="language" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="percentual"
                stroke={COLORS[1]}
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case "area":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="language" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="percentual"
                stroke={COLORS[3]}
                fill={COLORS[2]}
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case "radar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={filteredData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="language" />
              <PolarRadiusAxis />
              <Radar
                name="Popularidade"
                dataKey="percentual"
                stroke={COLORS[4]}
                fill={COLORS[4]}
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      {/* Slider */}
      <div style={{ width: "60%", textAlign: "center" }}>
        <label htmlFor="percentualRange">
          Mostrar até: <strong>{percentualMax}%</strong>
        </label>
        <input
          id="percentualRange"
          type="range"
          min="0"
          max="100"
          value={percentualMax}
          onChange={(e) => setPercentualMax(Number(e.target.value))}
          style={{
            width: "100%",
            marginTop: "8px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Gráfico */}
      <div style={{ width: "100%", maxWidth: "900px" }}>{renderChart()}</div>

      {/* Cards de Empresas */}
      <div className="empresa-cards">
        {filteredData.map((lang, i) => (
          <div
            key={lang.language}
            className="empresa-card"
            style={{
              borderTop: `4px solid ${COLORS[i % COLORS.length]}`,
            }}
          >
            <h3 style={{ color: COLORS[i % COLORS.length] }}>{lang.language}</h3>
            {lang.empresas && lang.empresas.length > 0 ? (
              <ul>
                {lang.empresas.map((emp, j) => (
                  <li key={j}>{emp}</li>
                ))}
              </ul>
            ) : (
              <p className="sem-empresa">Nenhuma empresa listada</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
