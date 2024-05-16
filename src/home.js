function createHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const header = document.createElement("h1");
  header.textContent = "Welcome to our restaurant!";
  content.appendChild(header);

  const image = document.createElement("img");
  image.src =
    "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg";
  image.alt = "restaurant";
  content.appendChild(image);

  const paragraph = document.createElement("p");
  paragraph.textContent = "We serve the best food in town!";
  content.appendChild(paragraph);
}

export default createHome;
