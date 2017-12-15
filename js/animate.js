








$('.drawer-btn').on('click', function(){
    if($('.linking1, .linking2, .linking3, .linking4').hasClass('NavClose')){
        $('.linking1, .linking2, .linking3, .linking4').removeClass('NavClose').addClass('NavOpen');
    }else{
        $('.linking1, .linking2, .linking3, .linking4').addClass('NavClose').removeClass('NavOpen');
    }
}); 

