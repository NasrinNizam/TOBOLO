let first_page         = document.querySelector('.first_page')
let welcomePage_video  = document.querySelector('.welcomePage_video')
let content            = document.querySelector('.content')
let heading            = document.querySelector('.heading')
let start              = document.querySelector('.start')
let player_one_name    = document.querySelector('.player_one_name')
let nameTwo            = document.querySelector('.nameTwo')
let nameOne            = document.querySelector('.nameOne')
let buttonTwo          = document.querySelector('.buttonTwo')
let player_two_name    = document.querySelector('.player_two_name')
let buttonOne          = document.querySelector('.buttonOne')
let error              = document.querySelector('.error')
let player_one_number  = document.querySelector('.player_one_number')
let player_one         = document.querySelector('.player_one')
let input_one          = document.querySelector('.input_one')
let number_one         = document.querySelector('.number_one')
let player_two_number  = document.querySelector('.player_two_number')
let player_two         = document.querySelector('.player_two')
let input_two          = document.querySelector('.input_two')
let number_two         = document.querySelector('.number_two')
let show               = document.querySelector('.show')
let show1              = document.querySelector('.show1')
let error1             = document.querySelector('.error1')
let error2             = document.querySelector('.error2')
let error3             = document.querySelector('.error3')
let winner             = document.querySelector('.winner')
let show2              = document.querySelector('.show2')
let tryButton          = document.querySelector('.tryButton')
let i                  = 0
let n                  = 4


start.addEventListener('click' , ()=>{
                player_one_name.style       = 'display:inline-flex; flex-direction:column;'
                first_page.style            = 'display:none;'
})

buttonOne.addEventListener('click' , ()=>{
            if(nameOne.value==''){
                error.innerHTML             = 'please, insert your name first!'
        }else{
                player_one_name.style       = 'display:none;'
                player_two_name.style       = 'display:inline-flex'
    }
})

buttonTwo.addEventListener('click' , ()=>{
            if(nameTwo.value == ''){
                error1.innerHTML            = 'please, insert your name first!'
        }else{
                player_two_name.style       = 'display:none;'
                player_one_number.style     = 'display:inline-flex;'
                show.innerHTML              = nameOne.value
    }
})

number_one.addEventListener('click' , ()=>{
            if(input_one.value == ''){
                error2.innerHTML            = 'enter a number please!'
        }else{
            if(input_one.value>10){
                error2.innerHTML            = 'number must be less than 11'
                input_one.value             = ''
        }else{
                player_one_number.style     = 'display:none;'
                player_two_number.style     = 'display:inline-flex;'
                show1.innerHTML             = nameTwo.value  
        }
    }
})


number_two.addEventListener('click' , ()=>{
                if(input_two.value ==''){
                   error3.innerHTML         = 'input a number please!'
           }else{
                if(input_two.value > 11){
                   error3.innerHTML         = 'number should be less than 11'
                   input_two.value          = ''

           }else{
                    error3.innerHTML        = ''

                if(input_two.value == input_one.value){
                    player_two_number.style = 'display:none;'
                    winner.style            = 'display:inline-flex;'
                    show2.innerHTML         = 'congratulations ! ' + '<br>' + nameTwo.value + '  is the winner !'

                    tryButton.addEventListener('click' , ()=>{
                        player_one_name.style = 'display:inline-flex;'
                        nameOne.value    = ''
                        nameTwo.value    = ''
                        input_one.value  = ''
                        input_two.value  = ''
                        error.innerHTML  = ''
                        error1.innerHTML = ''
                        error2.innerHTML = ''
                        error3.innerHTML = ''
                    })
            }else{
                i++
                if(i==5){
                    player_two_number.style = 'display:none;'
                    winner.style            = 'display:inline-flex;'
                    show2.innerHTML         = 'congratulations ! ' + '<br>' + nameOne.value + '  is the winner !' 

                    tryButton.addEventListener('click' , ()=>{
                        player_one_name.style = 'display:inline-flex;'
                        nameOne.value    = ''
                        nameTwo.value    = ''
                        input_one.value  = ''
                        input_two.value  = ''
                        error.innerHTML  = ''
                        error1.innerHTML = ''
                        error2.innerHTML = ''
                        error3.innerHTML = ''
                    })
                }else{
                    error3.innerHTML        = 'Opps! Wrong answer.' + '<br>' + 'chance remaining : ' + n--
                    input_two.value         = ''
                }
                if(i==1){
                    error3.style            = 'color:darkgreen;'
                }
                else if(i==2){
                    error3.style            = 'color:limegreen;'
                }
                else if(i==3){
                    error3.style            = 'color:orange;'
                }
                else if(i==4){
                    error3.style            = 'color:red;'
                }
                        
            }
        }
    }
})





