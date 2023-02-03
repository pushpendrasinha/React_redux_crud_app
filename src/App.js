import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HeaderComponent';
import AddStudentContainer from './containers/AddStudentContainer';
import ViewContainer from './containers/ViewContainer';
import ListStudentContainer from './containers/ListStudentContainer';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path="/list" element={<ListStudentContainer/>} />
          <Route path="/add" element={<AddStudentContainer/>} />
          <Route path="/update/:id" element={<AddStudentContainer/>} />
          <Route path="/view/:id" element={<ViewContainer/>} />
        </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
