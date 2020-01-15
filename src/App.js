import React, { useState,useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  return (
  <div id="app">
    <aside>
      <strong> Cadastrar </strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuario do GitHub</label>
          <input 
            name="github_username" 
            id="github_username" required
            value={github_username}
            onChange={e => setGithub_username(e.target.value)}
            />
        </div>

        <div className="input-block">
          <label htmlFor="techs"> Tecnologias</label>
          <input 
            name="techs" 
            id="techs" required
            value={techs}
            onChange={e => setTechs(e.target.value1)}/>          
        </div>       

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude"> Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
          </div>
          <div className="input-block">
            <label htmlFor="longitude"> Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" required 
            value={longitude}
            onChange={e => setLatitude(e.target.value)}
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
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4" alt="Foto do Usuario"/> 
            <div className="user-info">
              <strong>Adam Axel Augustinsky</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>2º ano do tecnico em informatica no ITB Brasilio Flores</p>
          <a href="https://github.com/AdamAugustinsky">Acessar perfil do GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4" alt="Foto do Usuario"/> 
            <div className="user-info">
              <strong>Adam Axel Augustinsky</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>2º ano do tecnico em informatica no ITB Brasilio Flores</p>
          <a href="https://github.com/AdamAugustinsky">Acessar perfil do GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4" alt="Foto do Usuario"/> 
            <div className="user-info">
              <strong>Adam Axel Augustinsky</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>2º ano do tecnico em informatica no ITB Brasilio Flores</p>
          <a href="https://github.com/AdamAugustinsky">Acessar perfil do GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4" alt="Foto do Usuario"/> 
            <div className="user-info">
              <strong>Adam Axel Augustinsky</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>2º ano do tecnico em informatica no ITB Brasilio Flores</p>
          <a href="https://github.com/AdamAugustinsky">Acessar perfil do GitHub</a>
        </li>
      </ul>
    </main>
  </div>
  );
}

export default App;