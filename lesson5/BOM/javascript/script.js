const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  let userinput = input.value;

  const li = document.createElement('li');
  const deletebutton = document.createElement('button');
  const span = document.createElement('span');

  deletebutton.textContent = "❌";

  li.appendChild(span);
  span.textContent = userinput;
  li.appendChild(deletebutton);
  list.appendChild(li);

  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
  })

  input.focus();

})