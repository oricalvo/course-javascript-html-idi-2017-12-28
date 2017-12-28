const button = document.querySelector(".toggle");
if(!button) {
    throw new Error(".toggle was not found");
}

const panel = document.querySelector(".panel");
if(!panel) {
    throw new Error(".panel was not found");
}

let isVisible = false;

button.addEventListener("click", function() {
    isVisible = !isVisible;

    if(isVisible) {
        panel.style.display = "block";
    }
    else {
        panel.style.display = "none";
    }
});
