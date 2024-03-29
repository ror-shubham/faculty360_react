import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
 

var MainComponent = () => (
	 <div> 
	 	<Paper>
	 		<h1>Paper</h1>
	 	</Paper>
	 	<Paper>
			<Card>
				<CardHeader
					title="Without Avatar"
					subtitle="Subtitle"
					actAsExpander={true}
					showExpandableButton={true}
				/>
				<CardActions>
					<FlatButton label="Action1" />
					<FlatButton label="Action2" />
				</CardActions>
				<CardText expandable={true}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
			</Card>
		</Paper>
	  </div>
);

export default MainComponent;