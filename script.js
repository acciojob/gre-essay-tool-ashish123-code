//your code here

// Get the evaluatedText and wordCount elements
const evaluatedText = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

// Define the function to count the words
function countWords() {
  const text = evaluatedText.value.trim();
  const count = text.length > 0 ? text.split(/\s+/).length : 0;
  wordCount.innerHTML = count;
}

// Add an event listener to the evaluatedText element
evaluatedText.addEventListener("input", countWords);