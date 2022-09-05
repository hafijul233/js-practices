import {Teacher} from "./teacher.js";

/*const Person = {
    name: '',
    walk() {
        console.log("walking")
    },
    talk: () => {
        console.log("hey")
    }
}

function myFunction() {
    console.log(typeof Person["walk"]);
    //document.getElementById("demo").innerHTML = "Paragraph changed.";
}*/

/*    function User() {
        (this.name = "John Doe"),
            (this.score = 20),
            (this.sayUser = function () {
                console.log(this.name, this.score);

                function innerFunction() {
                    console.log(this.name);
                }

                innerFunction();
            });
    }

    let newUser = new User;

    newUser.sayUser();*/

let person1 = new Teacher("Hafiz", "Math");
person1.teach();

function myFunction() {
    /*var getElementsByClassName = document.getElementsByClassName("unordered-list");

     console.log(getElementsByClassName.namedItem("class-one"));

    for(key in getElementsByClassName) {
        console.log("key", key, "value", getElementsByClassName[key] /!*, "function", ((typeof getElementsByClassName[key] == "function") ? getElementsByClassName[key]() : "Not Function")*!/);
    }

     let colors = ['red', 'green', 'blue', 'black', 'yellow', 'lime'];
     let colorListElement = document.querySelector("#color-list");

     const colorList = colors.map(function (color) {
         let listElement = document.createElement("li");
         listElement.style.color = color;
         listElement.style.textTransform = 'capitalize';
         //listElement.style.textDecorationLine = 'overline underline';
         listElement.style.margin = '1rem';
         listElement.style.padding = '1rem';
         listElement.style.border = '3px solid blue';
         listElement.innerText = color;
         return listElement;
     });

     colorList.forEach(function (color) {
         colorListElement.appendChild(color);
     });

     //colorListElement.append(colorList);*/

    /*        let a, b, rest;
            [a, b] = [10, 20];

            console.log(a);
    // expected output: 10

            console.log(b);
    // expected output: 20*/

    /*        let object = {b: 20, a : 10, rest : [30, 40, 50]}
            const {a:cc, b, ...rest} = object;
            console.log(cc);
            console.log(object);*/

    /*        var first = [1,2,3];
            var second = [4,5,6];

            //var combined = [first, "a", second, "b"];
            var combined = [...first, "a", ...second, "b"];

            console.log(combined);*/


    /*    let person1 = new Person("Hafiz");
        person1.walk();*/

}
