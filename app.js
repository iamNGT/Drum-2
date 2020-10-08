// $(document).ready(function (){
//     $('#btn1').click( function () {
//         $('#sound1').ready()
//     });
// })


// let btn = document.querySelectorAll('.btn')
// console.log(btn)
// for(i=0;i< btn.length;i++){
//     btn[i].addEventListener('click',function (){
//         console.log(btn[i])
//     })
// }


//using the click event to play de sound


let btn1 = document.querySelector('#btn1')
let sound1 = document.querySelector('#sound1')

let mouseout = function(button) {
    button.addEventListener('mouseout',function (){
        button.classList.remove('btnhov')
    })
}


btn1.addEventListener('click', function (){
    sound1.play()
    btn1.classList.add('btnhov')
    mouseout(btn1)
})


let btn2 = document.querySelector('#btn2')
let sound2 = document.querySelector('#sound2')

btn2.addEventListener('click', function (){
    sound2.play()
    btn2.classList.add('btnhov')
    mouseout(btn2)
})

let btn3 = document.querySelector('#btn3')
let sound3 = document.querySelector('#sound3')

btn3.addEventListener('click', function (){
    sound3.play()
    btn3.classList.add('btnhov')
    mouseout(btn3)
})

let btn4 = document.querySelector('#btn4')
let sound4 = document.querySelector('#sound4')

btn4.addEventListener('click', function (){
    sound4.play()
    btn4.classList.add('btnhov')
    mouseout(btn4)
})

let btn5 = document.querySelector('#btn5')
let sound5 = document.querySelector('#sound5')

btn5.addEventListener('click', function (){
    sound5.play()
    btn5.classList.add('btnhov')
    mouseout(btn5)
})

let btn6 = document.querySelector('#btn6')
let sound6 = document.querySelector('#sound6')

btn6.addEventListener('click', function (){
    sound6.play()
    btn6.classList.add('btnhov')
    mouseout(btn6)
})

let btn7 = document.querySelector('#btn7')
let sound7 = document.querySelector('#sound7')

btn7.addEventListener('click', function (){
    sound7.play()
    btn7.classList.add('btnhov')
    mouseout(btn7)
})

//using the keydown event to play de sound

let remove = function(button) {
    button.classList.remove('btnhov')
}

document.addEventListener('keydown', function (e){
    if(String.fromCharCode(e.keyCode) == "A") {
        sound1.play()
        btn1.classList.add('btnhov')
        btn1.onkeydown = remove(btn1)
    }

    if(String.fromCharCode(e.keyCode) == "B") {
        sound2.play()
        btn2.classList.add('btnhov')
    }

    if(String.fromCharCode(e.keyCode) == "C") {
        sound3.play()
        btn3.classList.add('btnhov')
    }

    if(String.fromCharCode(e.keyCode) == "D") {
        sound4.play()
        btn4.classList.add('btnhov')
    }

    if(String.fromCharCode(e.keyCode) == "E") {
        sound5.play()
        btn5.classList.add('btnhov')
    }

    if(String.fromCharCode(e.keyCode) == "F") {
        sound6.play()
        btn6.classList.add('btnhov')
    }

    if(String.fromCharCode(e.keyCode) == "G") {
        sound7.play()
        btn7.classList.add('btnhov')
    }
})

