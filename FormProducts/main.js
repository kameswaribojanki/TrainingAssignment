var products = [];
var index = 0;
var total = 0;
$('#form').submit(function (e) {
    e.preventDefault();
    var product = {
        productName: $('#name').val().toString(),
        quantity: Number($('#qty').val()),
        productCost: Number($('#cost').val())
    };
    if (product.productName == "" || product.productCost == Number("")) {
        alert("please enter the data");
        return;
    }
    else if (product.productCost < 0 || !(Number(product.productCost))) {
        alert("please enter valid number");
        return;
    }
    else if (product.quantity < 0 || !(Number(product.quantity))) {
        alert("please enter valid number");
        return;
    }
    products.push(product);
    $('#name').val("");
    $('#cost').val("");
    render();
});
function insertInToTable(products) {
    var totalPrice = 0;
    var totalQuantity = 0;
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].productName;
        var quantity = products[i].quantity;
        var productCost = Math.round(products[i].productCost);
        $(".product-table tbody").append("\n        <tr>\n            <td>".concat(i + 1, "</td>\n            <td>").concat(productName, "</td>\n            <td class=\"td2\"><i class=\"fa-solid fa-minus\"></i><input type=\"text\" value=\"").concat(quantity, "\" class=\"quantity\"><i class=\"fa-solid fa-plus\"></i></td>\n            <td>").concat(productCost, "</td>\n            <td class=\"total\">").concat(quantity * productCost, "</td>\n            <td><i class=\"fa-solid fa-trash deleteProduct\"></i></td>\n        </tr>\n        "));
        totalPrice += quantity * productCost;
        $(".product-table tfoot .td1").text(totalPrice);
        totalQuantity += quantity;
        $(".product-table tfoot .td2").text(totalQuantity);
    }
}
$(".product-table").on("click", ".deleteProduct", function (e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete the record')) {
        $(event.target).parent().parent().remove();
        var index_1 = $(event.target).parent().parent().index();
        products.splice(index_1, 1);
        render();
        if ($(".product-table tbody").text() == "") {
            $(".product-table tfoot td").text("");
        }
        if ($(".cart-table tbody").text() == "") {
            $(".cart-table tfoot td").text("");
        }
    }
    else {
    }
});
function clearTableData() {
    $(".product-table tbody").empty();
    $(".cart-table tbody").empty();
}
$(".product-table tbody").on("input", "td .quantity", function (e) {
    console.log($(this).val());
    var utotal = 0;
    var value = Number($(this).val());
    var index = $(event.target).parent().parent().index();
    for (var i = 0; i < products.length; i++) {
        if (index == i) {
            if (value <= 0 || !(Number(value))) {
                alert("please enter positive valid number");
            }
            else {
                products[i].quantity = value;
            }
        }
    }
    render();
});
$(".product-table tbody").on("click", "td .fa-plus", function (e) {
    e.preventDefault();
    console.log("plus");
    for (var i = 0; i < products.length; i++) {
        var index_2 = $(event.target).parent().parent().index();
        if (index_2 == i) {
            products[i].quantity = parseInt(products[i].quantity) + 1;
        }
    }
    render();
});
$(".product-table tbody").on("click", "td .fa-minus", function (e) {
    e.preventDefault();
    console.log("minus");
    for (var i = 0; i < products.length; i++) {
        var index_3 = $(event.target).parent().parent().index();
        if (index_3 == i) {
            products[i].quantity = parseInt(products[i].quantity) - 1;
            if (products[i].quantity == "0") {
                $(event.target).parent().parent().remove();
                products.splice(index_3, 1);
            }
        }
    }
    render();
    if ($(".product-table tbody").text() == "") {
        $(".product-table tfoot td").text("");
    }
    if ($(".cart-table tbody").text() == "") {
        $(".cart-table tfoot td").text("");
    }
});
function insertInToCart(products) {
    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].productName;
        var quantity = products[i].quantity;
        var productCost = Math.round(products[i].productCost);
        $(".cart-table tbody").append("\n        <tr>\n            <td class=\"td2\">".concat(quantity, "<i class=\"fa-solid fa-xmark\"></i></td>\n            <td>").concat(productName, "</td>\n            <td class=\"total\">").concat(quantity * productCost, "</td>\n        </tr>\n        "));
        totalPrice += quantity * productCost;
        $(".cart-table tfoot td").text(totalPrice);
    }
}
function render() {
    clearTableData();
    insertInToTable(products);
    insertInToCart(products);
}
