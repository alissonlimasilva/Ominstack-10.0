import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import api from "./services/api";

const listDevs = [
  {
    name: "Alisson Lima",
    github_username: "alissonlimasilva",
    avatar_url: "https://avatars0.githubusercontent.com/u/23037925?s=460&v=4",
    bio: "Estou com fome",
    _id: 544545454,
    latitude: -3.7267539999999997,
    longitude: -38.5165132,
    techs: ["React Native", "CSS", "HTML", "NodeJS"]
  },
  {
    name: "Playstore",
    github_username: "Crea-CE",
    avatar_url: "https://avatars0.githubusercontent.com/u/49155956?s=460&v=4",
    bio: "CREA - CE",
    _id: 544545452,
    latitude: -3.7267539999999997,
    longitude: -38.5165132,
    techs: ["React Native", "CSS", "HTML", "NodeJS"]
  },
  {
    name: "Rhuana Pires",
    github_username: "rhuanapires",
    avatar_url: "https://avatars3.githubusercontent.com/u/42420374?s=460&v=4",
    bio: "Desenvolvedora",
    _id: 5445454522,
    latitude: -3.7267539999999997,
    longitude: -38.5165132,
    techs: ["React Native", "CSS", "HTML", "Vue", "ReactJS"]
  }
];

function App() {
  const [devs, setDevs] = useState([]);

  // carrega da API
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    alert(JSON.stringify(data));
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
