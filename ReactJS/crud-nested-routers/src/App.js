import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Users from './Components/Users';
import Delete from './Components/Delete';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
function App() {
  return (
    <div className="App">

      {/* <Users/> */}

      
           <BrowserRouter>
           <Navbar/>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Users/>}/>
                      <Route path='/Delete/:id' element={<Delete/>}/>
                      <Route path='/Edit/:id' element={<Edit/>}/>
                      <Route path='/create' element={<Create/>}/>
                 </Route>
               </Routes>
           </BrowserRouter>
          </div>
  );
}

export default App;
