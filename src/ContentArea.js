import React from 'react';
import {Card, CardActions, CardHeader,CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
 
 

var ContentArea = () => (
	<div>
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
		<Card>
		    <CardHeader
		      title="Without Avatar"
		      subtitle="Subtitle"
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
		<Card >
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
          showExpandableButton={true}
        />
        <CardText>
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
	</div>
);

export default ContentArea;