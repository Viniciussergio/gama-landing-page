import React, {useState} from 'react';
import"./styles.css";

import groot1 from "./assets/baby-groot-1.jpeg"
import groot2 from "./assets/baby-groot-2.jpeg"
import juliusCesar from "./assets/julius-cesar.jpeg";
import bodyBuilder from "./assets/body-building.jpeg";
import estatuaPascoa from "./assets/estatua-pascora.jpeg";
import homerSimpson from "./assets/homer.jpeg";

function App() {
  const [ email, setEmail ] = useState("");
  const [ nome, setNome ] = useState("");

  const handleSendEmail = () => {
    const user_obj = { nome, email };
    if (localStorage.getItem("users_json") === null) {
      localStorage.setItem("users_json", JSON.stringify([user_obj]));
      return;
    }
    localStorage.setItem(
      "users_json", 
      JSON.stringify([...JSON.parse(localStorage.getItem("users_json")), user_obj])
    );
  }

  return (
    <>
      <header role="banner">
        
        <nav role="navigation">
          <ul role="menu">
            <li>
              <a href="/" style={{ backgroundColor: "#e5e5e5" }}>Home</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#e5e5e5" }}>Sobre</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#e5e5e5" }}>Contato</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#e5e5e5" }}>Suporte</a>
            </li>
            <li>
              <a href="/" style={{ backgroundColor: "#e5e5e5" }}>Comprar</a>
            </li>
          </ul>
        </nav>
      </header>

      <main role="main">
        <section className="images-section">
          <div className="image-container">
            <img src={groot1} width="250px" height="auto"></img>
            <h2>Baby Groot</h2>
          </div>
          <div className="image-container">
            <img src={juliusCesar} width="250px" height="auto"></img>
            <h2>Julius Cesar</h2>
          </div>
          <div className="image-container">
            <img src={bodyBuilder} width="250px" height="auto"></img>
            <h2>Body Builder</h2>
          </div>
          <div className="image-container">
            <img src={estatuaPascoa} width="250px" height="auto"></img>
            <h2>Estátua Páscoa</h2>
          </div>
          <div className="image-container">
            <img src={homerSimpson} width="250px" height="auto"></img>
            <h2>Homer Simpson</h2>
          </div>
          <div className="image-container">
            <img src={groot2} width="250px" height="auto"></img>
            <h2>Baby Groot</h2>
          </div>
        </section>
        <section className="right-section">
          <p>Conheça mais do nosso trabalho</p>
          <form action="#" method="POST">
            <input
              placeholder="Seu nome completo*"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <input 
              placeholder="Seu e-mail*"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSendEmail}>Receber</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
