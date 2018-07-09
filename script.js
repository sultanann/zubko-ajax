$(document).ready(function(){
$('.ok').on('click', function(e){
    e.preventDefault();
   var artName = $('.artName').val(), 
       text = $('.text').val(); 
    $.ajax({                 
        url:'post.php',      
        type:'POST',         
        data:{artName: artName, text: text}, 
        dataType:'html',  
        beforeSend: function(){  
            $('.windows8').fadeIn();
        },
        success:function(data){ 
            $('.windows8').fadeOut();
            $('.articles').html(data);

        }
    })
})
})




