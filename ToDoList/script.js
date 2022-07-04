let items = [];
var indexid;
$(".btn").on("click", function (event) {
    event.preventDefault();
    var btnvalue = $(this).text();
    var inputvalue = $(".input-item").val();
    if(inputvalue==""){
   alert('Please enter value');
   return;
}
    if (btnvalue.toLowerCase() == "store") {
        addItemsToList(inputvalue);
    } else {
        updateItemsInList();
    }
});
function addItemsToList(value) {
    items.push(value);
    //$(".item-list").empty();
    readArrData(items);
    //$(".input-item").val("");
}

$(".item-list").on("click",function (event) {
    event.preventDefault();
    var value = $(event.target).text();
    indexid = items.indexOf(value);
    $(".input-item").val(value);
    $(".btn").text("update");
});
$(document).on("click", ".remove", function () {
        var currentIndex = items.indexOf($(this).parent(".li-item").text());
        $(this).parent(".li-item").remove();
        items.splice(currentIndex, 1);
      });
function updateItemsInList() {
    var value = $(".input-item").val();
    items[indexid] = value;
    //$(".item-list").empty();
    readArrData(items);
    $(".btn").text("Store");
    //$(".input-item").val("");
}
function readArrData(items) {
    $(".item-list").empty();
    for (let i = 0; i < items.length; i++) {
    $(".item-list").append(`<li class="li-item"><span>${items[i]}</span> <span class="remove"><i class="fa-solid fa-trash"></i></span></li>`);
    }
    $(".input-item").val("");
}