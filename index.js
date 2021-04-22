function dropdownMenu(){
    var dropdownClick = document.getElementById("dropdownClick");
    console.log(dropdownClick)
    if (dropdownClick.className === "topnav") {
        dropdownClick.className += " responsive";
        // change topnav to topnav.responsive
    } else {
        dropdownClick.className = "topnav";
        
    }
}