const handleSubmit = (e) => {
  let currTask;
  let inputVal = document.getElementById("input-bar").value;
  if (inputVal.length !== 0) {
    document.getElementById("input-bar").value = "";
    currTask = inputVal;
    let ul = document.getElementById("task-list");
    let li = document.createElement("li");
    li.className = "item";
    let span1 = document.createElement("SPAN");
    span1.className = "task-name";
    span1.appendChild(document.createTextNode(`${currTask}`));
    li.appendChild(span1);
    let span2 = document.createElement("SPAN");
    span2.className = "close";
    let txt = document.createTextNode("\u00D7");
    span2.appendChild(txt);
    span2.onclick = function () {
      this.parentElement.style.display = "none";
    };
    li.onclick = function () {
      this.style.backgroundColor = "#888";
      this.firstChild.style.textDecoration = "line-through";
    };
    li.appendChild(span2);
    ul.appendChild(li);
  }
};

document.getElementById("submit-button").addEventListener("click", handleSubmit);
