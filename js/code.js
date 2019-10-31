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
// projects_slider.addEventListener("click", switchProjectsSliderImage, false);

let project_slider_chevron_left = document.getElementById("project_slider_chevron_left");
let project_slider_chevron_right = document.getElementById("project_slider_chevron_right");
project_slider_chevron_left.addEventListener("click", switchProjectsSliderImage, false);
project_slider_chevron_right.addEventListener("click", switchProjectsSliderImage, false);

let data = ["img/Image_screen_project_1.png","img/Image_screen_project_2.png"];
let data_index = 0;

function switchProjectsSliderImage(){
	if(event.currentTarget.id === "project_slider_chevron_left"){
		if(data_index - 1 >= 0){image_screen_project.src = data[--data_index];}
		else{
			data_index = data.length - 1;
			image_screen_project.src = data[data_index];
		}
	}
	else if(event.currentTarget.id === "project_slider_chevron_right"){
		if(data_index + 1 > data.length - 1){
			data_index = 0;
			image_screen_project.src = data[data_index];
		}
		else{image_screen_project.src = data[++data_index];}
	}
}

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

let image_screen_project = document.getElementById("image_screen_project");










