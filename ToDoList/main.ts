let items:string[]=[];
var indexid:number;
$(".btn").on("click",function (event):void{
    event.preventDefault();
    var btnValue:string=$(this).text();
    var inputvalue:string= $(".input-item").val().toString();
    if(inputvalue==""){
        alert('Please enter value');
        return;
    }
    if (btnValue.toLowerCase() == "store") {
        addItemsToList(inputvalue);
    } else {
        updateItemsInList();
    }
})
function addItemsToList(value):void{
    items.push(value);
    readArrData(items);
}
$(".item-list").on("click",".li-item",function (event):void{
    event.preventDefault();
    var value:string = $(this).text();
    indexid = items.indexOf(value);
    $(".input-item").val(value);
    $(".btn").text("update");
});
$(".item-list").on("click", ".remove", function () {
    if (confirm('Are you sure you want to delete the record')) {
        var currentIndex:number = items.indexOf($(this).parent("li").text());
        $(this).parent("li").remove();
        items.splice(currentIndex, 1);
    } else {
        
    }
      });

function updateItemsInList():void{
    var value:string= $(".input-item").val().toString();
    items[indexid] = value;
    readArrData(items);
    $(".btn").text("Store");
}
function readArrData(items):void{
    $(".item-list").empty();
    for (let i = 0; i < items.length; i++) {
    $(".item-list").append(`<li class=""><span class="li-item">${items[i]}</span> <span class="remove"><i class="fa-solid fa-trash"></i></span></li>`);
    }
    $(".input-item").val("");
}