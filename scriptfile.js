function addelem(){
    var str =document.getElementById("text").value;
    const h2Elem = document.createElement('h2');
    const div2 = document.querySelector('.secondDiv');
    h2Elem.innerHTML = str;
    div2.append(h2Elem);
}