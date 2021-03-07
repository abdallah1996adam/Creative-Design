const btnAnimation = document.querySelectorAll('.story-btn')
console.log(btnAnimation);

btnAnimation.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})