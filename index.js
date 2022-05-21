var string = "";
var noOfButtons = document.querySelectorAll('.btn').length;

for (var i=0; i<noOfButtons; i++){
    document.querySelectorAll('.btn')[i].addEventListener('click', (event)=>{
        if (event.target.innerHTML === '='){
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if(event.target.innerHTML === 'C'){
            string = "";
            document.querySelector('.input').value = string;
        }
        else{
            string = string + event.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
}
