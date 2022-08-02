colour=["white","black","blue","purple","green"];
function myfunction(){
    var obj = document.getElementById("body");
    let random=Math.floor(Math.random()*colour.length);
    obj.style.setProperty("background-color", colour[random]);
}