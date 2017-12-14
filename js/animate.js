








$('.drawer-btn').on('click', function(){
    if($('.linking1, .linking2, .linking3').hasClass('NavClose')){
        $('.linking1, .linking2, .linking3').removeClass('NavClose').addClass('NavOpen');
    }else{
        $('.linking1, .linking2, .linking3').addClass('NavClose').removeClass('NavOpen');
    }
}); 

