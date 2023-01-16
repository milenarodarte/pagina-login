const buttonLogIn = document.createElement('button')
buttonLogIn.setAttribute('class', 'button1')
buttonLogIn.innerText = 'LogIn'

const modal = document.querySelector('.modal')
const navHeader = document.querySelector('.header')
navHeader.appendChild(buttonLogIn)

const modalResetPassword = document.querySelector('.modalResetPassword')

const buttonResetPassword = document.querySelector('.passwordReset')

const buttonEnviar = document.querySelector('.button2')
const buttonClose = document.querySelector('.buttonClose')

function addEventClickToLogInPage () {
    
    buttonLogIn.addEventListener('click', function(e){

        const el = e.target
        if (el.classList.contains('button1')){
           modal.setAttribute('class', 'modal show-modal')
        }
    })
    
}
addEventClickToLogInPage()

function addEventClickToResetButtons (){

    buttonResetPassword.addEventListener('click', function(e){

        const el = e.target
        if (el.classList.contains('passwordReset')){
           modalResetPassword.setAttribute('class', 'modalResetPassword show-modal')
        }
    })
    buttonClose.addEventListener('click', function(e){

        const el = e.target
        if (el.classList.contains('buttonClose')){
           modalResetPassword.setAttribute('class', 'modalResetPassword')
        }
    })
    buttonEnviar.addEventListener('click', function(e){

        const el = e.target
        if (el.classList.contains('button2')){
           modalResetPassword.setAttribute('class', 'modalResetPassword')
        }
    })


}
addEventClickToResetButtons()
// function creatingPageModal () {
//     const bodyModal = document.querySelector('.initial')
    
//     const modal = document.createElement('div')
//     modal.setAttribute('class', 'modal')

//     const modalContainer=document.createElement('div')
//     modalContainer.setAttribute('class', 'modal-container')

//     const modalLeft = document.createElement('div')
//     modalLeft.setAttribute('class', 'modal-container-left')

//     const modalRight = document.createElement('div')
//     modalRight.setAttribute('class', 'modal-container-right')

//     bodyModal.appendChild(modal)
//     modal.append(modalContainer)
//     modalContainer.append(modalLeft,modalRight)
    
// }
// addEventClickToLogInButton()