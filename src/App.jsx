import React, { useEffect } from 'react';
import {
    // BrowserRouter as Router,
    Route,
    Switch
  
  } from "react-router-dom";


import VariablesProvider from './context/VariablesProvider';
import TagManager from 'react-gtm-module';
import Error404 from './components/auth/Error404';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import BotonFlotante from './components/main/BotonFlotante';
import Home from './components/home/Home';
import DetalleEvento from './components/eventDetail/DetalleEvento';


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

      <HashRouter basename={'/teatro/astralmiramar'}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:id' exact component={DetalleEvento} />
          <Route path='*' component={Error404} />        
        </Switch>

      </HashRouter>
    </VariablesProvider>
    </>

  
  
  );
}

export default App;
