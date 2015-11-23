/**
 * Created by fish on 15/8/30.
 */

function Mover(obj){
    obj.style.boxShadow = "box-shadow: 4px 0 10px rgba(0, 30, 30, 0.9)"
}



function mOut(obj){
    obj.style.backgroundColor = "rgba(229, 229, 229, 0.25)"
}
function show() {
    document.getElementById("main1").style.display = "block";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "none";
    document.getElementById("main4").style.display = "none";
}
function show1() {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementById("main3").style.display = "none";
    document.getElementById("main4").style.display = "none";
}
function show2() {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "block";
    document.getElementById("main4").style.display = "none";
}
function show3() {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "none";
    document.getElementById("main4").style.display = "block";
}

