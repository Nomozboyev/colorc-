var random1=Math.floor(Math.random()*255+1)
var random2=Math.floor(Math.random()*255+1)
var random3=Math.floor(Math.random()*255+1)
var random_arrey1=Math.floor(Math.random()*6)
var random_arrey2=Math.floor(Math.random()*6)
var bg_text=document.querySelector('.window_text')
var btn_random=document.querySelector('.btn_random')
var arrey=['a','b','c','d','e','f'] 
var btn1=document.querySelector('.btn1')
var btn2=document.querySelector('.btn2')
var btn3=document.querySelector('.btn3')
var btn4=document.querySelector('.btn4')
var btn5=document.querySelector('.btn5')
var btn6=document.querySelector('.btn6')
var card1=document.querySelector('.card1')
var card2=document.querySelector('.card2')
var card3=document.querySelector('.card3')
var card4=document.querySelector('.card4')
var card5=document.querySelector('.card5')
var card6=document.querySelector('.card6')
var order=['order1','order2','order3','order4','order5','order6']
var order_random1=order[Math.floor(Math.random()*7)] 
var order_random2=order[Math.floor(Math.random()*7)] 
var order_random3=order[Math.floor(Math.random()*7)] 
var order_random4=order[Math.floor(Math.random()*7)] 
var order_random5=order[Math.floor(Math.random()*7)] 
var order_random6=order[Math.floor(Math.random()*7)] 

// start generator
function generation(a){
a.preventDefault()
if(random1>=100&&random2>=100){
    bg_text.textContent='color:[#'+random1+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';
}
else if (random1>=100&&random2<100&&random2>=10 )
{
    bg_text.textContent='color:[#'+random1+arrey[random_arrey1]+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
        card2.className=order_random2+' '+'card'+' '+'card2';
        card3.className=order_random3+' '+'card'+' '+'card3';
        card4.className=order_random4+' '+'card'+' '+'card4';
        card5.className=order_random5+' '+'card'+' '+'card5';
        card6.className=order_random6+' '+'card'+' '+'card6';

}
else if (random1>=100&&random2<10)
{
    bg_text.textContent='color:[#'+random1+arrey[random_arrey2]+ arrey[random_arrey1]+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
    card2.className=order_random2+' '+'card'+' '+'card2';
    card3.className=order_random3+' '+'card'+' '+'card3';
    card4.className=order_random4+' '+'card'+' '+'card4';
    card5.className=order_random5+' '+'card'+' '+'card5';
    card6.className=order_random6+' '+'card'+' '+'card6';
}
else if(random1<100&&random1>=10&&random2<10)
{
    bg_text.textContent='color:[#'+arrey[random_arrey1]+random1+arrey[random_arrey2]+arrey[random_arrey1]+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
    card2.className=order_random2+' '+'card'+' '+'card2';
    card3.className=order_random3+' '+'card'+' '+'card3';
    card4.className=order_random4+' '+'card'+' '+'card4';
    card5.className=order_random5+' '+'card'+' '+'card5';
    card6.className=order_random6+' '+'card'+' '+'card6';
}
else if( random1<100&&random1>=10&&random2<100&&random2>=10)
{
    bg_text.textContent='color:[#'+arrey[random_arrey2]+random1+arrey[random_arrey2]+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';
}
else if(random1<100&&random1>=10&&random2>=100){
    bg_text.textContent='color:[#'+arrey[random_arrey1]+random1+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';

}
else if( random1<10&&random2<10)
{
    bg_text.textContent='color:[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+arrey[random_arrey1]+arrey[random_arrey2]+random2+']';
    card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';


}
else if (random1<10&&random2<100&&random2>=10)
    {
        bg_text.textContent='color:[#'+arrey[random_arrey2]+arrey[random_arrey2]+random1+arrey[random_arrey1]+random2+']';
        card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';

    }
    else if( random1<10&&random2>=100){
        bg_text.textContent='color:[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+random2+']';
        card1.className= order_random1+' '+'card'+' '+'card1';
card2.className=order_random2+' '+'card'+' '+'card2';
card3.className=order_random3+' '+'card'+' '+'card3';
card4.className=order_random4+' '+'card'+' '+'card4';
card5.className=order_random5+' '+'card'+' '+'card5';
card6.className=order_random6+' '+'card'+' '+'card6';
    }
}
btn_random.addEventListener('click',generation)

// btn 1 uchun
function generation_answer1(answer1)
{
    // random 3/3 xonali 
    if(random1>=100&&random2>=100){
        answer1.preventDefault()
        return btn1.classList='card__btn'+' '+'bg-[#'+random1+random2+']'
    }
    // random 3/2 xonali
    else if (random1>=100&&random2<100&&random2>=10)
    {
        return btn1.classList='card__btn'+' '+'bg-[#'+random1+arrey[random_arrey1]+random2+']'
    }
      // random 3/1 xonali
      else if (random1>=100&&random2<10)
      {
          return btn1.classList='card__btn'+' '+'bg-[#'+random1+arrey[random_arrey2]+ arrey[random_arrey1]+random2+']'
      }
        // random 2/1 xolati
    else if(random1<100&&random1>=10&&random2<10)
    {
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random1+arrey[random_arrey2]+arrey[random_arrey1]+random2+']'

    }
    // random 2/2 xonali
    else if( random1<100&&random1>=10&&random2<100&&random2>=10)
    {
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random1+arrey[random_arrey2]+random2+']'
    }
   
     // random 2/3 xonali
     else if(random1<100&&random1>=10&&random2>=100){
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random1+random2+']'

    }
    // random 1/1 xonali
    else if( random1<10&&random2<10)
    {
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+arrey[random_arrey1]+arrey[random_arrey2]+random2+']'
    
    }
    // random 1/2 xolati
    else if (random1<10&&random2<100&&random2>=10)
    {
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+arrey[random_arrey2]+random1+arrey[random_arrey1]+random2+']'

    }
    
    // random 1/3 xonali
    else if( random1<10&&random2>=100){
        return btn1.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+random2+']'
    }
   
     
}
btn_random.addEventListener('click',generation_answer1)
// aniomation 1

function animation1 (an)
{
    an.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']'){ 
        card1.className=' animate__animated animate__heartBeat card card1'+' '+order_random1
        btn1.textContent="True"
        
}
   else{
    card1.className=' animate__animated animate__heartBeat card card1'+' '+order_random1
    btn1.textContent="True"


}
}
btn1.addEventListener('click', animation1)




// btn2 uchun
function generation_answer2(answer2)
{
    // random 3/3 xonali 
    if(random3>=100&&random2>=100){
        answer2.preventDefault()
    return btn2.classList='card__btn'+' '+'bg-[#'+random3+random2+']'
    }
      // random 3/2 xonali
      else if (random3>=100&&random2<100&&random2>=10)
      {
          return btn2.classList='card__btn'+' '+'bg-[#'+random3+arrey[random_arrey1]+random2+']'
      }
       // random 3/1 xonali
    else if (random3>=100&&random2<10)
    {
        return btn2.classList='card__btn'+' '+'bg-[#'+random3+arrey[random_arrey2]+ arrey[random_arrey1]+random2+']'
    }
     // random 2/1 xolati
     else if(random3<100&&random3>=10&&random2<10)
     {
         return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random3+arrey[random_arrey2]+arrey[random_arrey1]+random2+']'
 
     }
     // random 2/2 xonali
    else if( random2<100&&random3>=10&&random2<100&&random2>=10)
    {
        return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random3+arrey[random_arrey2]+random2+']'
    }
      
    // random 2/3 xonali
    else if(random3<100&&random3>=10&&random2>=100){
        return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random3+random2+']'

    }
    // random 1/3 xonali
    else if( random3<10&&random2>=100){
        return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+arrey[random_arrey2]+random3+random2+']'
    }
     // random 1/2 xolati
     else if (random3<10&&random2<100&&random2>=10)
     {
         return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+arrey[random_arrey2]+random3+arrey[random_arrey1]+random2+']'
 
     }
    
    
    // random 1/1 xonali
    else if( random3<10&&random2<10)
    {
        return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random3+arrey[random_arrey2]+arrey[random_arrey1]+random2+']'
    
    }
    else{
        return btn2.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random3+arrey[random_arrey2]+random2+']'

    }
}
btn_random.addEventListener('click',generation_answer2)
// animation 2
function animation2 (an2)
{
    an2.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']')
    { 
        card2.className=' animate__animated animate__shakeX card card2'+' '+order_random2;
        btn2.textContent="False"
}
   else{
    card2.className=' animate__animated animate__shakeX card card2'+' '+order_random2
    btn2.textContent="False"


}
}
btn2.addEventListener('click', animation2)


// btn3 uchun 
function generation_answer3(answer3)
{
    // random 3/3 xonali 
    if(random1>=100&&random3>=100){
        answer3.preventDefault()
    return btn3.classList='card__btn'+' '+'bg-[#'+random1+random3+']'
    }
     // random 3/2 xonali
     else if (random1>=100&&random3<100&&random3>=10)
     {
         return btn3.classList='card__btn'+' '+'bg-[#'+random1+arrey[random_arrey1]+random3+']'
     }
     // random 3/1 xonali
    else if (random1>=100&&random3<10)
    {
        return btn3.classList='card__btn'+' '+'bg-[#'+random1+arrey[random_arrey2]+ arrey[random_arrey1]+random3+']'
    }
    // random 2/3 xonali
    else if(random1<100&&random1>=10&&random3>=100){
        return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random1+random3+']'

    }
    // random 2/2 xonali
    else if( random1<100&&random1>=10&&random3<100&&random3>=10)
    {
        return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random1+arrey[random_arrey2]+random3+']'
    }
     // random 2/1 xolati
    else if(random1<100&&random1>=10&&random3<10)
    {
        return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random1+arrey[random_arrey2]+arrey[random_arrey1]+random3+']'

    }
     // random 1/1 xonali
     else if( random1<10&&random3<10)
     {
         return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+arrey[random_arrey2]+arrey[random_arrey1]+random3+']'
     
     }
        // random 1/2 xolati
        else if (random1<10&&random3<100&&random3>=10)
        {
            return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+arrey[random_arrey2]+random1+arrey[random_arrey1]+random3+']'
    
        }

    // random 1/3 xonali
    else if( random1<10&&random3>=100){
        return btn3.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random1+random3+']'
    }
    
}
btn_random.addEventListener('click',generation_answer3)
// animation 3
function animation3 (an3)
{
    an3.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']')
    {
         card3.className=' animate__animated animate__shakeX card card3'+' '+order_random3;
        btn3.textContent="False"
         

        }
   else{
    card3.className=' animate__animated animate__shakeX card card3'+' '+order_random3
    btn3.textContent="False"


}
}
btn3.addEventListener('click', animation3)


// btn4 uchun 
function generation_answer4(answer4)
{
    // random 3/3 xonali 
    if(random3>=100&&random1>=100){
        answer4.preventDefault()
    return btn4.classList='card__btn'+' '+'bg-[#'+random3+random1+']'
    }
     // random 3/2 xonali
     else if (random3>=100&&random1<100&&random1>=10)
     {
         return btn4.classList='card__btn'+' '+'bg-[#'+random3+arrey[random_arrey1]+random1+']'
     }
     // random 3/1 xonali
    else if (random3>=100&&random1<10)
    {
        return btn4.classList='card__btn'+' '+'bg-[#'+random3+arrey[random_arrey2]+ arrey[random_arrey1]+random1+']'
    }
    // random 2/3 xonali
    else if(random3<100&&random3>=10&&random1>=100){
        return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random3+random1+']'

    }
     // random 2/2 xonali
     else if( random3<100&&random3>=10&&random1<100&&random1>=10)
     {
         return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random3+arrey[random_arrey2]+random1+']'
     }
        // random 2/1 xolati
    else if(random3<100&&random3>=10&&random1<10)
    {
        return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random3+arrey[random_arrey2]+arrey[random_arrey1]+random1+']'

    }
    // random 1/3 xonali
    else if( random3<10&&random1>=100){
        return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random3+random1+']'
    }
      // random 1/2 xolati
      else if (random3<10&&random1<100&&random1>=10)
      {
          return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey1]+random3+arrey[random_arrey2]+random1+']'
  
      }
     
    // random 1/1 xonali
    else if( random3<10&&random1<10)
    {
        return btn4.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random3+arrey[random_arrey2]+arrey[random_arrey1]+random2+']'
    
    }
}
btn_random.addEventListener('click',generation_answer4)
// animation 4
function animation4(an4)
{
    an4.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']')
    { 
        card4.className=' animate__animated animate__shakeX card card4'+' '+order_random4
        btn4.textContent='False'
    
    }
   else{
    card4.className=' animate__animated animate__shakeX card card4'+' '+order_random4
    btn4.textContent='False'


}
}
btn4.addEventListener('click', animation4)


// btn5 uchun 
function generation_answer5(answer5)
{
    // random 3/3 xonali 
    if(random2>=100&&random1>=100){
        answer5.preventDefault()
    return btn5.classList='card__btn'+' '+'bg-[#'+random2+random1+']'
    }
      // random 3/2 xonali
      else if (random2>=100&&random1<100&&random1>=10)
      {
          return btn5.classList='card__btn'+' '+'bg-[#'+random2+arrey[random_arrey1]+random1+']'
      }
         // random 3/1 xonali
    else if (random2>=100&&random1<10)
    {
        return btn5.classList='card__btn'+' '+'bg-[#'+random2+arrey[random_arrey2]+ arrey[random_arrey1]+random1+']'
    }

    // random 2/3 xonali
    else if(random2<100&&random2>=10&&random1>=100){
        return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random2+random1+']'

    }
     // random 2/2 xonali
     else if( random2<100&&random2>=10&&random1<100&&random1>=10)
     {
         return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random2+arrey[random_arrey2]+random1+']'
     }

      // random 2/1 xolati
    else if(random2<100&&random2>=10&&random1<10)
    {
        return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random2+arrey[random_arrey2]+arrey[random_arrey1]+random1+']'

    }

    // random 1/3 xonali
    else if( random2<10&&random1>=100){
        return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random2+random1+']'
    }
   // random 1/2 xolati
   else if (random2<10&&random1<100&&random1>=10)
   {
       return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey1]+random2+arrey[random_arrey2]+random1+']'

   }
    // random 1/1 xonali
    else if( random2<10&&random1<10)
    {
        return btn5.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random2+arrey[random_arrey2]+arrey[random_arrey1]+random1+']'
    
    }
}
btn_random.addEventListener('click',generation_answer5)
// animation 5
function animation5 (an5)
{
    an5.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']')
    {
         card5.className=' animate__animated animate__shakeX card card5'+' '+order_random5
    btn5.textContent='False'
        
        }
   else{
    card5.className=' animate__animated animate__shakeX card card5'+' '+order_random5
    btn5.textContent='False'

}
}
btn5.addEventListener('click', animation5)


// btn6 uchun 
function generation_answer6(answer6)
{
    // random 3/3 xonali 
    if(random2>=100&&random3>=100){
        answer6.preventDefault()
    return btn6.classList='card__btn'+' '+'bg-[#'+random2+random3+']'
    }
      // random 3/2 xonali
      else if (random2>=100&&random3<100&&random3>=10)
      {
          return btn6.classList='card__btn'+' '+'bg-[#'+random2+arrey[random_arrey1]+random3+']'
      }
        // random 3/1 xonali
    else if (random2>=100&&random3<10)
    {
        return btn6.classList='card__btn'+' '+'bg-[#'+random2+arrey[random_arrey2]+ arrey[random_arrey1]+random3+']'
    }
    // random 2/3 xonali
    else if(random2<100&&random2>=10&&random3>=100){
        return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random2+random3+']'

    }
      // random 2/2 xonali
      else if( random2<100&&random2>=10&&random3<100&&random3>=10)
      {
          return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+random2+arrey[random_arrey2]+random3+']'
      }
        // random 2/1 xolati
    else if(random2<100&&random2>=10&&random3<10)
    {
        return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey2]+random2+arrey[random_arrey2]+arrey[random_arrey1]+random3+']'

    }

    // random 1/3 xonali
    else if( random2<10&&random3>=100){
        return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random2+random3+']'
    }
      // random 1/2 xolati
   else if (random2<10&&random3<100&&random3>=10)
   {
       return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey1]+random2+arrey[random_arrey2]+random3+']'

   }
    
    // random 1/1 xonali
    else if( random2<10&&random3<10)
    {
        return btn6.classList='card__btn'+' '+'bg-[#'+arrey[random_arrey1]+arrey[random_arrey2]+random2+arrey[random_arrey2]+arrey[random_arrey1]+random3+']'
    
    }
}
btn_random.addEventListener('click',generation_answer6)
// animationc 6
function animation6(an6)
{
    an6.preventDefault()
    if( bg_text.textContent!='color:[#'+random1+random2+']')
    {
         card6.className=' animate__animated animate__shakeX card card6'+' '+order_random6
    btn6.textContent='False'

        
        }
   else{
    card6.className=' animate__animated animate__shakeX card card6'+' '+order_random6
    btn6.textContent='False'

}
}
btn6.addEventListener('click', animation6)
