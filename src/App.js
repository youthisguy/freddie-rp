import './App.css';
import { Hero, Header, BackStory, Tokenomics, HowToBuy, Socials } from "./sections/index";
import ContractAddress from './components/ContractAddress';
import './index.css'

function App() {
  return (
    <div className="App w-full min-h-screen bg-[#275CFE]"> 
      <header className="App-header max-w-[1440px] mx-auto">
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