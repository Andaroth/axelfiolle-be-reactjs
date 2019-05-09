import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skip: false
		};
		this.scrollDown = this.scrollDown.bind(this);

		const skipped = localStorage.getItem('skipped') || null;
		if (skipped && skipped === 'true') {
			this.state.skip = true;
			this.state.cookieMsg = '';
		}
	}

	render() {
    return(
			<main onClick={this.scrollDown} className={"skip-"+this.state.skip} onScroll={this.scrollDown}>
				<div className="noverflow">
					<div className="sea"></div>
				</div>
				<section id="landing" className={"skip-"+this.state.skip}>
					<div className="flex fdc jcc">
						<h1 className={"skip-"+this.state.skip}>Anda</h1>
						<p className={"hidden-"+this.state.skip}>This website uses cookies. Click anywhere to continue.</p>
					</div>
				</section>

				<section id="presentation" className={"flex fdc jcc skip-"+this.state.skip}>
					<div className="flex fdr jcc">
						<div className="hex-bg">
							<h2 className="moon">Web developper</h2>
							<p>The web is like an interconnected dream. </p>
							<p><strong>Trust</strong> me your <strong>dreams</strong> I'll <strong>make</strong> them <strong>real</strong></p>
						</div>
					</div>
					<div className="flex fdr jcc">
						<Link className="linkto" to="/about">lorem</Link>
					</div>
				</section>

				<section id="about" className={"hidden-"+!this.state.skip}>
					<h3>Lorem</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi eum facere illo ipsum nam odit perferendis porro quibusdam vero. Architecto atque corporis cum deserunt magni modi officia pariatur placeat?</p>
				</section>
			</main>
    );
	}

	scrollDown() {
		if (!this.state.skip) {
			this.setState({skip:true});
			localStorage.setItem('skipped','true');
		}
	}
}


