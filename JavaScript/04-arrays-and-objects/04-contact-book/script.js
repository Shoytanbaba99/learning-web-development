
const btn = document.getElementById("addContactBtn");
const list = document.getElementById("contactList");

let contacts = [];

function renderContacts(){
    list.innerHTML = "";
    contacts.forEach((contact) => {
        const li = document.createElement("li");
        li.innerText = contact.name + ' - ' + contact.phone;
        list.appendChild(li);
    });
}

btn.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value;
    const phoneInput = document.getElementById("phoneInput").value;
    const newContact = {name: nameInput, phone: phoneInput};
    contacts.push(newContact);
    renderContacts();
    document.getElementById("nameInput").value = "";
    document.getElementById("phoneInput").value = "";
})

