const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body')
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
    } 
    else if(e.target.id ==='yellow'){
        document.body.style.backgroundColor = "brown";
    }
    else if(e.target.id ==='white'){
        document.body.style.backgroundColor = "blue";
    }
    else if(e.target.id ==='blue'){
        document.body.style.backgroundColor = "orange";
    }
})
});