//your JS code here. If required.
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const color = document.getElementById("colorSelect");
  color.removeChild(color.options[color.selectedIndex]);

  
});