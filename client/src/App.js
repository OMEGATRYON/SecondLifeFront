import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import TitleData from './components/apipull/apipulls';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <TitleData />
    </GlobalProvider>
  );
}

export default App;