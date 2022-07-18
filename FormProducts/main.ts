let products:any[] = [];
let index:number=0;
let total:number=0;

$('#form').submit((e):void => {
    e.preventDefault();
    const product:{productName:any, quantity:any, productCost:any} = {
        productName : $('#name').val(),
        quantity : $('#qty').val(),
        productCost : $('#cost').val()
    }
    if(product.productName == "" || product.productCost == ""){
        alert("please enter the data");
        return;
    }
    else if(product.productCost<0){
        alert("please enter valid number");
        return;
    }
    else if(product.quantity<0){
        alert("please enter valid number");
        return;
    }
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    render();
})

function insertInToTable(products):void{
    let totalPrice:number=0;
    let totalQuantity:number=0;
    for(let i=0; i<products.length; i++){
        let productName:string = products[i].productName;
        let quantity:number = products[i].quantity;
        let productCost:number = Math.round(products[i].productCost);
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
        totalQuantity+=quantity;
        $(".product-table tfoot .td2").text(totalQuantity);
    }
}

$(".product-table").on("click",".deleteProduct",(e)=>{
    e.preventDefault();
    $(event.target).parent().parent().remove();
    let index:number=$(event.target).parent().parent().index();
    products.splice(index,1);
    render();
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
  
// $(".product-table tbody").on("input","td .quantity",function(e){
//     let utotal:number=0;
//     let value=$(this).val();
//     let gb:number =parseInt(value);
//     let index=$(event.target).parent().parent().index();
//     for(let i=0;i<products.length;i++){
//         if(index==i){
//             if(!Number(value) || value.match(/^-/) || value.includes(".")){
//                 alert("negative and float values are not allowed");
//             }
//             else{
//             products[i].quantity=value;
//             }
//         }
//     }
//     render();
// })

// // $(".product-table tbody").on("click","td .fa-plus",function(e){
// //     for(let i=0;i<products.length;i++){
// //         let index=$(event.target).parent().parent().index();
// //         if(index==i){
// //             products[i].quantity=parseInt(products[i].quantity)+1;
// //         }
// //     }
// //     render();
// // })

// // $(".product-table tbody").on("click","td .fa-minus",function(e){
// //     for(let i=0;i<products.length;i++){
// //         let index=$(event.target).parent().parent().index();
// //         if(index==i){
// //             products[i].quantity=parseInt(products[i].quantity)-1;
// //             if(products[i].quantity=="0"){
// //                 $(event.target).parent().parent().remove();
// //                 products.splice(index,1);
// //             }
// //         }
// //     }
// //     render();
// //     if($(".product-table tbody").text()==""){
// //         $(".product-table tfoot td").text("");
// //     }
// //     if($(".cart-table tbody").text()==""){
// //         $(".cart-table tfoot td").text("");
// //     }
// // })

function insertInToCart(products){
    let totalPrice=0;
    for(let i=0; i<products.length; i++){
        let productName:string = products[i].productName;
        let quantity:number = products[i].quantity;
        let productCost:number = Math.round(products[i].productCost);
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

function render():void{
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
}
