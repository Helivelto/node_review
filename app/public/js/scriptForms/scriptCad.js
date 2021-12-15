const pt1 = document.querySelector('#pt1-cad')
const pt2 = document.querySelector('#pt2-cad')
const go_btn = document.querySelector('#avancar')

const pass = document.querySelector('#password-input')
const confirmPass = document.querySelector('#confirm_password')



go_btn.addEventListener('click', function(){
    if(confirmPass.value == '' && pass.value == '' || pass.value != confirmPass.value){
        alert('algo deu errado')
    } 
    else{
        pt1.style.display = 'none'
        pt2.style.display = 'block'
    }
})
