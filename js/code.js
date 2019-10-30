let education_switch = document.getElementById("education_switch");
education_switch.addEventListener("click", changeEducationState, false);

let education_info_table = document.getElementById("education_info_table");

// let education_info_state = null;

function changeEducationState(){
	if(education_switch.className === "fa fa-chevron-down  fa-fw"){
		education_switch.className = "fa fa-chevron-up  fa-fw";
		showEducationInfo();
	}
	else if(education_switch.className === "fa fa-chevron-up  fa-fw"){
		education_switch.className = "fa fa-chevron-down  fa-fw";
		hideEducationInfo();
	}
}

function showEducationInfo(){
	education_info_table.className = "education-content-enable";
}

function hideEducationInfo(){
	education_info_table.className = "education-content-disable";
}


let projects_switch = document.getElementById("projects_switch");
projects_switch.addEventListener("click", changeProjectsState, false);

let projects_slider = document.getElementById("projects_slider");

function changeProjectsState(){
	if(projects_switch.className === "fa fa-chevron-down  fa-fw"){
		projects_switch.className = "fa fa-chevron-up  fa-fw";
		showProjectsInfo();
	}
	else if(projects_switch.className === "fa fa-chevron-up  fa-fw"){
		projects_switch.className = "fa fa-chevron-down  fa-fw";
		hideProjectsInfo();
	}
}

function showProjectsInfo(){
	projects_slider.className = "projects-content-enable";
}

function hideProjectsInfo(){
	projects_slider.className = "projects-content-disable";
}