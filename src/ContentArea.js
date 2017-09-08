import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


 
const ContentArea = React.createClass({
	getInitialState: function(){
		let details= [{
					title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Test 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
	            {
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Test 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
	            {
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Test 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
            	{
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Test 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
            	{
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Test 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
            ];
        return {
            details: details ,
            currentPage: 0,
      		allItems: details.length,
      		perPage: 3
        }
    },

    prevPage: function() {
	    let nextPage = this.state.currentPage - 1;

	    if (nextPage < 0) return;

	    this.setState(Object.assign(this.state, { currentPage: nextPage }));
  	},

  	nextPage: function() {
	    let nextPage = this.state.currentPage + 1;
	    if (nextPage >= this.state.allItems / this.state.perPage) return;

	    this.setState(Object.assign(this.state, { currentPage: nextPage }));
  	},

	render: function () {
		const perPage = this.state.perPage;
		const currentPage = this.state.currentPage;
        var details_slice = this.state.details.slice(currentPage*perPage,(currentPage+1)*perPage)
        var cards = details_slice.map(function(card,index){
            return (<JobCard key={index} job_detail={card}/>)
        });
        
		return (
			<div>
				<div className="text-center">
					Showing {(currentPage)*perPage+1} to {(currentPage)*perPage+(details_slice.length)} of {this.state.allItems} jobs.
                    <button className="btn btn-success" onClick={this.prevPage}><span className="glyphicon glyphicon-chevron-left"></span></button>
					<button className="btn btn-success" onClick={this.nextPage}><span className="glyphicon glyphicon-chevron-right"></span></button>               
				</div>
				{cards}
				<div className="text-center">
					Showing {(currentPage)*perPage+1} to {(currentPage)*perPage+(details_slice.length)} of {this.state.allItems} jobs.
					<button className="btn btn-success" onClick={this.prevPage}><span className="glyphicon glyphicon-chevron-left"></span></button>
					<button className="btn btn-success" onClick={this.nextPage}><span className="glyphicon glyphicon-chevron-right"></span></button> 
				</div>
			</div>
		)
	}
});

const JobCard = React.createClass({
	render: function () {
		return(
			<Paper style={{
				margin: "10px 20px",
				overflow: "hidden"
			}}>
				<div className="jobcard">
					<div className="jobcardup">
						<div>
							<h3 className="padding-bottom-20 hidden-xs"><strong>{this.props.job_detail.title}</strong></h3>
                            <h4 className="padding-bottom-20 hidden-lg hidden-md hidden-sm"><strong>{this.props.job_detail.title}</strong></h4>
						</div>

						<div className="row">
							<div className="col-xs-2 flex hidden-xs">
								<img className="img-responsive" width="100" height="100" src={this.props.job_detail.src}></img>
							</div>
							<div className="col-xs-10" 
                                style={{display:"flex;",
                                        justifyContent:"baseline",
                                }}>
            <div>
                                    <t>
                                    Posted On : <b>{this.props.job_detail.posted_on}</b>
                                    </t>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <t>
                                    Job Type : <b>{this.props.job_detail.job_type}</b>
                                    </t><br/><br/><br/>
                                    <t>
                                        {this.props.job_detail.description}
                                    </t>
            </div>
							</div>
						</div>
					</div>

					<div className="jobcardlow">
						<t>Deadline: <b>{this.props.job_detail.deadline}</b> ...</t> 
						<t>Minimum Experience: <b>{this.props.job_detail.minimum_exp}</b></t>
						<button type="button" className="btn btn-md apply-btn">Apply</button>
					</div>
				</div>

			</Paper>
			
		)
	}
})


export default ContentArea;