import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main';
import Users from './Components/Users';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import Navbar from './Components/Navbar';
import Create from './Components/Create';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
           <Routes>
              <Route path='/' element={<Main/>}>
                 <Route index element={<Users/>}/>
                 <Route path='/Delete/:id' element={<Delete/>}/>
                 <Route path='/Edit/:id' element={<Edit/>}/>
                 <Route path='/Create' element={<Create/>}/>
              </Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
