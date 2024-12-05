import './App.css';
import { Hero, Header, BackStory, Tokenomics, HowToBuy, Socials } from "./sections/index";
import ContractAddress from './components/ContractAddress';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Hero />
        <ContractAddress />
        <BackStory />
        <HowToBuy />
        <Tokenomics />
        <Socials />
      </header>
    </div>
  );
}

export default App;
