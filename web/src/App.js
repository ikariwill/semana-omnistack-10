/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      githubUsername,
      techs,
      latitude,
      longitude,
    });

    console.log(response);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input
              name="github_username"
              id="github_username"
              type="text"
              required
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              type="text"
              required
              value={techs}
              onChange={(e) => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="text"
                required
                value={latitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="text"
                required
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/13336579?s=460&v=4" alt="Willian Silva" />
              <div className="user-info">
                <strong>Willian Silva</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>@wiki4fit CTO</p>
            <a href="https://github.com/ikariwill" rel="noopener noreferrer" target="_blank">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2078347?s=460&v=4" alt="Camila Achutti" />
              <div className="user-info">
                <strong>Camila Achutti</strong>
                <span>Javascript</span>
              </div>
            </header>
            <p>MasterTech</p>
            <a href="https://avatars1.githubusercontent.com/u/2078347?s=460&v=4" rel="noopener noreferrer" target="_blank">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/36673459?s=460&v=4" alt="Rafael Giro" />
              <div className="user-info">
                <strong>Rafael Giro</strong>
                <span>ReactJs, Node.js</span>
              </div>
            </header>
            <p>Fullstack Node/React developer with a love for IoT devices.</p>
            <a href="https://github.com/RafaelGiro" rel="noopener noreferrer" target="_blank">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
