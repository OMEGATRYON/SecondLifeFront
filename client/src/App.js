import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <h1></h1>
    </GlobalProvider>
  );
}

export default App;