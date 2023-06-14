// Keep track of the currently expanded image
let expandedImage = null;

function expandImage(event) {
    // Get the clicked element from the event object
    const clickedElement = event.target;

    // Check if the clicked element is an image with the 'expandable' class
    const isExpandable =
        clickedElement.tagName === "IMG" &&
        clickedElement.classList.contains("expandable");

    if (isExpandable) {
        // If the clicked image is the same as the currently expanded image, toggle the 'expanded' class and update the reference
        if (clickedElement === expandedImage) {
            clickedElement.classList.toggle("expanded");
            expandedImage = clickedElement.classList.contains("expanded")
                ? clickedElement
                : null;
        } else {
            // If there is an expanded image, shrink it
            if (expandedImage) {
                expandedImage.classList.remove("expanded");
            }

            // Expand the clicked image and update the reference
            clickedElement.classList.add("expanded");
            expandedImage = clickedElement;
        }

        // Stop the event propagation to prevent shrinking the image immediately when expanding
        event.stopPropagation();
    } else {
        // If an element other than an expandable is clicked, shrink the expanded image
        if (expandedImage) {
            expandedImage.classList.remove("expanded");
            expandedImage = null;
        }
    }
}
