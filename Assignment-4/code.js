//hamburger menu section
let hamburger=document.querySelector(".menu-icon");
let nav=document.querySelector(".menu-links");
hamburger.addEventListener("click",()=>{
    if(nav.style.display == "block"){
        nav.style.display="none";
    }
    else{
        nav.style.display="block";
    }
})

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
            for (let i = 0; i < details.length; i++){
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
            table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};



var form=document.getElementById("form");
form.addEventListener("submit",store);

details = [];
getData();
table();

function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};

function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};

//VALIDATE FUNCTION  
function validate(){
    let isValidTrue=true;
    let name = document.getElementById("name");
    let surName=document.getElementById("surName");
    let email = document.getElementById("email");

    if ( name.value == "" || surName.value=="" || email.value=="" ) {
        alert("please fill the details!");
        event.preventDefault();
        isValidTrue=false;
    }
    else if( name.value.length<3 || surName.value.length<3 ){
        alert("minimum 3 characters needed");
        event.preventDefault();
        isValidTrue=false;
    }
    else if( name.value.length>10 || surName.value.length>10 ){
        alert("maximum 10 characters allowed");
        event.preventDefault();
        isValidTrue=false; 
    }
    else if( (!email.value.endsWith(email.value.match(/gmail.com/i))) && !(email.value.endsWith(email.value.match           (/qualminds.com/i))) ){
        alert("allow only gmail and qualminds emails");
        event.preventDefault();
        isValidTrue=false;
    }
    else if( name.value.match(/ /g) || surName.value.match(/ /g) || email.value.match(/ /g) ){
        alert("white spaces are not allowed");
        event.preventDefault();
        isValidTrue=false;
    }
    else if( name.value.match(/[0-9]/g) || surName.value.match(/[0-9]/g)){
        alert("Name and surName should not be a numbers");
        event.preventDefault();
        isValidTrue=false;
    }
    else if( name.value.match(/[~ ! @ # $ % ^ & * _ + - = < > ? . , ' " : ; | /]/g) || surName.value.match(/[~ ! @ # $      % ^ & * _ + - = < > ? . , ' " : ; | /]/g)){
        alert("Name and surName should not contain any special characters");
        event.preventDefault();
        isValidTrue=false;
    }
    return isValidTrue;
}

//store data to localStorage and table
function store(){
    let name = document.getElementById("name");
    let surName=document.getElementById("surName");
    let email = document.getElementById("email");

    let data = {
        name: name.value,
        surName:surName.value,
        email: email.value
    };
    
    if(validate())
    {
    details.push(data);
    setData();
    table();
    name.value = "";
    surName.value="";
    email.value = "";
    event.preventDefault();
    }
}


//delete data to localStorage and table
function deletFn(index){
    alert("perform delete operation");
    details.splice(index, 1);
    setData();
    table();
}

//update data in localStorage and table
function editFn(index){
    alert("perform update operation");
    let editForm=`
    <div class="contact-div">
    <div class="contacts">
        <div class="contact-div1">
            <label>Name</label>
            <input type="text" value="${details[index].name}" placeholder="Update Your Name" id="name">
        </div>
        <div class="contact-div2">
            <label>Surame</label>
            <input type="text" value="${details[index].surName}" placeholder="Update Your Surname" id="surName">
        </div>
        <div class="contact-div3">
            <label>Email address</label>
            <input type="email" value="${details[index].email}" placeholder="Update Ypur Email" id="email">
        </div>
    </div>
    <div class="button-div">
        <input type="submit" value="update Details" class="button1" onClick="update(${index})">
    </div>
</div>
    `;
    document.getElementById("form").innerHTML = editForm;
}

function update(index) {
    event.preventDefault();
    let name = document.getElementById("name");
    let surName=document.getElementById("surName");
    let email = document.getElementById("email");

    details[index] = {
        name:name.value,
        surName:surName.value,
        email:email.value
    };
    let form1=`
    <div class="contact-div">
    <div class="contacts">
        <div class="contact-div1">
            <label>Name</label>
            <input type="text" placeholder="George" id="name">
        </div>
        <div class="contact-div2">
            <label>Surame</label>
            <input type="text" placeholder="Stone" id="surName">
        </div>
        <div class="contact-div3">
            <label>Email address</label>
            <input type="email" placeholder="george.stone@gmail.com" id="email">
        </div>
    </div>
    <div class="button-div">
        <input type="submit" value="Add Friend" class="button1">
    </div>
</div>
    `;
    if(validate())
    {
        setData();
        table();
    }
    document.getElementById("form").innerHTML=form1;
}


