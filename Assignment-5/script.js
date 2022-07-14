
// $("button").click(function () {
//     $("button").toggleClass("favorite-btn");
//   });
//   $("button").click(function () {
//     $("buttton").toggleClass("favorite-btn");
//   });
favorites();
customQuotes();
$("button").click(function () {
    var btnText = $(this).text();
    console.log("btn text "+btnText)

    if(btnText.toLowerCase()=="favorites")
    {
        $(".favorite-btn").addClass("favorite-btn1");
        $(".custom-btn").removeClass("favorite-btn1");
        $(".btnTextHeading").text(btnText);
        $("#carouselExampleIndicators").css("display","none");
        $("#carouselExampleIndicators0").css("display","block");
    }
    else if(btnText.toLowerCase()=="custom quotes"){
        $(".custom-btn").addClass("favorite-btn1");
        $(".favorite-btn").removeClass("favorite-btn1");
        $(".btnTextHeading").text(btnText);
        $("#carouselExampleIndicators0").css("display","none");
        $("#carouselExampleIndicators").css("display","block");
    }
  });
newInventory();
function customQuotes(){
  $.getJSON("favorites.json",(data)=>{
    for(let i=0;i<data.vehicles.length;i++){
        if(i<=2){
      $(".cards-wraper11").append(`
      <div class="card card0">
      <div class="card-header d-flex align-items-center justify-content-between p-3 bg-primary text-white">
      <h4>Custom Lease</h4>
      <i class="fa-solid fa-clipboard-check fs-3"></i>
  </div>
  <div class="card-body bg-light">
      <h3>2022 ${data.vehicles[i].year} ${data.vehicles[i].transmission} ${data.vehicles[i].trim}</h3>
      <p>${data.vehicles[i].transmission} ${data.vehicles[i].driveTrain}</p>
      <img src="${data.vehicles[i].photoURLs}" class="mx-auto d-block">
  </div>
  <div class="card-footer bg-white pt-4 pb-4 ps-5 pe-5">
      <div class="d-flex justify-content-between">
          <p>${data.vehicles[i].exteriorColor}</p>
          <p><i class="fa-solid fa-circle" style="color:${data.vehicles[i].extColorGeneric}"></i></p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Black Leather Interior</p>
          <p><i class="fa-solid fa-circle"></i></p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Your Price</p>
          <p class="text-dark">$${data.vehicles[i].yourPrice}</p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Your Lease Payment</p>
          <p class="text-dark font">${data.vehicles[i].leasePayment}</p>
      </div>
      <div>
          <button type="button" class="btn btn-primary">View Details</button>
      </div>
      <div class="text-center p-3">
          <i class="fa-regular fa-trash-can fs-3 text-muted"></i>
      </div>
  </div>
  </div>
      `)
    }
    else{
        $(".cards-wraper12").append(`
        <div class="card card0">
        <div class="card-header d-flex align-items-center justify-content-between p-3 bg-primary text-white">
        <h4>Custom Lease</h4>
        <i class="fa-solid fa-clipboard-check fs-3"></i>
    </div>
    <div class="card-body bg-light">
        <h3>2022 ${data.vehicles[i].year} ${data.vehicles[i].transmission} ${data.vehicles[i].trim}</h3>
        <p>${data.vehicles[i].transmission} ${data.vehicles[i].driveTrain}</p>
        <img src="${data.vehicles[i].photoURLs}" class="mx-auto d-block">
    </div>
    <div class="card-footer bg-white pt-4 pb-4 ps-5 pe-5">
        <div class="d-flex justify-content-between">
            <p>${data.vehicles[i].exteriorColor}</p>
            <p><i class="fa-solid fa-circle" style="color:${data.vehicles[i].extColorGeneric}"></i></p>
        </div>
        <div class="d-flex justify-content-between">
            <p>Black Leather Interior</p>
            <p><i class="fa-solid fa-circle"></i></p>
        </div>
        <div class="d-flex justify-content-between">
            <p>Your Price</p>
            <p class="text-dark">$${data.vehicles[i].yourPrice}</p>
        </div>
        <div class="d-flex justify-content-between">
            <p>Your Lease Payment</p>
            <p class="text-dark font">${data.vehicles[i].leasePayment}</p>
        </div>
        <div>
            <button type="button" class="btn btn-primary">View Details</button>
        </div>
        <div class="text-center p-3">
            <i class="fa-regular fa-trash-can fs-3 text-muted"></i>
        </div>
    </div>
    </div>
        `)
    }
    }
  })
}
function newInventory(){
    $.getJSON("inventory.json",(data)=>{
        for(let i=0;i<data.newModels.length;i++){
            if(i<=3){
          $(".cards-wraper21").append(`
          <div class="card card1">
          <div class="card-header">
          <img src="${data.newModels[i].vehicles.photoURLs}" class="mx-auto d-block">
      </div>
      <div class="card-body ps-5 pe-5 pt-3 pb-3">
         <p>${data.newModels[i].vehicles.year}</p>
         <h3 class="text-primary">${data.newModels[i].vehicles.make} ${data.newModels[i].vehicles.model} ${data.newModels[i].vehicles.trim}</h3>
         <P>Lease for $267.47 per month <i class="fa-solid fa-clock ps-1"></i></P>
      </div>
      <div class="card-footer bg-white d-flex justify-content-between align-items-center pt-3 pb-3 ps-5 pe-5">
          <div>
              <p>View All Offers <i class="fa-solid fa-circle-chevron-right ps-1"></i></p>
          </div>
          <div>
              <button type="button" class="btn btn-primary">Explore</button>
          </div>
      </div>
      </div>
          `)
        }
        else if(i>3 && i<=7){
            $(".cards-wraper22").append(`
            <div class="card card1">
            <div class="card-header">
            <img src="${data.newModels[i].vehicles.photoURLs}" class="mx-auto d-block">
        </div>
        <div class="card-body ps-5 pe-5 pt-3 pb-3">
           <p>${data.newModels[i].vehicles.year}</p>
           <h3 class="text-primary">${data.newModels[i].vehicles.maker} CR-V LX</h3>
           <P>Lease for $267.47 per month <i class="fa-solid fa-clock ps-1"></i></P>
        </div>
        <div class="card-footer bg-white d-flex justify-content-between align-items-center pt-3 pb-3 ps-5 pe-5">
            <div>
                <p>View All Offers <i class="fa-solid fa-circle-chevron-right ps-1"></i></p>
            </div>
            <div>
                <button type="button" class="btn btn-primary">Explore</button>
            </div>
        </div>
        </div>
            `)
        }
        else{
            $(".cards-wraper23").append(`
            <div class="card card1">
            <div class="card-header">
            <img src="${data.newModels[i].vehicles.photoURLs}" class="mx-auto d-block">
        </div>
        <div class="card-body ps-5 pe-5 pt-3 pb-3">
           <p>${data.newModels[i].vehicles.year}</p>
           <h3 class="text-primary">${data.newModels[i].vehicles.maker} CR-V LX</h3>
           <P>Lease for $267.47 per month <i class="fa-solid fa-clock ps-1"></i></P>
        </div>
        <div class="card-footer bg-white d-flex justify-content-between align-items-center pt-3 pb-3 ps-5 pe-5">
            <div>
                <p>View All Offers <i class="fa-solid fa-circle-chevron-right ps-1"></i></p>
            </div>
            <div>
                <button type="button" class="btn btn-primary">Explore</button>
            </div>
        </div>
        </div>
            `)
        }
        }
      })
}
function favorites(){
    $.getJSON("favorites.json",(data)=>{
        console.log(data.vehicles);
        for(let i=0;i<data.vehicles.length;i++){
            if(i<=2){
          $(".cards-wraper01").append(`
          <div class="card card0">
          <div class="card-header d-flex align-items-center justify-content-between p-3 bg-primary text-white">
          <h4>Saved</h4>
          <i class="fa-regular fa-heart fs-3"></i>
      </div>
      <div class="card-body bg-light">
          <h3>2022 ${data.vehicles[i].year} ${data.vehicles[i].transmission} ${data.vehicles[i].trim}</h3>
          <p>${data.vehicles[i].transmission} ${data.vehicles[i].driveTrain}</p>
          <img src="${data.vehicles[i].photoURLs}" class="mx-auto d-block">
      </div>
      <div class="card-footer bg-white pt-4 pb-4 ps-5 pe-5">
          <div class="d-flex justify-content-between">
              <p>${data.vehicles[i].exteriorColor}</p>
              <p><i class="fa-solid fa-circle" style="color:${data.vehicles[i].extColorGeneric}"></i></p>
          </div>
          <div class="d-flex justify-content-between">
              <p>Black Leather Interior</p>
              <p><i class="fa-solid fa-circle"></i></p>
          </div>
          <div class="d-flex justify-content-between">
              <p>Your Price</p>
              <p class="text-dark">$${data.vehicles[i].yourPrice}</p>
          </div>
          <div class="d-flex justify-content-between">
              <p>Your Lease Payment</p>
              <p class="text-dark font">${data.vehicles[i].leasePayment}</p>
          </div>
          <div>
              <button type="button" class="btn btn-primary">View Details</button>
          </div>
          <div class="text-center p-3">
              <i class="fa-regular fa-trash-can fs-3 text-muted"></i>
          </div>
      </div>
      </div>
          `)
        }
        else{
            $(".cards-wraper02").append(`
            <div class="card card0">
            <div class="card-header d-flex align-items-center justify-content-between p-3 bg-primary text-white">
            <h4>Saved</h4>
            <i class="fa-regular fa-heart fs-3"></i>
        </div>
        <div class="card-body bg-light">
            <h3>2022 ${data.vehicles[i].year} ${data.vehicles[i].transmission} ${data.vehicles[i].trim}</h3>
            <p>${data.vehicles[i].transmission} ${data.vehicles[i].driveTrain}</p>
            <img src="${data.vehicles[i].photoURLs}" class="mx-auto d-block">
        </div>
        <div class="card-footer bg-white pt-4 pb-4 ps-5 pe-5">
            <div class="d-flex justify-content-between">
                <p>${data.vehicles[i].exteriorColor}</p>
                <p><i class="fa-solid fa-circle" style="color:${data.vehicles[i].extColorGeneric}"></i></p>
            </div>
            <div class="d-flex justify-content-between">
                <p>Black Leather Interior</p>
                <p><i class="fa-solid fa-circle"></i></p>
            </div>
            <div class="d-flex justify-content-between">
                <p>Your Price</p>
                <p class="text-dark">$${data.vehicles[i].yourPrice}</p>
            </div>
            <div class="d-flex justify-content-between">
                <p>Your Lease Payment</p>
                <p class="text-dark font">${data.vehicles[i].leasePayment}</p>
            </div>
            <div>
                <button type="button" class="btn btn-primary">View Details</button>
            </div>
            <div class="text-center p-3">
                <i class="fa-regular fa-trash-can fs-3 text-muted"></i>
            </div>
        </div>
        </div>
            `)
        }
        }
      })
}