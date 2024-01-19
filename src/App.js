import './App.css';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

function App() {
  const tonApiKey = '51ec8bc643a2b7e62ad2a6fab96563e017273f1b11de23c28c00d533eb9dfa12';
  return (
    <div className="App">
      <header className="App">
        <h1>My wallets</h1>
      </header>
      <div>
        <h3>My ton api key:</h3>
        <p>{tonApiKey}</p>
      </div>
      <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
        <Header />
      </TonConnectUIProvider>
    </div>
  );
}

export default App;

export const Header = () => {
  return (
    <header>
      <span>My App with React UI</span>
      <TonConnectButton />
    </header>
  );
};
