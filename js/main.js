const form = document.querySelector('.content__form')
const inputEmail = document.querySelector('.content__form_input_text')
const btnSubmit = document.querySelector('.content__form_input_submit')
const btnDismiss = document.querySelector('.success__dismiss')

const errorModifier = 'content__form--error'
const mailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
btnSubmit.disabled = true


inputEmail.addEventListener('keyup', () => {
    const email = inputEmail.value
    const isValidEmail = mailValidationRegex.test(email)
    if (isValidEmail) {
        form.classList.remove(errorModifier)
        btnSubmit.disabled = false
    } else {
        form.classList.add(errorModifier)
        btnSubmit.disabled = true
    }
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.body.classList.add('with-overlay')
})

btnDismiss.addEventListener('click', () => {
    document.body.classList.remove('with-overlay')
    inputEmail.value = ''
    inputEmail.focus()
})