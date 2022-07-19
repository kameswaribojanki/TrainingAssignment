var items = [];
var indexid;
$(".btn").on("click", function (event) {
    event.preventDefault();
    var btnValue = $(this).text();
    var inputvalue = $(".input-item").val().toString();
    if (inputvalue == "") {
        alert('Please enter value');
        return;
    }
    if (btnValue.toLowerCase() == "store") {
        addItemsToList(inputvalue);
    }
    else {
        updateItemsInList();
    }
});
function addItemsToList(value) {
    items.push(value);
    readArrData(items);
}
$(".item-list").on("click", ".li-item", function (event) {
    event.preventDefault();
    var value = $(this).text();
    indexid = items.indexOf(value);
    $(".input-item").val(value);
    $(".btn").text("update");
});
$(".item-list").on("click", ".remove", function () {
    if (confirm('Are you sure you want to delete the record')) {
        var currentIndex = items.indexOf($(this).parent("li").text());
        $(this).parent("li").remove();
        items.splice(currentIndex, 1);
    }
    else {
    }
});
function updateItemsInList() {
    var value = $(".input-item").val().toString();
    items[indexid] = value;
    readArrData(items);
    $(".btn").text("Store");
}
function readArrData(items) {
    $(".item-list").empty();
    for (var i = 0; i < items.length; i++) {
        $(".item-list").append("<li class=\"\"><span class=\"li-item\">".concat(items[i], "</span> <span class=\"remove\"><i class=\"fa-solid fa-trash\"></i></span></li>"));
    }
    $(".input-item").val("");
}
