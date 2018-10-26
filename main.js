var input = document.getElementById('input');
var ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
    if(e.target.nodeName === 'SPAN'){
        //delete list
        e.target.parentElement.remove();
        // console.log('span clicked');
    }
});

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
