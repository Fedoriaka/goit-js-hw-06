const ulElement = document.getElementById("categories");
const liItems = ulElement.querySelectorAll("li.item");
console.log(`Number of categories: ${liItems.length} `);

liItems.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const elCount = element.querySelectorAll("li").length;
  console.log(`Elements: ${elCount}`);
});
