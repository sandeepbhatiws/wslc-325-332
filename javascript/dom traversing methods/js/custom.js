
document.querySelector('.parentNode').addEventListener('click',() => {
    var result = document.getElementById('main').parentNode;
    console.log(result);
})

document.querySelector('.parentElement').addEventListener('click',() => {
    var result = document.getElementById('main').parentElement;
    console.log(result);
})

document.querySelector('.childNodes').addEventListener('click',() => {
    var result = document.getElementById('main').childNodes;
    console.log(result);
})

document.querySelector('.children').addEventListener('click',() => {
    var result = document.getElementById('main').children;
    console.log(result);
})

document.querySelector('.firstChild').addEventListener('click',() => {
    var result = document.getElementById('main').firstChild.innerHTML;
    console.log(result);
})

document.querySelector('.firstElementChild').addEventListener('click',() => {
    var result = document.getElementById('main').firstElementChild.innerHTML;
    console.log(result);
})

document.querySelector('.lastChild').addEventListener('click',() => {
    var result = document.getElementById('main').lastChild;
    console.log(result);
})

document.querySelector('.lastElementChild').addEventListener('click',() => {
    var result = document.getElementById('main').lastElementChild;
    console.log(result);
})

document.querySelector('.nextElementSibling').addEventListener('click',() => {
    var result = document.getElementById('row1').nextElementSibling;
    console.log(result);
})

document.querySelector('.previousElementSibling').addEventListener('click',() => {
    var result = document.getElementById('row1').previousElementSibling;
    console.log(result);
})

document.querySelector('.closest').addEventListener('click',() => {
    var result = document.getElementById('row2').closest('.main');
    console.log(result);
})