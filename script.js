jQuery(function($){
    let jogada = 'O'
    $('.btn').on('click', function(){
        jogar(this)
    })

    function jogar(id){
        let onde = $(id).attr('id')
        $('#'+ onde).find('h1').html(jogada)
        $('#'+ onde).find('h1').removeClass('hide')
        
    }
})
