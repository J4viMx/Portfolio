document.addEventListener('DOMContentLoaded', function(){
    const body = document.querySelector('body');
    body.addEventListener('mousemove',function(e){
        let clientX = e.clientX
        let clientY = e.clientY
    const cursor = document.getElementById('cursor');
        cursor.style.left=(clientX - 25) + 'px'
        cursor.style.top=(clientY - 25) + 'px'
    })

    const links = document.querySelectorAll('.a')
    links.forEach(link => {
        link.addEventListener('mouseover', function(){
            cursor.classList.add('mini')
        });
        link.addEventListener('mouseout', function(){
            cursor.classList.remove('mini')
        });
    })
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener('mouseover', function(){
            cursor.classList.add('mini')
        });
        button.addEventListener('mouseout', function(){
            cursor.classList.remove('mini')
        });
    })
    const redes = document.querySelectorAll('.redes-sociales div')
    redes.forEach(red => {
        red.addEventListener('mouseover', function(){
            cursor.classList.add('mini')
        });
        red.addEventListener('mouseout', function(){
            cursor.classList.remove('mini')
        });
    })





        /* 3d animation */
    const Texts = [
        'HTML', 'CSS', 'JAVASCRIPT',
        'SASS', 'Bootstrap', 'REACT.JS',
        'VUE.JS', 'Node.js',
        'Express', 'MYSQL', 'Photoshop',
        'Adobe XD', 'GIT', 'GitHub', 'SCRUM'
    ];

    if( screen.width < 768){
        var tagCloud = TagCloud('.Sphere', Texts, {
            radius: 175,
            maxSpeed: 'fast',
            initSpeed: 'normal',
            direction: 135,
            keep: true
        });
    } 

    
    if( screen.width >768){
        var tagCloud = TagCloud('.Sphere', Texts, {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'normal',
            direction: 135,
            keep: true
        });
    } 

    


    var color = 'white';
    document.querySelector('.Sphere').style.color = color;


    

})


function github(){
    window.open('https://github.com/J4viMx', '_blank');
}
function twitter(){
    window.open('https://twitter.com/J4viMx', '_blank');
}
function linkedin(){
    window.open('https://www.linkedin.com/in/javimx/', '_blank');
}


const header = document.querySelector('.header')
const opcionesMenu = document.querySelectorAll('.header .li')
function menu (){
    header.classList.toggle('header-activate')
    console.log(opcionesMenu)

    opcionesMenu.forEach(opcionMenu => {
            opcionMenu.classList.toggle('activate-opciones')
        });
}