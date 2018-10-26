var input = document.getElementById('input');
var ul = document.querySelector('ul');

input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        var teks = input.value;
        //buat element list untuk ditambah ke dalam unordered list
        var li = document.createElement('li');
        li.innerHTML = '<span>X</span> ' + teks;        
        ul.appendChild(li);
        input.value = '';
    }
});

var lists = document.querySelectorAll('span');

lists.forEach(list => list.addEventListener('click', function(e){
    // console.log(this.parentElement);
    this.parentElement.remove();
}));