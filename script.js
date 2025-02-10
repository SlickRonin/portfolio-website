document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to My Website!");

    // Example: Change text color on click
    document.querySelector("header").addEventListener("click", function () {
        this.style.color = this.style.color === "red" ? "white" : "red";
    });
});
