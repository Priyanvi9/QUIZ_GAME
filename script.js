function askName() {
  const name = prompt("Please enter your name : ");
  const messageElement = document.getElementById("message");
  if (name) {
    messageElement.innerHTML = `Welcome, <strong>${name}</strong>! Test your abilities`;
  } else {
    messageElement.innerHTML = `NA NA Nam to dalna pdega, <br> no worry fill the name again and see magic`;
  }
}
