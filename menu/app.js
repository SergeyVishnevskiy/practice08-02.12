// <!-- <ul>
//         <li class="item"><a class="link" href="/home">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/cart">Cart</a></li>
//         <li><a href="/favorites">Favorites</a></li>
//         <li><a href="/logig">Login</a></li>
//       </ul> -->
let items = ["Home", "About", "Cart", "Favorites", "Login"];
const root = document.querySelector("#root");
const btn = document.querySelector("button");
const list = document.createElement("ul");
list.classList.toggle("hide");

const createLi = (text) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.classList.add("item");
  a.classList.add("link");
  a.href = `/${text}`;
  //   a.textContent = text.toUpperCase().slice(0, 1) + text.slice(1);
  a.textContent = text[0].toUpperCase() + text.slice(1);
  li.append(a);
  return li;
};
// console.log(createLi("items"));
let menu = items.map((menuItem) => {
  return createLi(menuItem);
});
list.append(...menu);
root.append(list);
function toggleMenu() {
  list.classList.toggle("show");
}
btn.addEventListener("click", toggleMenu);
