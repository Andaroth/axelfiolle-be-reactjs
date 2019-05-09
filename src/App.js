import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/home'

import './app.css'

export default class App extends React.Component {
	render() {
		return (
			 <div className="App">
					 <Router>
							 <Switch>
									 <Route path="/" component={Home} />
							 </Switch>
					 </Router>
			 </div>
		);
	}
}
