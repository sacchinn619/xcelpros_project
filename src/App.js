import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import WebPage from './component/WebPaage'


function App() {
  return (
    <BrowserRouter>
    <div class="container-fluid">
      <Switch>
        <Route path="/" component={WebPage}/>
      </Switch>
    </div>
    </BrowserRouter>
     
    
  )
}

export default App;
