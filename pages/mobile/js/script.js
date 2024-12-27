const handleTabs = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-tab]");
    const contents = document.querySelectorAll(".tab-content");

    // Set default active tab (Outstation Cabs)
    const defaultTab = document.querySelector('[data-tab="outstation"]');
    const defaultContent = document.getElementById("outstation");

    // Activate default tab and content
    defaultTab.classList.add("text-blue-500", "border-blue-500");
    defaultTab.classList.remove("text-gray-500", "border-transparent");
    defaultContent.classList.remove("hidden");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");

        // Reset all tabs to inactive
        tabs.forEach((t) => {
          t.classList.remove("text-blue-500", "border-blue-500");
          t.classList.add("text-gray-500", "border-transparent");
        });

        // Hide all content sections
        contents.forEach((content) => {
          content.classList.add("hidden");
        });

        // Activate clicked tab
        tab.classList.add("text-blue-500", "border-blue-500");
        tab.classList.remove("text-gray-500", "border-transparent");

        // Show corresponding content
        document.getElementById(targetTab).classList.remove("hidden");
      });
    });
  });
};

const addingStops = () => {
    const addStopBtn = document.getElementById("addStopBtn");
    const stopsContainer = document.getElementById("stopsContainer");
    let stopCount = 0;
  
    // Function to remove a stop input
    function removeStop(button) {
      const stopDiv = button.parentElement;
      stopDiv.remove();
      stopCount--;
  
      // Show Add Stop button if there are less than 5 stops
      if (stopCount < 5) {
        addStopBtn.style.display = "inline-block";
      }
    }
  
    // Function to create stop input with a remove button
    function createStopInput() {
      stopCount++;
      const stopDiv = document.createElement("div");
      stopDiv.classList.add( "flex", "items-center");
  
      stopDiv.innerHTML = `
        <input
          type="text"
          placeholder="Enter stop location"
          class="w-full border-gray-300 rounded-lg mb-2 font-bold  placeholder:font-bold text-lg focus:outline-none "
        />
        <button class="ml-2 text-red-500 font-medium">❌</button>
      `;
  
      stopsContainer.appendChild(stopDiv);
  
      // Add event listener for remove button
      const removeBtn = stopDiv.querySelector("button");
      removeBtn.addEventListener("click", function() {
        removeStop(removeBtn);
      });
  
      // Hide Add Stop button if 5 stops are reached
      if (stopCount >= 5) {
        addStopBtn.style.display = "none";
      }
    }
  
    // Add event listener to Add Stop button
    addStopBtn.addEventListener("click", createStopInput);
  };



function reverseLocations(pickupId, dropId) {
  // Get the input elements
  const pickupInput = document.getElementById(pickupId);
  const dropInput = document.getElementById(dropId);

  // Swap their values
  const temp = pickupInput.value;
  pickupInput.value = dropInput.value;
  dropInput.value = temp;
}






handleTabs();
addingStops();

