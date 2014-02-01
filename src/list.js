/** @jsx React.DOM */

var Item = React.createClass({
	render: function() {
		return (
			<li>{this.props.country}</li>
			);
	}
});

var List = React.createClass({
	getInitialState: function() {
		return {
			countries: this.props.countries
		};
	},
	render: function() {
		return (
			<ul>
			{
				this.state.countries.map(function(item) {
					return(<Item country={item}/>);
				})
			}
			</ul>
			);
	}
});

var countriesInit = ["France", "USA", "Italy"];
var list = React.renderComponent(
  <List countries={countriesInit}/>,
  document.getElementById('table')
);

var countries2 = ["France", "USA", "Italy", "Mexico"];
var countries3 = ["France", "Russia"];

var Switch = React.createClass({
	changeData: function(dataNew){
		list.setState({countries : dataNew});
	},
	render: function() {
		return (
			<div>
			<div onClick={this.changeData.bind(this,countries2)} >list 1</div>
			<div onClick={this.changeData.bind(this,countries3)} >list 2</div>
			</div>
			);
	}
});

React.renderComponent(
  <Switch/>,
  document.getElementById('switch')
);



