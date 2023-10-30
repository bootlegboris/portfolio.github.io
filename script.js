function showDescription(imageId) {
    const description = document.getElementById(`desc${imageId}`);
    description.style.display = "block";

    // Hide description when clicking outside the image
    window.onclick = function (event) {
        if (event.target != description) {
            description.style.display = "none";
        }
    };
}