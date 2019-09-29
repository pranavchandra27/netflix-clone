const tabItems = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content-item");

//Select Tab Content
function selectItem(e) {
  //Remover Border from other then selected classes
  removeBorder();
  removeShow();
  //Add Border To Current Tab
  this.classList.add("tab-border");
  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItem.forEach(item => item.classList.remove("show"));
}

//Listen to tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));
