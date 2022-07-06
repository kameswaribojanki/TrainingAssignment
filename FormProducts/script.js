let products = [];
let index=0;
let total;
$('#form').submit((e) => {
    e.preventDefault();
    const product = {
        productName : $('#name').val(),
        quantity : $('#qty').val(),
        productCost : $('#cost').val()
    }
    if(product.productName == "" || product.productCost == ""){
        alert("please enter the data");
        return;
    }
    else if(!Number(product.productCost)){
        alert("please enter number");
        return;
    }
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    clearTableData();
    insertInToTable(products);
})

function insertInToTable(products){
    let totalPrice=0;
    for(let i=0; i<products.length; i++){
        productName = products[i].productName;
        quantity = products[i].quantity;
        productCost = products[i].productCost;
        $("table tbody").append(`
        <tr>
            <td>${i + 1}</td>
            <td>${productName}</td>
            <td class="td2"><input type="text" value="${quantity}" style="width:50px; padding:5px;text-align-center" class="quantity"></td>
            <td>${productCost}</td>
            <td class="total">${quantity * productCost}</td>
            <td><i class="fa-solid fa-trash deleteProduct"></i></td>
        </tr>
        `);
        totalPrice+=quantity * productCost;
        $("table tfoot td").text(totalPrice);
    }
}

$("table").on("click",".deleteProduct",(e)=>{
    e.preventDefault();
    $(event.target).parent().parent().remove();
    let index=$(event.target).parent().parent().index();
    products.splice(index,1);
    let total=$(".total").text();
    $("table tfoot td").text(total);
})

function clearTableData(){
    $("table tbody").empty();
}
$(".quantity").on("change",function(){
    console.log("change happends");
});