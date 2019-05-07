import React from 'react';

import './main.css'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skip: false,
			cookieMsg: 'This website uses cookies. Click anywhere to continue.'
		}

		this.scrollDown = this.scrollDown.bind(this)
	}

	render() {
    return(
        <main>
					<section id="landing" onClick={this.scrollDown} className={"skip-"+this.state.skip}>
						<div class="flex fdc jcc">
							<h1 className={"skip-"+this.state.skip}>Anda</h1>
							<p className={"details skip-"+this.state.skip}>{this.state.cookieMsg}</p>
						</div>
					</section>

					<section id="details" className={"skip-"+this.state.skip}>
						<div className="before-moon"></div>
					</section>
        </main>
    );
	}

	scrollDown() {
		this.setState({skip:true,cookieMsg:''})
	}

}


