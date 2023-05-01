document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal_open')) {
        if(document.querySelector('#' + event.target.getAttribute('data-modal'))) {
            document.querySelector('#' + event.target.getAttribute('data-modal')).classList.add('open')
        } else {
            alert('undefined modal')
        }
    }
    if (event.target.classList.contains('close_btn')) {
        event.target.closest('.open').classList.remove('open')
    }
})
document.addEventListener('keydown', function (event) {
    if(event.code.toLowerCase() === 'escape') {
        if(document.querySelector('.popup.open')) {
            document.querySelector('.popup.open').classList.remove('open')
        }
    }
})
let form = document.querySelector('.form')
// form.onsubmit = function (event){
//     event.preventDefault();
//     let data = {};
//     let inputs = Array.from(form.elements)
//     let haveError = true;
//     let errorText = 'где-то случилось ошибка';
//     let inputWithError = null;
//     inputs.forEach(function (item) {
//         if(item.value && item.tagName.toLowerCase() !== 'button'){
//             if(item.getAttribute('type') === 'checkbox' && item.checked) {
//                 data[item.name] = item.value
//             } else if(item.getAttribute('type') !== 'checkbox') {
//                 data[item.name] = item.value
//             }
//         }
//     })
//
//     if(document.querySelector('.--error')) {
//         document.querySelector('.--error').classList.remove('--error')
//     }
//     if(document.querySelector('.error-info')) {
//         document.querySelector('.error-info').remove()
//     }
//     if(!data.userName) {
//         errorText = 'Введите имя'
//         inputWithError = form.elements.userName
//     } else if(data.userName.length < 3) {
//         errorText = 'Введите корректное имя'
//         inputWithError = form.elements.userName
//     } else if(!data.tel) {
//         errorText = 'Введите телефон'
//         inputWithError = form.elements.tel
//     } else {
//         haveError = false
//         inputWithError = null
//     }
//     if(!haveError) {
//         form.style.display = 'none'
//         let thanks = document.createElement('div')
//         thanks.classList.add('form-submitted')
//         thanks.classList.add('form-submitted--success')
//         thanks.innerHTML = '<h2 class="apoinment__title">Мы вас записали!</h2>'
//         form.parentNode.appendChild(thanks)
//     } else {
//         if(document.querySelector(".error-info")) {
//             document.querySelector(".error-info").innerText = errorText
//         } else {
//             let error = document.createElement('p')
//             error.classList.add('error-info')
//             error.innerText = errorText
//             // form.insertBefore(error, inputs.find(function(item) {
//             //     return item.tagName.toLowerCase() === 'button' && item.getAttribute('type') === 'submit'
//             // }))
//             inputWithError.parentNode.appendChild(error)
//             inputWithError.classList.add('--error')
//
//         }
//     }
// }
document.addEventListener('input', function(event){
    let input = event.target;
    if(input.tagName.toLowerCase() === 'input' && input.getAttribute('type') === 'tel' ) {
        if(input.value.length === 1 && input.value !== '+') {
            input.value = '+' + input.value
        }
        if(input.value.length === 4) {
            input.value = input.value + " ("
        }
        if(input.value.length === 8) {
            input.value = input.value + ") "
        }
        if(input.value.length === 13 || input.value.length === 16) {
            input.value = input.value + "-"
        }
        if(input.value.length > 19) {
            input.value = input.value.slice(0,19)
        }
    }
})


