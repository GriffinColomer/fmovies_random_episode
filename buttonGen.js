function getRandomLink() {
    var temp = document.getElementsByClassName("episodes")
    temp = temp[Math.floor(Math.random() * temp.length)]["children"]
    temp = temp[Math.floor(Math.random() * temp.length)]["firstElementChild"]["href"]
    return temp
  }

  function addButton() {
    var doc = document.getElementsByClassName("container watch-page")[0]["children"][1]["children"][0];
    var button = document.createElement("div");
    button.setAttribute("class", "item");
    button.innerHTML = "Random Episode";
    button.addEventListener("click", function() {
    window.location.replace(getRandomLink())
  })
    doc.appendChild(button);
  }

addButton() 