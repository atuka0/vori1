let hide = document.getElementById("hide");
let show = document.getElementById("show");
let info = document.getElementById("info");

hide.addEventListener("click", () => {
    let fix = document.querySelector(".flex");
    fix.classList.add("flx1"); // Hide the section
    
    info.style.display = "none"; // Hide the info text
    
    hide.style.backgroundColor = "yellow"; // Set hide button color
    show.style.backgroundColor = "green"; // Set show button color
    
    info.textContent = "Hide Sections"; // Update info text
});

show.addEventListener("click", () => {
    let fix = document.querySelector(".flex");
    fix.classList.remove("flx1"); // Show the section
    
    info.style.display = "block"; // Show the info text
    
    hide.style.backgroundColor = "green"; // Set hide button color
    show.style.backgroundColor = "yellow"; // Set show button color
    
    info.textContent = "Show Sections"; // Update info text
});

