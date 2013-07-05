define([ 'dojo/_base/declare' ], function (declare) {
	return declare(null, {
		projectRoot: null,
		
		constructor: function(projectRoot_){
			if(projectRoot_) this.projectRoot = projectRoot_;
		},
		
		/*
		 * Method to get a list of objects representing projects found at a location
		 * specified by projectRoot.
		 */
		getProjects: function(){
			var projects = {
					count: 2,
					items: [
					        {
					        	id: "project1",
					        	name: "Project 1",
					        	description: "Some descriptive text for the project #1"
					        },
					        {
					        	id: "project2",
					        	name: "Project 2",
					        	description: "Some descriptive text for the project #2"
					        }
					]
			}
			return projects;
		}
		
	});
});