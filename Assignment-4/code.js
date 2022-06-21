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
function store(){
    let name = document.getElementById("name");
    let surName=document.getElementById("surName");
    let email = document.getElementById("email");

    if (name.value == "" || surName.value=="" || email.value=="") {
        alert("please fill the details!");
        return
    }
    else if( (!isNaN(name.value)) || (!isNaN(surName.value)) ){
        alert("fields should not be numbers!");
        return
    }
    let data = {
        name: name.value,
        surName:surName.value,
        email: email.value
    };
    details.push(data);
    setData();
    table();
    name.value = "";
    surName.value="";
    email.value = "";
}


function deletFn(index){
    alert("delete");
    details.splice(index, 1);
    setData();
    table();
}


function editFn(index){
    alert("edit");
    let editForm=`
    <div class="contact-div">
    <div class="contacts">
        <div class="contact-div1">
            <label>Name</label>
            <input type="text" value="${details[index].name}" placeholder="Update Your Name" id="updatedName">
        </div>
        <div class="contact-div2">
            <label>Surame</label>
            <input type="text" value="${details[index].surName}" placeholder="Update Your Surname" id="updatedSurName">
        </div>
        <div class="contact-div3">
            <label>Email address</label>
            <input type="email" value="${details[index].email}" placeholder="Update Ypur Email" id="updatedEmail">
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
    let updatedName = document.getElementById("updatedName");
    let updatedSurname=document.getElementById("updatedSurName");
    let updatedEmail = document.getElementById("updatedEmail");

    details[index] = {
        name: updatedName.value,
        surName:updatedSurname.value,
        email: updatedEmail.value
    };
    setData();
    table();
}


