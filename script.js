const input = document.querySelectorAll('input');
const submit = document.getElementById('submit');
const errorTxt = document.querySelectorAll('.error');


function validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

    input[0].addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length <= 0) {
            input[0].classList.add('active');
            errorTxt[0].style.display = 'block';
        } else {
            input[0].classList.remove('active');
            errorTxt[0].style.display = 'none';
        }
    });

    input[1].addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length <= 0) {
            input[1].classList.add('active');
            errorTxt[1].style.display = 'block';
        } else {
            input[1].classList.remove('active');
            errorTxt[1].style.display = 'none';
        }
    });

    input[2].addEventListener('input', (e) => {
        const value = e.target.value;
        if (!validateEmail(value)) {
            input[2].classList.add('active');
            errorTxt[2].style.display = 'block';
        } else {
            input[2].classList.remove('active');
            errorTxt[2].style.display = 'none';
        }
    });

    input[3].addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length <= 0) {
            input[3].classList.add('active');
            errorTxt[3].style.display = 'block';
        } else {
            input[3].classList.remove('active');
            errorTxt[3].style.display = 'none';
        }
    });

   


