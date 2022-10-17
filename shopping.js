window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        showData(jsondata); 
    };
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
	console.log(Object.keys(data).length);
    var clothKeys = Object.keys(data);
    for(var i= 0 ; i < clothKeys.length ; i++){
        var showLayer = document.getElementById("bx"+i);
        console.log(showLayer);
        var brandTopic = document.createElement("p");
        brandTopic.innerHTML = data[clothKeys[i]].brandname ;
        brandTopic.id = "brandTopic";
        var brandPic = document.createElement("img");
        brandPic.src  = "pic/top"+(i+1)+".jpg";
        brandPic.id = "brandPic";
        // brandPic.src = data[clothKeys[i]].pic;
        var brandPrice = document.createElement("p");
        brandPrice.innerHTML = "Price : " + data[clothKeys[i]].price;
        brandPrice.id = "brandPrice";
        var buyButton = document.createElement("button");
        buyButton.innerHTML = "Buy";
        buyButton.id = "buyButton";
        showLayer.appendChild(brandTopic);
        showLayer.appendChild(brandPic);
        showLayer.appendChild(brandPrice);
        showLayer.appendChild(buyButton);

        buyButton.onclick = buyButtonClick;
       
    }

    function buyButtonClick(){
        alert("Added to cart");
    }
}

