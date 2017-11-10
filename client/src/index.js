import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/Search';
import Saved from './components/Saved';
// import Results from './components/Results';

ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path='/' component={App} />            
            <Route path='/search' component={App} />
            <Route path='/saved' component={Saved} />
            {/* <Route path='/results' component={Results} /> */}
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
