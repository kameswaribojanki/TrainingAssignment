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
    else if(!Number(product.quantity)|| product.quantity.match(/^-/)){
        alert("please enter valid number");
        return;
    }
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    render();
})

function insertInToTable(products){
    let totalPrice=0;
    let totalQuantity=0;
    for(let i=0; i<products.length; i++){
        productName = products[i].productName;
        quantity = products[i].quantity;
        productCost = Math.round(products[i].productCost);
        $(".product-table tbody").append(`
        <tr>
            <td>${i + 1}</td>
            <td>${productName}</td>
            <td class="td2"><i class="fa-solid fa-minus"></i><input type="text" value="${quantity}" class="quantity"><i class="fa-solid fa-plus"></i></td>
            <td>${productCost}</td>
            <td class="total">${quantity * productCost}</td>
            <td><i class="fa-solid fa-trash deleteProduct"></i></td>
        </tr>
        `);
        totalPrice+=quantity * productCost;
        $(".product-table tfoot .td1").text(totalPrice);
        totalQuantity+=parseInt(quantity);
        $(".product-table tfoot .td2").text(totalQuantity);
    }
}

$(".product-table").on("click",".deleteProduct",(e)=>{
    e.preventDefault();
    if (confirm('Are you sure you want to delete the record')) {
        $(event.target).parent().parent().remove();
        let index=$(event.target).parent().parent().index();
        products.splice(index,1);
        render();
        if($(".product-table tbody").text()==""){
            $(".product-table tfoot td").text("");
        }
        if($(".cart-table tbody").text()==""){
            $(".cart-table tfoot td").text("");
        }
      } else {
        
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
            if(!Number(value) || value.match(/^-/) || value.includes(".")){
                alert("negative and float values are not allowed");
            }
            else{
            products[i].quantity=value;
            }
        }
    }
    render();
})

$(".product-table tbody").on("click","td .fa-plus",function(e){
    for(let i=0;i<products.length;i++){
        let index=$(event.target).parent().parent().index();
        if(index==i){
            products[i].quantity=parseInt(products[i].quantity)+1;
        }
    }
    render();
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
    render();
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
        productCost = Math.round(products[i].productCost);
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

function render(){
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
}
