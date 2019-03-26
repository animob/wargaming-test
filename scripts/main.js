for (var i = 0; i < document.getElementsByClassName('menu-button').length; i++) {
    document.getElementsByClassName('menu-button')[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}


var btn = document.querySelector(".menu-button");
var tagItem = document.getElementsByClassName("tag-item");

for (var i = 0; i < tagItem.length; i++) {
    tagItem[i].addEventListener("click", function() { 
        var x = document.getElementsByClassName("tag-item");
        Array.prototype.forEach.call(x, function(el) {
            el.classList.remove("active");
        });
        this.classList.add('active');
        btn.classList.remove("active");
    });
}