// var projectSection = document.getElementById("projects");
// var aboutMeSection = document.getElementById("aboutme");
// var contactSection = document.getElementById("contact");


function scrollToSection(sectionName) {
    console.log("Clicked")
    section = document.getElementById(sectionName)
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); 
}