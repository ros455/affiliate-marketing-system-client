import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage';
import './style/style-null.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/registration' element={<RegistrationForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
