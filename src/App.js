import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Class';
import Hello from './components/hello';
import Message from "./components/message";

function App() {
  return (
    <div className="App">
      <p>Welcome To react</p>
      <Greet name="bruce" heroName="Batman"> <p>This is children Props</p></Greet> 
      <Greet name="mark" heroName="google owner">
        <button>children Button</button>
      </Greet> 
      <Greet name="diana" heroName="supergirl"/> 
      <Welcome name="bruce" heroName="Batman" />
      <Welcome name="mark" heroName="google owner" />
      <Welcome name="diana" heroName="supergirl" />
      <Hello />
      <Message />
    </div>
  );
}

export default App;
