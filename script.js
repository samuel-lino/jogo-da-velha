jQuery(function($){
    let njogadas = 0
    let jogada = 'O'
    $('.btn').on('click', function(){
        jogar(this)
    })
    
    function jogar(id){
        if(observar(id)){
            njogadas +=1
            let onde = $(id).attr('id')
            $('#'+ onde).find('h1').html(jogada)
            $('#'+ onde).find('h1').removeClass('hide')
            let vit = verifica()
            if(vit !== ''){
                $('.'+ vit).addClass('ganhou')
                alert('parabens o '+ $('.vez').html() + ' ganhou')
            }
            if(jogada === 'O'){
                jogada = 'X'
                $('.vez').html('jogador 2')
            }else{
                jogada = 'O'
                $('.vez').html('jogador 1')
            }
        }  
    }
    function verifica(){
        if(njogadas === 9){
            alert('deu velha')
            return ''
        }
        let l1 = $('.l1')
        let l2 = $('.l2')
        let l3 = $('.l3')
        let c1 = $('.c1')
        let c2 = $('.c2')
        let c3 = $('.c3')
        let d1 = $('.d1')
        let d2 = $('.d2')
        let ganhar = ''
        let ver = 0
        for(let obj of l1){
            let ok = $(l1[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === l1[2]){
                    if(ver === 3){
                      ganhar = 'l1'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of l2){
            let ok = $(l2[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === l2[2]){
                    if(ver === 3){
                      ganhar = 'l2'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of l3){
            let ok = $(l3[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === l3[2]){
                    if(ver === 3){
                      ganhar = 'l3'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of c1){
            let ok = $(c1[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === c1[2]){
                    if(ver === 3){
                      ganhar = 'c1'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of c2){
            let ok = $(c2[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === c2[2]){
                    if(ver === 3){
                      ganhar = 'c2'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of c3){
            let ok = $(c3[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === c3[2]){
                    if(ver === 3){
                      ganhar = 'c3'  
                    }
                }
            }else{
                ver = 0
            }       
        }
        for(let obj of d1){
            let ok = $(d1[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === d1[2]){
                    if(ver === 3){
                      ganhar = 'd1'  
                    }
                }
            }else{
                ver = 0
            }
        }
        for(let obj of d2){
            let ok = $(d2[0]).find('h1').html()
            if($(obj).find('h1').html() === ok){
                ver = ver + 1
                if(obj === d2[2]){
                    if(ver === 3){
                      ganhar = 'd2'  
                    }
                }
            }else{
                ver = 0
            }
        }
        return ganhar
        
    }
    function observar(obj){
        let onde = $(obj).attr('id')
        let texto = $('#'+onde).find('h1').html()
        if(texto === 'O' ||texto === 'X'){
            return false
        }else{
            return true
        }
    }

})