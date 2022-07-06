
$("button").click(function () {
    $("button").toggleClass("custom-btn");
  });
  $("button").click(function () {
    $("buttton").toggleClass("custom-btn");
  });
customQuotes();
function customQuotes(){
  $.getJSON("favorites.json",(data)=>{
    console.log(data.vehicles);
    for(let i=0;i<data.vehicles.length;i++){
      $(".card").append(`
      <div class="card-header d-flex align-items-center justify-content-between p-3 bg-primary text-white">
      <h4>Custom Lease</h4>
      <i class="fa-solid fa-clipboard-check fs-3"></i>
  </div>
  <div class="card-body bg-light">
      <h3>2022 ${data.vehicles[i].year} ${data.vehicles[i].transmission} ${data.vehicles[i].trim}</h3>
      <p>CVT AWD</p>
      <img src="${data.vehicles[i].photoURLs}" class="mx-auto d-block">
  </div>
  <div class="card-footer bg-white pt-4 pb-4 ps-5 pe-5">
      <div class="d-flex justify-content-between">
          <p>Lunar Silver Metallic</p>
          <p class="dot1"></p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Black Leather Interior</p>
          <p class="dot2"></p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Your Price</p>
          <p class="text-dark">$32,525</p>
      </div>
      <div class="d-flex justify-content-between">
          <p>Your Lease Payment</p>
          <p class="text-dark font">$230.35</p>
      </div>
      <div>
          <button type="button" class="btn btn-primary">View Details</button>
      </div>
      <div class="text-center p-3">
          <i class="fa-regular fa-trash-can fs-3 text-muted"></i>
      </div>
  </div>
      `)
    }
  })
}