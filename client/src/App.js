import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import TitleData from './components/apipull/apipulls';

function App() {
  return (
    <GlobalProvider>
      <TitleData />
    </GlobalProvider>
  );
}

export default App;