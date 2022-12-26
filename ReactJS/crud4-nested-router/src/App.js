import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Users from './Components/Users';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
            <Routes>
                <Route  path='/' element={<Layout/>}>
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
