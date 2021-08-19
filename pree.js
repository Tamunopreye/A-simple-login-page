const form = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.message-alert');
const Users = document.querySelector('#users');

form.addEventListener('click',onclick);

// This Function will pop out a warning if all inputfields are not filled
function onclick(e) {
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please fill in all Fields";

        setTimeout(()=>msg.remove(),2000)
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :
         ${emailInput.value}`));
        Users.appendChild(li);

        // Clear fields after a user has inserted values in the above field
        nameInput.value = '';
        emailInput.value = '';
    }
}
