const ButtonPopsw = document.querySelector(".Btn-Header")
const PopswUl = document.querySelector(".ul-header")

ButtonPopsw.addEventListener('click',() => {
    if( PopswUl.style.display == "none"){
        PopswUl.style.display = "block"
    }else{
        PopswUl.style.display = "none"
    }
});


