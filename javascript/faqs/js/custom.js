
const faqquestion = document.querySelectorAll('.faqquestion');


faqquestion.forEach((element,index) => {
    element.addEventListener('click',(event) => {
        faqquestion.forEach((e,i) => {
            // console.log(e.children[0].innerText);
            if(index == i){
                e.nextElementSibling.classList.toggle('display');
                e.children[0].innerText = '-';
            } else {
                e.nextElementSibling.classList.add('display');
                e.children[0].innerText = '+';
            }
        });
    })
})