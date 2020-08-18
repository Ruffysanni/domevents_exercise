// Answers:            PART A:
        //1.	Select the section with an id of container without using querySelector.

        console.log(document.getElementById("container"));

        
        //2.	Select the section with an id of container using querySelector.

        var section = document.querySelector("#container");
        console.log(section);

        
        //3.	Select all of the list items with a class of "second".

        var classOfSecond = document.querySelectorAll(".second");
        console.log(classOfSecond);


        //4.	Select a list item with a class of third, but only the list item inside of the ol tag.

        var classOfThird = document.querySelectorAll(".third");
        console.log(classOfThird[1]);

        //5.	Give the section with an id of container the text "Hello!".
        
        var section = document.querySelector("#container");
            section.innerText = "Hello";
            console.log(section);
        
        
        //6.	Add the class main to the div with a class of footer.

        var footerDiv = document.querySelector(".footer");
        footerDiv.classList.add("main");
        console.log(footerDiv);


        //7.	Remove the class main on the div with a class of footer.

        var removeFooterDiv = document.querySelector(".footer");
        removeFooterDiv.classList.remove("main");
        console.log(removeFooterDiv);


        //8.	Create a new li element.

        var newLi = document.createElement("li");
        console.log(newLi);

        //9.	Give the li the text "four".
        var newLi = document.createElement("li");
        newLi.innerText = "four";

        console.log(newLi);


        //10.	Append the li to the ul element.

        var section = document.querySelector("#container");

        var newLi = document.createElement("li");
        newLi.innerText = "four";

        section.firstElementChild.appendChild(newLi);
        console.log(section);


        //11.	Loop over all of the lis inside the ol tag and give them a background color of "green".

        section.firstElementChild.nextElementSibling.children;

        var olList = section.firstElementChild.nextElementSibling.children;
        console.log(olList);

        for(var i=0; i < olList.length; i++){
            olList[i].style.backgroundColor = "red";
        };

        //12.	Remove the div with a class of footer.

        var body = document.querySelector("body");

        console.log(body)

        console.log(body.children)
        console.log(body.children[2])
        var divFooter = body.children[2];

        console.log(divFooter)
        body.removeChild(divFooter);

            console.log(body)
            console.log(body.children);



            // Answers:            Part B: Events
            