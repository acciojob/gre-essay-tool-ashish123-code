//your code here

function countWords() {
  var text = document.getElementById("evaluatedText").value;
  var wordCount = text.trim().split(/\s+/).length;
  document.getElementById("wordCount").innerHTML = wordCount;
}