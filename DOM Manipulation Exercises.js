/* 
Write the code necessary to do the following:

Select the section with an id of container without using querySelector.
Select the section with an id of container using querySelector.
Select all of the list items with a class of “second”.
Select a list item with a class of third, but only the list item inside of the ol tag.
Give the section with an id of container the text “Hello!”.
Add the class main to the div with a class of footer.
Remove the class main on the div with a class of footer.
Create a new li element.
Give the li the text “four”.
Append the li to the ul element.
Loop over all of the lis inside the ol tag and give them a background color of “green”.
Remove the div with a class of footer
*/



// Select the section with an id of container without using querySelector.
document.getElementById("container");

// Select the section with an id of container using querySelector.
document.querySelector("#container");


// Select all of the list items with a class of “second”.
document.querySelectorAll("li.second");


// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol > li.third")


// Give the section with an id of container the text “Hello!”.
document.querySelector("#container").textContent = "Hello!";


// Add the class main to the div with a class of footer.
document.querySelector("div.footer").classList.add("main");


// Remove the class main on the div with a class of footer.
document.querySelector("div.footer").classList.remove("main");


// Create a new li element.
let li = document.createElement("li");


// Give the li the text “four”.
li.innerText = "four";


// Append the li to the ul element.
document.querySelector("ul").append(li);


// Loop over all of the lis inside the ol tag and give them a background color of “green”.
for (let el of document.querySelectorAll("ol > li")) {
  el.style.backgroundColor = "green";
}


// Remove the div with a class of footer
document.querySelector(".footer").remove();

