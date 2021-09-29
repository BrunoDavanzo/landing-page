const contactForm = document.querySelector('.ContactUs')
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        
        if(xhr,this.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else{
            alert('something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));
})