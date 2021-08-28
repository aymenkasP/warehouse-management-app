import './App.css';
import addWarehouse from "./pages/addWarehouse";
import MyWarehouse from "./pages/MyWarehouse";
import stokeData from "./pages/stokeData";
import myNots from "./pages/myNots";
import main from "./pages/main";
import home from "./pages/home";
import { Switch,Route  } from "react-router-dom";
import AppBar from './components/AppBar/Appbar';
import Addwarehouse from './components/Add/AddWarehous';
import { useState } from 'react';
import warehouse from './pages/warehouse';


function App() {

  return (
    <div className="App"> 
      <AppBar />
      <Addwarehouse  />
        <Switch>
              <Route path="/" exact component={main} /> 
              <Route path="/home" component={home} /> 
              <Route path="/add-warehouse" component={addWarehouse} />
              <Route path="/my-warehouse" exact  component={MyWarehouse} />
              <Route path="/my-warehouse/:id" component={warehouse} />
              <Route path="/stoke-data" component={stokeData} />
              <Route path="/my-nots" component={myNots} />
        </Switch>
        
    </div>
  );
}

export default App;
