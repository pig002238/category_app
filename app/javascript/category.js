window.addEventListener("turbo:load", function() {
  
  const parentCategory = document.getElementById("parent-category")

  const selectChildElement = (selectForm) => {

  }
  
  const XHR = new XMLHttpRequest();
  const categoryXHR = (id) => {
    XHR.open("GET", `/category/${id}`, true);
    XHR.responseType = "json";
    XHR.send();
  }

  const getChildCategoryData = () => {
    const parentValue = parentCategory.value
    categoryXHR(parentValue)
  }

  pernetCategory.addEventlistener("change", function () {
    selectChildElement("child-select-wrap")
    getChildCategoryData()
  })

 })