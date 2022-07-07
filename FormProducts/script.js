let products = [];
let index=0;
let total=0;

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
    else if(!Number(product.productCost)|| product.productCost.match(/^-/)){
        alert("please enter valid number");
        return;
    }
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
})

function insertInToTable(products){
    let totalPrice=0;
    for(let i=0; i<products.length; i++){
        productName = products[i].productName;
        quantity = products[i].quantity;
        productCost = products[i].productCost;
        $(".product-table tbody").append(`
        <tr>
            <td>${i + 1}</td>
            <td>${productName}</td>
            <td class="td2"><i class="fa-solid fa-minus"></i><input type="text" value="${quantity}" style="width:50px; padding:5px;text-align:center" class="quantity"><i class="fa-solid fa-plus"></i></td>
            <td>${productCost}</td>
            <td class="total">${quantity * productCost}</td>
            <td><i class="fa-solid fa-trash deleteProduct"></i></td>
        </tr>
        `);
        totalPrice+=quantity * productCost;
        $(".product-table tfoot td").text(totalPrice);
    }
}

$(".product-table").on("click",".deleteProduct",(e)=>{
    e.preventDefault();
    $(event.target).parent().parent().remove();
    let index=$(event.target).parent().parent().index();
    products.splice(index,1);
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
    if($(".product-table tbody").text()==""){
        $(".product-table tfoot td").text("");
    }
    if($(".cart-table tbody").text()==""){
        $(".cart-table tfoot td").text("");
    }
})

function clearTableData(){
    $(".product-table tbody").empty();
    $(".cart-table tbody").empty();
    
}
  
$(".product-table tbody").on("input","td .quantity",function(e){
    let utotal=0;
    let value=$(this).val();
    let index=$(event.target).parent().parent().index();
    for(let i=0;i<products.length;i++){
        if(index==i){
            products[i].quantity=value;
        }
    }
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
})

$(".product-table tbody").on("click","td .fa-plus",function(e){
    for(let i=0;i<products.length;i++){
        let index=$(event.target).parent().parent().index();
        if(index==i){
            products[i].quantity=parseInt(products[i].quantity)+1;
        }
    }
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
})

$(".product-table tbody").on("click","td .fa-minus",function(e){
    for(let i=0;i<products.length;i++){
        let index=$(event.target).parent().parent().index();
        if(index==i){
            products[i].quantity=parseInt(products[i].quantity)-1;
            if(products[i].quantity=="0"){
                $(event.target).parent().parent().remove();
                products.splice(index,1);
            }
        }
    }
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
    if($(".product-table tbody").text()==""){
        $(".product-table tfoot td").text("");
    }
    if($(".cart-table tbody").text()==""){
        $(".cart-table tfoot td").text("");
    }
})

function insertInToCart(products){
    let totalPrice=0;
    for(let i=0; i<products.length; i++){
        productName = products[i].productName;
        quantity = products[i].quantity;
        productCost = products[i].productCost;
        $(".cart-table tbody").append(`
        <tr>
            <td class="td2">${quantity}<i class="fa-solid fa-xmark"></i></td>
            <td>${productName}</td>
            <td class="total">${quantity * productCost}</td>
        </tr>
        `);
        totalPrice+=quantity * productCost;
        $(".cart-table tfoot td").text(totalPrice);
    }
}
