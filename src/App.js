import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
  <div id="app">
    <aside>
      <strong> Cadastrar </strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuario do GitHub</label>
          <input name="github_username" id="github_username" required/>
        </div>

        <div className="input-block">
          <label htmlFor="techs"> Tecnologias</label>
          <input name="techs" id="techs" required/>          
        </div>       

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude"> Latitude</label>
            <input name="latitude" id="latitude" required/>  
          </div>
          <div className="input-block">
            <label htmlFor="longitude"> Longitude</label>
            <input name="longitude" id="longitude" required/>  
          </div>
        </div> 
        <button type="submit">Salvar</button>
      </form>
    </aside>

    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4"/> 
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
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4"/> 
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
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4"/> 
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
            <img src="https://avatars0.githubusercontent.com/u/40921659?s=460&v=4"/> 
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