/** @jsx React.DOM */

var ReqButton = React.createClass({
	render: function(){
		return (
			<button className={this.props.className} type="button" onClick={this.props.onclickHandler} style={{"margin-right":"5"}}>{this.props.title}</button>
			);
	}
});

var RequestButtons = React.createClass({
	reset: function(){
		table.setState({color : "white"});
	},
	changeData: function(dataNew){
		table.setState({data : dataNew, color : "red"});
	},
	render: function(){
		var self = this;
		return (
			<div>
				<ReqButton title={"Reinit color"} className={"btn btn-primary"} onclickHandler={this.reset}/>
				<ReqButton title={"Add Feb"} className={"btn"} onclickHandler={this.changeData.bind(self, data2)}/>
				<ReqButton title={"Update cells"} className={"btn"} onclickHandler={this.changeData.bind(self, data3)}/>
				<ReqButton title={"Rem Jap"} className={"btn"} onclickHandler={this.changeData.bind(self, data4)}/>
				<ReqButton title={"Rem Feb/Add Jap"} className={"btn"} onclickHandler={this.changeData.bind(self, data5)}/>
			</div>
			);
	}
});

React.renderComponent(
  <RequestButtons/>,
  document.getElementById('requestButtons')
);