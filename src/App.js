import './App.css';
import addWarehouse from "./pages/addWarehouse";
import myWarehouse from "./pages/myWarehouse";
import stokeData from "./pages/stokeData";
import myNots from "./pages/myNots";
import main from "./pages/main";
import home from "./pages/home";
import { Switch,Route  } from "react-router-dom";
import AppBar from './components/AppBar/Appbar';
import Addwarehouse from './components/Add/AddWarehous';
import { useState } from 'react';


function App() {

  const [open, setOpen] = useState(false);

  console.log(open)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App"> 
      <AppBar handleOpen={handleOpen} handleClose={handleClose} />
      <Addwarehouse open ={open} setOpen={setOpen} />
        <Switch>
              <Route path="/" exact component={main} /> 
              <Route path="/home" component={home} /> 
              <Route path="/add-warehouse" component={addWarehouse} />
              <Route path="/my-warehouse" component={myWarehouse} />
              <Route path="/stoke-data" component={stokeData} />
              <Route path="/stoke-data" component={stokeData} />
              <Route path="/my-nots" component={myNots} />
        </Switch>
        
    </div>
  );
}

export default App;
