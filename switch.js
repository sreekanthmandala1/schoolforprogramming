var categories = ["Select a Category", "Electronics", "Fashion"];
var electronics = ["Select Electronic Product", "Earpods", "JBL Speaker"];
var fashion =["Select Fashion Product", "Shirt", "Jeans"];

var data = [
    {Name:"Earpods", Price:4500.55, Photo:"../Images/earpods.jpg"},
    {Name:"JBL Speaker", Price:6000.55, Photo:"../Images/jblspeaker.jpg"},
    {Name:"Shirt", Price:2000.33, Photo:"../Images/shirt.jpg"},
    {Name:"Jeans", Price:3000.44, Photo:"../Images/jeans.jpg"}
];
var cartItems = [];
var cartItem = {
    Name:"",
    Price:0,
    Photo:""
};
 function bodyload(){
            for(var item of categories) {
                var option = document.createElement("option");
                option.text = item;
                option.value= item;
                document.getElementById("lstCategories").appendChild(option);
            }
        }
        function CategoryChanged(){
            var categoryName = document.getElementById("lstCategories").value;
            var lstProducts = document.getElementById("lstProducts");
            function LoadProducts(collection){
                lstProducts.innerHTML="";
                for(var item of collection){
                    option = document.createElement("option");
                    option.text=item;
                    option.value=item;
                    lstProducts.appendChild(option);
                }
            }
            switch(categoryName){
                case "Electronics":
                LoadProducts(electronics);
                break;
                case "Fashion":
                LoadProducts(fashion);
                break;
                default:
                lstProducts.innerHTML="";
                break;
            }
        }
        var searchResult=[]; //[0].Name, [0].Price, [0].Photo
        function ProductChanged(){
            var productName = document.getElementById("lstProducts").value;
            searchResult = data.filter(function(product){return product.Name==productName});
            document.getElementById("prodName").innerHTML = searchResult[0].Name;
        }