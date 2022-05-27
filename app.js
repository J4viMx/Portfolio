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
        console.log(link)
        link.addEventListener('mouseover', function(){
            console.log(cursor.classList.add('mini'))
        });
        link.addEventListener('mouseout', function(){
            console.log(cursor.classList.remove('mini'))
        });
    })


})


