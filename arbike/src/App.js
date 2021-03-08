//import logo from './logo.svg';
import { findDOMNode } from 'react-dom';
import './App.css';
import Header from './Components/header/Header';

function Header1(props){
  return(
    <header>
      <h1> {props.name} Header</h1>
    </header>
  );
}
function Main(){

  return(
    <section>
      <Header />
    </section>
  );
}

function App() {
  return (
    <div className="App">
      
      <Header1 name = "some text"/>
      <Main/>
      <h2>ok</h2>
    </div>
  );
}

export default App;
