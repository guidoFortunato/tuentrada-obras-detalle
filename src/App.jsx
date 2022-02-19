import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch
  
  } from "react-router-dom";


import VariablesProvider from './context/VariablesProvider';
import TagManager from 'react-gtm-module';
import Error404 from './components/auth/Error404';
// import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import BotonFlotante from './components/main/BotonFlotante';
import Home from './components/home/Home';
import DetalleEvento from './components/EventDetail/DetalleEvento';


const TagManagerArgs = {
  gtmId: 'GTM-N2N9W5J'
}

TagManager.initialize(TagManagerArgs)

function App() {
  
  useEffect(() => {
    
    TagManager.initialize(TagManagerArgs)
    
  }, [])

  return (
    <>
    <VariablesProvider>

      <Router basename='/estadio/obras'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={DetalleEvento} />
          <Route path="*" component={Error404} />        
        </Switch>

      </Router>
    </VariablesProvider>
    </>

  
  
  );
}

export default App;
