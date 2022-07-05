let products = [];

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
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    clearTableData();
    insertInToTable(products);
})

function insertInToTable(products){
    for(let i=0; i<products.length; i++){
        productName = products[i].productName;
        quantity = products[i].quantity;
        productCost = products[i].productCost;
        $("table tbody").append(`
        <tr>
            <td>${i + 1}</td>
            <td>${productName}</td>
            <td>${quantity}</td>
            <td>${productCost}</td>
        </tr>
        `);
    }
}

function clearTableData(){
    $('table tbody').empty();
}
