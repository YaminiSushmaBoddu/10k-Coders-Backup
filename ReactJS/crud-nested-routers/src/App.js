import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Users from './Components/Users';
import Delete from './Components/Delete';
function App() {
  return (
    <div className="App">

      {/* <Users/> */}

      
           <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route path='/Delete' element={<Delete/>}/>
                 </Route>
               </Routes>
           </BrowserRouter>
          </div>
  );
}

export default App;
