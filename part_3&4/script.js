var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemsList.addEventListener("click", deleteItem);

//Add item
function addItem(e){
    
   e.preventDefault();
    
   //Get input value
   var newItem = document.getElementById("item").value;

     // var body = document.querySelector(".container");
   // body.children[3];

   //create new li element
   var li = document.createElement("li");

    //add class
    li.classList = "list-group-item text-muted";

     li.classList.add= "delete"
    
    //Add textnode to input value
     li.appendChild(document.createTextNode(newItem));
       
    

    //  body.children[3].appendChild(li.appendChild(document.createTextNode(newItem)));

 //creating the delete buttoon
     var removeBtn = document.createElement("button");

    //adding class to delete button

    removeBtn.classList = "list-group-item btn btn-danger btn-sm float-right";

    //append text node:
     removeBtn.appendChild(document.createTextNode("Remove"));
   

     //Appending the delete button to the li
     li.appendChild(removeBtn);

     itemsList.appendChild(li);
}


//Removing item;
function deleteItem(e){
    if(e.target.classList.contains("list-group-item")){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
 }