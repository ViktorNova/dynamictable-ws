/** @jsx React.DOM */

var Left = React.createClass({
	render: function () {
		return (
			<div className="col-md-4">
				<ul className="nav nav-tabs">
					<li className="active"><a href="#wiz" data-toggle="tab">Wizard</a></li>
					<li><a href="#bookmarks" data-toggle="tab">Bookmarks</a></li>
				</ul>
				<div className="tab-content">
					<div className="tab-pane active" id="wiz">
	                	<Wizard/>
	               	</div>
	                <div className="tab-pane" id="bookmarks">TODO</div>
	            </div>
            </div>
        );
	}
});

var Right = React.createClass({
	render: function () {
		return (
			<div className="col-md-8">
	            <Table data={data13}/>
	        </div>
        );
	}
});

var Main = React.createClass({
	render: function () {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<div className="row">
					<Left/>
					<Right/>
	            </div>
            </div>
        );
	}
});

React.renderComponent(
	<Main title={".title."}/>,
	document.getElementById('main')
);