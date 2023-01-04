
import './App.css';
import Navbar from './Components/Navbar';

import Router from './Routes/Router';

function App() {

  return (
    <div className="App">
     {/* {token?
     (<UserDetails />):(<Box>
      <Navbar/>
     <Router/>
     </Box>)
     } */}
     <Navbar/>
     <Router/>
    </div>
  );
}

export default App;
