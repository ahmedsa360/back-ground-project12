let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let code = document.getElementById('code');

window.onscroll = function(){
    let value = scrollY;
    starts.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    code.style.fontsize = value + 'px';
    if(scrollY >=  106.36363220214844){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(to top , #200016 , transparent)';
    }
}