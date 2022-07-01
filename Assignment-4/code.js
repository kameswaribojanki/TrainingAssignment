//hamburger menu section
let hamburger = document.querySelector(".menu-icon");
let nav = document.querySelector(".menu-links");
hamburger.addEventListener("click", () => {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
})

let buttonContainer = document.querySelector(".button-div");
//table creation and insertion
function table() {
    let table = `<table class="table">
        <thead>
            <tr>
                <th >NO</th>
                <th>Name</th>
                <th>SurName</th>
                <th >Email</th>
                <th>Actions</th>
                </tr>
        </thead>
        <tbody>`;
    for (let i = 0; i < details.length; i++) {
        table = table + `<tr>
            <td>${i + 1}</td>
            <td>${details[i].name}</td>
            <td>${details[i].surName}</td>
            <td>${details[i].email}</td>
            <td><button  onClick="editFn(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button  onClick="deletFn(${i})"><i class="fa-solid fa-trash"></i></button>
            </td>
            </tr> `;
    };
    table = table + `</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};



var form = document.getElementById("form");
form.addEventListener("submit", store);

details = [];
getData();
table();

function getData() {
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};

function setData() {
    localStorage.setItem("details", JSON.stringify(details));
    let name = document.getElementById("name").value = "";
    let surName = document.getElementById("surName").value ="";
    let email = document.getElementById("email").value = "";

};

//VALIDATE FUNCTION  
function validate() {
    let isValidTrue = false;
    let name = document.getElementById("name").value;
    let surName = document.getElementById("surName").value;
    let email = document.getElementById("email").value;
    let errMsg = document.querySelectorAll(".errorMsg");


    if (name == "") {
        errMsg[0].textContent = "name can't be empty!";
        return isValidTrue;
    }
    else if (name.length < 3) {
        errMsg[0].textContent = "minimum 3 characters needed";
        return isValidTrue;
    }
    else if (name.length > 10) {
        errMsg[0].textContent = "maximum 10 characters allowed";
        return isValidTrue;
    }
    else if (name.match(/ /g)) {
        errMsg[0].textContent = "white spaces are not allowed";
        return isValidTrue;
    }
    else if (name.match(/[0-9]/g)) {
        errMsg[0].textContent = "Name should not contains numbers";
        return isValidTrue;
    }
    else if (name.match(/[~ ! @ # $ % ^ & * _ + - = < > ? . , ' " : ; | /]/g)) {
        errMsg[0].textContent = "Name should not contain any special characters"
        return isValidTrue;
    }
    else {
        errMsg[0].textContent = "";
    }



    if (surName == "") {
        errMsg[1].textContent = "name can't be empty!";
        return isValidTrue;
    }
    else if (surName.length < 3) {
        errMsg[1].textContent = "minimum 3 characters needed";
        return isValidTrue;
    }
    else if (surName.length > 10) {
        errMsg[1].textContent = "maximum 10 characters allowed";
        return isValidTrue;
    }
    else if (surName.match(/ /g)) {
        errMsg[1].textContent = "white spaces are not allowed";
        return isValidTrue;
    }
    else if (surName.match(/[0-9]/g)) {
        errMsg[1].textContent = "Name should not contains numbers";
        return isValidTrue;
    }
    else if (surName.match(/[~ ! @ # $ % ^ & * _ + - = < > ? . , ' " : ; | /]/g)) {
        errMsg[1].textContent = "Name should not contain any special characters"
        return isValidTrue;
    }
    else {
        errMsg[1].textContent = "";
    }





    if (email == "") {
        errMsg[2].textContent = "email can't be empty!";
        return isValidTrue;
    }
    else if ((!email.endsWith(email.match(/gmail.com/i))) && !(email.endsWith(email.match(/qualminds.com/i)))) {
        errMsg[2].textContent = "gmail and qualminds emails are allowed";
        return isValidTrue;
    }

    else {
        errMsg[2].textContent = "";
    }
    return isValidTrue = true;
}

//store data to localStorage and table
function store() {
    let name = document.getElementById("name").value;
    let surName = document.getElementById("surName").value;
    let email = document.getElementById("email").value;
    email = email.toLowerCase();
    let data = {
        name,
        surName,
        email
    };

    if (validate()) {
        for(i=0;i<details.length;i++){
            if(details[i].email==email){
                alert("email allready exist");
                return false;
            }
        }
        details.push(data);
        setData();
        table();
    }
}


//delete data to localStorage and table
function deletFn(index) {
    alert("perform delete operation");
    details.splice(index, 1);
    setData();
    table();
}

//update data in localStorage and table
function editFn(index) {
    alert("perform update operation");
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surName");
    let email = document.querySelector("#email");

    name.value = `${details[index].name}`;
    surname.value = `${details[index].surName}`
    email.value = `${details[index].email}`;

    buttonContainer.innerHTML = `<input type="submit" value="update Details" class="button1" onClick="update(${index})">`
}

function update(index) {
    debugger
    let name = document.getElementById("name").value;
    let surName = document.getElementById("surName").value;
    let email = document.getElementById("email").value;
    email = email.toLowerCase();
    details[index] = {
        name,
        surName,
        email
    };
    if (validate()) {
        for(i=0;i<details.length;i++){
            if(index!==i){
                if(details[i].email==email){
                    alert("updated email allready exist");
                    event.preventDefault();
                    return false;
                }
            }
        }
        setData();
        table();
        buttonContainer.innerHTML = `<input type="submit" value="Add Friend" class="button1">`
    }
}


