/** @jsx React.DOM */

var MdxEditor = React.createClass({
	render: function () {
		return (
			<textarea className="form-control space-top-bottom" rows="15"></textarea>
		);
	}
});

var Wizard = React.createClass({
	run: function(){
		createWebSocket(this.refs.refMdxEditor.getDOMNode().value);
	},
	clear: function(){
		this.refs.refMdxEditor.getDOMNode().value = "";
	},
	render: function () {
		return (
			<div>
				<MdxEditor ref="refMdxEditor"/>
				<div className={"btn-group"}>
					<ReqButton title={"Run"} className={"btn btn-primary"} onclickHandler={this.run}/>
					<ReqButton title={"Clear"} className={"btn"} onclickHandler={this.clear}/>
				</div>
					<div className="pull-right">
						<ConnectionLabel connectState={"label-default"} info={"Not connected"}/>
					</div>
			</div>
		);
	}
});

var ConnectionLabel = React.createClass({
	render: function () {
		var label = "label "+this.props.connectState;
		return (
			<span className={label}>{this.props.info}</span>
		);
	}
});

