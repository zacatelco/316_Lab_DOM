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
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Iterate over the entire menuLinks array and for each "link" object:

for (let link of menuLinks) {
  let newLink = document.createElement("a"); // Create an <a> element

  newLink.textContent = link.text; // Set the text content to the "text" property of the link object

  topMenuEl.appendChild(newLink); // Append the new link to the topMenuEl element
}

console.log("Part 4: Adding Interactivity");

// Select the <nav id="sub-menu"> element and cache it
const subMenuEl = document.getElementById("sub-menu");

// Set the height to 100%
subMenuEl.style.height = "100%";

// Set the background color using the CSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the flex-around class
subMenuEl.classList.add("flex-around");
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Select all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Event listener for top menu
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  let clickedLink = event.target;
  if (clickedLink.tagName !== "A") return;

  console.log(clickedLink.textContent);

  // Remove active class from all links
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Toggle active class on clicked link
  if (!clickedLink.classList.contains("active")) {
    clickedLink.classList.add("active");

    // Find the clicked menu link object
    let linkObj = menuLinks.find(
      (link) => link.text === clickedLink.textContent
    );

    // Show submenu if subLinks exist
    if (linkObj && linkObj.subLinks) {
      buildSubmenu(linkObj.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    subMenuEl.style.top = "0";
  }
});

// Helper function to build submenu
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach((subLink) => {
    let subLinkEl = document.createElement("a");
    subLinkEl.href = subLink.href;
    subLinkEl.textContent = subLink.text;
    subMenuEl.appendChild(subLinkEl);
  });
}

// Event listener for submenu
subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  let clickedSubLink = event.target;
  if (clickedSubLink.tagName !== "A") return;

  console.log(clickedSubLink.textContent);

  subMenuEl.style.top = "0";
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Update mainEl with clicked submenu item
  mainEl.innerHTML = `<h1>${clickedSubLink.textContent}</h1>`;
});
