let x = ""
function makeElement(x){
    var p = document.createElement('p');
    document.getElementsByTagName('p');
    p.innerText = "hello world"
    p.id = x
    p.className = x
    p.style = "color:red"
    console.log(p)
}
makeElement("blue");