// Part 1B:
// 1.


//2:
    //Identifying the id of the 
    var bodyHeading = document.querySelector("#change_heading");

    console.log(bodyHeading);

    //inserting the new word to change the word existing word in the id
    bodyHeading.innerText = "Hello World!";

    //Output of the new heading
    console.log(bodyHeading);


//3: 


//4 - 6:
    var body = document.querySelector("body");
    console.log(body);

    console.log(body.children);
    
    var newDiv = document.createElement("div");

    //Output of newDiv
    console.log(newDiv);

    //5:
    
    //Adding a class to the newDiv
    newDiv.className = "purple";

    //Output of the newDiv with the class addition
    console.log(newDiv):


    //Adding the backgroundColor to the newDiv
    newDiv.style.backgroundColor = "purple";

    //Output of the child of the parent - body.
    body.children[2];


    //6:
    //Appending the newDIv to the body
    body.children[2].appendChild(newDiv);

    //Output of the parent- body after appending

    body.children[2];


