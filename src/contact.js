function createContactItem(fullName, role, phoneNum, email) {
  return { fullName, role, phoneNum, email };
}

function createContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactSection = document.createElement("div");
  contactSection.classList.add("Contact");

  const header = document.createElement("h2");
  header.textContent = "Contact Us";
  contactSection.appendChild(header);

  const contactItems = [
    createContactItem(
      "John Doe",
      "Sales Manager",
      "123-456-7890",
      "john.doe@example.com",
    ),
    createContactItem(
      "Jane Smith",
      "Customer Support",
      "987-654-3210",
      "jane.smith@example.com",
    ),
    createContactItem(
      "Mike Johnson",
      "Technical Support",
      "555-123-4567",
      "mike.johnson@example.com",
    ),
  ];

  const contactList = document.createElement("ul");
  contactItems.forEach((item) => {
    const contactItem = document.createElement("li");

    const fullName = document.createElement("h3");
    fullName.textContent = item.fullName;
    contactItem.appendChild(fullName);

    const role = document.createElement("p");
    role.textContent = item.role;
    contactItem.appendChild(role);

    const phoneNum = document.createElement("p");
    phoneNum.textContent = "Phone: " + item.phoneNum;
    contactItem.appendChild(phoneNum);

    const email = document.createElement("p");
    email.textContent = "Email: " + item.email;
    contactItem.appendChild(email);

    contactList.appendChild(contactItem);
  });

  contactSection.appendChild(contactList);
  content.appendChild(contactSection);
}

export default createContact;
