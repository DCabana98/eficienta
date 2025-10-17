import React from "react";
import toolsData from "../data/toolsData";

const Tools = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Herramientas</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {toolsData.map((tool) => (
          <div key={tool.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Ir a la herramienta
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
