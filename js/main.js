function show() {
    var food = ["appetizers", "ramen", "rice", "drinks", "desserts", "alcohol"];
    var category = event.target.innerHTML.toLowerCase();
    for(var i = 0; i < 6; i++) {
        if(category == food[i]){
            document.querySelector("." + category + "__row .menu__content").classList.toggle("no-height");
        }
    }
}