// Function to create the grid and add click event listeners to the grid items
function createGrid(size) {
    const gridContainer = document.getElementById("gridContainer");
    
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        
        // Add a click event listener to each grid item
        gridItem.addEventListener("click", () => {
          // Toggle the background color when clicked
          toggleColor(gridItem);
          playSound();
        });
      }
    }
  }

// Function to play sound effect
const playSound = () => {
  let sound = document.getElementById("audio");
  sound.currentTime = 0;
  sound.play();
}

// Function to toggle the background color of a grid item
function toggleColor(gridItem) {
  // Change the background color to a random color
  const randomColor = getRandomColor();
  gridItem.style.backgroundColor = randomColor;
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Call the createGrid function with the desired grid size (e.g., 8x8)
createGrid(20);

//   In this code, we have a grid container (div with class "grid-container") in the HTML file. The JavaScript code dynamically creates grid items (divs with class "grid-item") based on the grid size specified in the createGrid function. Each grid item has a click event listener attached to it, which calls the toggleColor function to change its background color to a randomly generated color.

//   When you open the index.html file in your browser, you should see a grid with clickable divs, and each div's color will change to a random color when clicked.

//   Regenerate response
//   Send a message

//   Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT July 20 Version
  
let fullScreenBtn = document.querySelector('button');

const getFullScreenElement = () => {
  return document.fullscreenElement
    || document.webkitFullScreenElement
    || document.mozFullScreenElement
    || document.msFullScreenElement;
}

const toggleFullScreen = () => {
  if (getFullScreenElement()) {
    document.exitFullscreen();
  } else {
    // document.documentElement.requestFullscreen().catch(console.log);
    document.getElementById("gridContainer").requestFullscreen().catch(console.log);
  }
}
  
fullScreenBtn.addEventListener('click', () => {
  toggleFullScreen();
});

document.addEventListener('fullscreenchange', () => {
  console.log("full screen changed!");
});
  

