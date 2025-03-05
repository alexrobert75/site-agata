document.querySelectorAll('.toggleButton').forEach(function(button) {
    button.addEventListener('click', function() {
        var text = this.nextElementSibling;
        if (text.style.display === 'none') {
            text.style.display = 'block';
            this.textContent = '-';
        } else {
            text.style.display = 'none';
            this.textContent = '+';
        }
    });
});

let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')
let overL = document.getElementById('bikinfo');


link.addEventListener('click', function () {
  ul.classList.toggle('open')
})