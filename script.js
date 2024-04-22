document.addEventListener("DOMContentLoaded", function() {
  // Get all card elements
  const cards = document.querySelectorAll(".card");
  
  // Iterate through each card
  cards.forEach((card, index) => {
    // Get the select button and info div for the current card
    const selectButton = card.querySelector("button#select");
    const closeButton = card.querySelector("button#close");
    const infoDiv = card.querySelector(".info");
    
    // Attach click event listener to the select button
    selectButton.addEventListener("click", () => {
      // Show the info div
      infoDiv.style.display = "block";
    });
    
    // Attach click event listener to the close button
    closeButton.addEventListener("click", () => {
      // Hide the info div
      infoDiv.style.display = "none";
    });
    
    // Initially hide the info divs
    infoDiv.style.display = "none";
  });
});
