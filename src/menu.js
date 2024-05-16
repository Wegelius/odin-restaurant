function createMenuItem(name, price, description) {
  return { name, price, description };
}

function createMenu() {
  const content = document.getElementById("content");
  content.innerHTML = ""; //  Clear the content

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const header = document.createElement("h2");
  header.textContent = "Our Menu";
  menu.appendChild(header);

  const menuItems = [
    createMenuItem("Pizza", "10$", "Delicious pizza with cheese and tomato"),
    createMenuItem("Pasta", "8$", "Pasta with tomato sauce"),
    createMenuItem("Burger", "5$", "Burger with beef patty"),
  ];

  const menuList = document.createElement("ul");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;
    menuItem.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    menuItem.appendChild(itemDescription);

    menuList.appendChild(menuItem);
  });

  menu.appendChild(menuList);
  content.appendChild(menu);
}
export default createMenu;
