window.addEventListener("submit", (e) => {
  e.preventDefault()
  const newitem = document.querySelector("#item-input").value
  const listItem = document.createElement("div")
  listItem.classList.add("list-item")
  listItem.textContent = newitem
  console.log(listItem)
  const listContainer = document.querySelector("#list")
  listContainer.appendChild(listItem)
  document.querySelector("#item-input").value = ""
  listItem.addEventListener("click", (e) => {
    e.target.remove()
  })
})
