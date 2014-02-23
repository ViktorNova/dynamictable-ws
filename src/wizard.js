/** @jsx React.DOM */

var MdxEditor = React.createClass({
	render: function () {
		return (
			<textarea rows="10"></textarea>
			);
	}
});


var Wizard = React.createClass({
	run: function(){
		console.log("exec: "+this.refs.refMdxEditor.getDOMNode().value);
	},
	clear: function(){
		this.refs.refMdxEditor.getDOMNode().value = "";
	},
	render: function () {
		return (
			<div>
				<div className={"btn-group"} style={{marginBottom : 15}}>
					<ReqButton title={"Run"} className={"btn btn-primary"} onclickHandler={this.run}/>
					<ReqButton title={"Clear"} className={"btn"} onclickHandler={this.clear}/>
				</div>
			<MdxEditor ref="refMdxEditor"/>
			</div>
			);
	}
});

var query = "my mdx query";

React.renderComponent(
	<Wizard/>,
	document.getElementById('wizard')
);