import React from 'react';
import Paper from 'material-ui/Paper';
var createReactClass = require('create-react-class');

const JobCard = createReactClass({
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

 const ContentArea = createReactClass({
	getInitialState: function(){
		let details= [{
					title: "Asst Professor of Life Sciences in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	            	deadline: " 1 month",
	            	minimum_exp: "5 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
	            {
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "https://www.iitr.ac.in/departments/ECE/uploads/Image/IITR%20New%20LOGO/IITR%20New%20Logo.jpg",
	            	description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,",
	            	deadline: " 1 month",
	            	minimum_exp: "2 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
	            {
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.iitg.ernet.in/stud/gymkhana/technical/images/logo.png",
	            	description: "Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi",
	            	deadline: " 1 month",
	            	minimum_exp: "1 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
            	{
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "https://www.iitr.ac.in/departments/ECE/uploads/Image/IITR%20New%20LOGO/IITR%20New%20Logo.jpg",
	            	description: "condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum",
	            	deadline: " 1 month",
	            	minimum_exp: "10 years",
	            	posted_on : "1 month ago",
	            	job_type: "Full time",
	            	link_title: "",
	            	link_apply: ""
            	},
            	{
	            	title: "Professor of Computer Science Engineering in IIT Guwahati Guwahati",
	            	src: "http://www.sit.iitd.ac.in/site-assets/images/iitd_logo.png",
	            	description: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat",
	            	deadline: " 1 month",
	            	minimum_exp: "7 years",
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
                <h1 className="text-center h1grey hidden-xs">Top faculty jobs in India</h1>
				<h3 className="text-center h1grey hidden-sm hidden-lg hidden-md">Top faculty jobs in India</h3>
				<div className="content">
					<div className="content-buttons">
						Showing {(currentPage)*perPage+1} to {(currentPage)*perPage+(details_slice.length)} of {this.state.allItems} jobs.
	                    <button className="btn btn-success" onClick={this.prevPage}><span className="glyphicon glyphicon-chevron-left"></span></button>
						<button className="btn btn-success" onClick={this.nextPage}><span className="glyphicon glyphicon-chevron-right"></span></button>               
					</div>
					{cards}
					<div className="content-buttons">
						Showing {(currentPage)*perPage+1} to {(currentPage)*perPage+(details_slice.length)} of {this.state.allItems} jobs.
						<button className="btn btn-success" onClick={this.prevPage}><span className="glyphicon glyphicon-chevron-left"></span></button>
						<button className="btn btn-success" onClick={this.nextPage}><span className="glyphicon glyphicon-chevron-right"></span></button> 
					</div>
				</div>
			</div>
		)
	}
});



export default ContentArea;