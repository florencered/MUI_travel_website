
import './App.css'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import SearchAppBar from './components/SearchAppBar'; 
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter>
        <SearchAppBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tour" element={<Tour/>}/> {/*dynamic outing based on the card we select*/}
    </Routes>
    

    </BrowserRouter>
  );
}

export default App;
