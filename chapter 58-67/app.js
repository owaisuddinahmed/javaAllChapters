 //question 1.1
 var ele = document.getElementById("main-content")
 //question 1.2
 var x= ele.childElementCount;
 //console.log(x)
 x=x*2
 for(var i=0;i<x;i++){

         console.log(ele.childNodes[i])
}



//question 1.3
for (var i=0;i<5;i++){
 var list = document.getElementById("main-content").childNodes;
 var nname = list[i].textContent
 
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nname)
h1.appendChild(h1text)
document.body.appendChild(h1);
}

//question 1.4
var inp = document.getElementById("first-name")
inp.value="Tulaib"

//question 1.5
var inp = document.getElementById("last-name")
inp.value="Ahmed"
var inp = document.getElementById("email")
inp.value="Tulluahsid@gmail.com"



//question 2.1
var first = document.getElementById("form-content");
var nytpe = first.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.2
var f = document.getElementById("lastName");
var nytpe = f.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.3
var f = document.getElementById("lastName");
f.textContent="Update Content"



//question 2.4
var a = document.getElementById("main-content")
ab = a.firstChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ab)
h1.appendChild(h1text)
document.body.appendChild(h1);

yz = a.lastChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(yz)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.6
var e = document.getElementById("email")
var ntype = e.parentNode.nodeType
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ntype)
h1.appendChild(h1text)
document.body.appendChild(h1);