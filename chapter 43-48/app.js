function deleteRow(rId){
    var row = document.getElementById(rId)
    row.className = 'hidden'
}
function changePic(){
    var pic = document.getElementById('phone')
    pic.src = 'https://images.priceoye.pk/samsung-galaxy-s10-plus-pakistan-priceoye-odgk0.jpg'
}
function setPic(){
    var pic = document.getElementById('phone')
    pic.src = 'https://images.priceoye.pk/samsung-galaxy-s10-lite-pakistan-priceoye-fmbkz.jpg'
}
var start = 0
function increaseCount(){
    start += 1
    document.getElementById("count").innerHTML = start
}
function decreaseCount(){
    start -= 1
    document.getElementById("count").innerHTML = start
}