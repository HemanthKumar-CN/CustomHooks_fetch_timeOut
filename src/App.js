import logo from './logo.svg';
import './App.css';
import CustomHooks from './Component/CustomHooks';
import GithubSearch from './Component/GithubSearch';
import Counter from './Component/Counter';
import { AppContextProvider } from './Context/AppContext';

function App() {
  return (
    <div className="App">
      {/* <CustomHooks/> */}
      {/* <GithubSearch/> */}
    <AppContextProvider>
      <Counter/>
      </AppContextProvider>
    

    </div>
  );
}

export default App;
