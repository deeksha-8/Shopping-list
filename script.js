let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addItem)
let parentList = document.getElementById('parentList');
function addItem(e) {
    if(parentList.children(0).className == "emptyMsg"){
        parentList.children(0).remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    console.log(currentInput.value)
    let currentItemName = currentInput.value
    let currntitem;

    let newLi = document.createElement("li")
    // newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = '<h3 class="flex-grow-1">${currentItemName}</h3> < button class="btn btn-warning mx-3" > Edit</button > <button class="btn btn-danger"  onclick="removeItem(this)">Remove</button>'
    // newLi.textContent = currentInput.value
   
    parentList.appendChild(newLi)
}

let remove_btn = document.getElementById('remove_btn')

remove_btn.addEventListener('click', removeItem)
function removeItem(currElement){
    currElement.parentElement.remove()
    let parentList = document.getElementById('parentList');
    if(parentList.children.length <=0){
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.textContent = "Nothing is here.Add something"
        parentList.appendChild(newEmptyMsg)
    }
}
function editItem(currElement){
    if(currElement.textContent == "done"){
        currElement.textContent = "edit"
        let currItemName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3');
        currHeading.className = "flex=grow-1"
        currHeading.textContent = currItemName 
        currElement.parentElement.replaceChild(currHeading , currElement.previousElementSibling)
    }
    else{
    currElement.textContent = "done"
    let currItemName = currElement.previousElementSibling.textContent
    let currInput = document.createElement('input');
    currInput.type = "text"
    currInput.className= "form-control"
    currInput.placeholder = "Item name"
    currInput.value = currentItemName ;

    currElement.parentElement.replaceChild(currInput , currElement.previousElementSibling)
    }
}