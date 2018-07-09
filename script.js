$(document).ready(function(){
$('.ok').on('click', function(e){
    e.preventDefault();
   var artName = $('.artName').val(), // берем val <select name="" class="country"><option value="0">-</option>
       text = $('.text').val(); // берем val <select name="" class="country"><option value="0">-</option>
    $.ajax({                 //ajax запрос формируется обьектами
        url:'post.php',      //к какому файлу мы передаем запрос, путь к php
        type:'POST',         //запрос get-и получить и послать, post-только послать
        data:{artName: artName, text: text}, //данные, что мы отсылаем(обьект). country-ключ что я отсылаю, он может быть с любым названием
        dataType:'html',  //какие данные мы отсылаем
        beforeSend: function(){  // что мы делаем пока ждем ответ от сервера
            $('.windows8').fadeIn();//запускаем preloader
        },
        success:function(data){ //приходит в кодировке за счет json_encode  {"1":"\u0427\u043e\u043f","2":"\u0414\u043d\u0435\u043f\u0440"}
            $('.windows8').fadeOut();
            $('.articles').html(data);

        }
    })
})
})




