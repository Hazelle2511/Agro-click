import * as CP from './Components/Index';
import { BrowserRouter, Link, Route } from "react-router-dom";



export default function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Link to="/Accueil">ACCUEIL</Link>
  <Link to="/Contact">Contacts</Link>
  <Link to="/Login">Page de login</Link>

  
  <Route path="/Accueil" render={() => <>Contenu de la page d'acceuil</>} />
  <Route path="/Contact" render={() => <>Contenu de la page de contact</>} />
  <Route path="/Login" render={() => <>Contenu de la page login</>}/>
  
  
        </header>
      </div></BrowserRouter>
    );
  }