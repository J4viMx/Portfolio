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





        /* 3d animation */
    const Texts = [
        'HTML', 'CSS', 'JAVASCRIPT',
        'SASS', 'Bootstrap', 'REACT.JS',
        'VUE.JS', 'Node.js',
        'Express', 'MYSQL', 'Photoshop',
        'Adobe XD', 'GIT', 'GitHub', 'SCRUM'
    ];

    var tagCloud = TagCloud('.Sphere', Texts, {

        radius: 250,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        direction: 135,
        keep: true

    });

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



