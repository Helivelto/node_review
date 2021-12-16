const pt1 = document.querySelector('#pt1-cad')
const pt2 = document.querySelector('#pt2-cad')
const go_btn = document.querySelector('#avancar')


const pass = document.querySelector('#password-input')
const confirmPass = document.querySelector('#confirm_password')

const email = document.querySelector('#user_email')
const nome_user = document.querySelector('#nome_usuario')



go_btn.addEventListener('click', function(e){
    let  validacao = 0

    if(validator.isEmpty(nome_user.value)){
        nome_user.classList.add('border_red')
    }
    else{
        nome_user.classList.add('inputValid')
        validacao++
    }


    if (validator.isEmail(email.value) == false || validator.isEmpty(email.value)) {
        email.classList.add('border_red')
    }
    else{
        email.classList.add('inputValid')
        validacao++
    }


    if(confirmPass.value == '' && pass.value == '' || pass.value != confirmPass.value){
        confirmPass.classList.add('border_red')
        pass.classList.add('border_red')
    } 
    else{
        pass.classList.add('inputValid')
        confirmPass.classList.add('inputValid')
        validacao++
    }


    if(validacao != 3){
        alert('Preencha as informações corretamente!')
        validacao = 0
    } else {
        pt1.style.display = 'none'
        pt2.style.display = 'block'
    }
})
