console.log("Part 1: Getting Started");
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
// console.log(mainEl);

console.log("Part 2: Creating a Menu Bar");
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

console.log("Part 3: Adding Menu Buttons");

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Iterate over the entire menuLinks array and for each "link" object:

for (let link of menuLinks) {
  let newLink = document.createElement("a"); // Create an <a> element

  newLink.textContent = link.text; // Set the text content to the "text" property of the link object

  topMenuEl.appendChild(newLink); // Append the new link to the topMenuEl element
}

console.log("Part 4: Adding Interactivity")