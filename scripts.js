document.addEventListener("DOMContentLoaded", function () {
    const helloWorld = document.getElementById("hello-world");

    helloWorld.addEventListener("click", function () {
        // Animate the "Hello World" element
        helloWorld.style.transform = "scale(2)";
        helloWorld.style.opacity = "0";

        // Add a delay for the animation before redirecting to your full website
        setTimeout(function () {
            window.location.href = "full-website.html";
        }, 2000); // Adjust the delay time (in milliseconds) as needed
    });
});