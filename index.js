// var toggled = false;
// var text = document.getElementById('text');
// var circle = document.getElementById('toggle-circle');
// var body = document.getElementsByTagName('body')[0];
// document.getElementById("toggle-circle").onclick = function(){
//     if(!toggled){
//         text.classList.add('color-white');
//         body.classList.add('bg-color-black');
//         circle.style.marginLeft = "7.37rem";
//         toggled = true;
//     }else{
//         text.classList.remove('color-white');
//         body.classList.remove('bg-color-black');
//         circle.style.marginLeft = "0rem";
//         toggled = false;

//     }
// }
var toggle = false;
$('#toggle-circle').on('click',function(){

    if(!toggle){
        $('body').addClass('bg-color-black');
        $('#text').addClass('color-white');
        $('#toggle-circle').css({
            "margin-left": "7.37rem"
        });
        toggle = true;
    }else{
        $('body').removeClass('bg-color-black');
        $('#text').removeClass('color-white');
        $('#toggle-circle').css({
            "margin-left": "0rem"
        });
        toggle = false;
    }


});