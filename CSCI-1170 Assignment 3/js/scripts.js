/* 
 * Simple function to toggle the dark mode class
 * for all containers in the document's body.
 * 
 */
function toggleDarkMode() {
    // Toggling the dark-mode class.
    document.body.classList.toggle("dark-mode");
    // Changing button text according to theme.
    if (document.getElementById("btn-dark-light-mode").innerHTML=="Dark Mode") {
        document.getElementById("btn-dark-light-mode").innerHTML= "Light Mode";
    }
    else {
        document.getElementById("btn-dark-light-mode").innerHTML= "Dark Mode";
    }
    // Begginers Level JavaScript learned from past Web Development course through AP-TECH in 2018.
}