typeof 0 === 'string';

var campos = document.getElementById('campos')

function calcular(){
    if(document.getElementById('quilograma')){
        var quilograma = document.getElementById('quilograma')
        var qui = quilograma.value
    }
    if(document.getElementById('libra')){
        var libra = document.getElementById('libra')
        var lib = libra.value
    }
    if(document.getElementById('stone')){
        var stone = document.getElementById('stone')
        var sto = stone.value
    }
    if(document.getElementById('onca')){
        var onca = document.getElementById('onca')
        var onc = onca.value
    }
    if(document.getElementById('tonelada')){
        var tonelada = document.getElementById('tonelada')
        var tol = tonelada.value
    }
    if(document.getElementById('toneladacurta')){
        var toneladacurta = document.getElementById('toneladacurta')
        var tcu = toneladacurta.value
    }
    if(document.getElementById('toneldadeslocamento')){
        var toneldadeslocamento = document.getElementById('toneldadeslocamento')
        var tdes = toneldadeslocamento.value
    }
    
    var control = false

    if(document.getElementById('erro_parametros_combinaveis')){
        document.getElementById('erro_parametros_combinaveis').remove()
    }
    if(qui && !lib && !sto && !onc && !tol && !tcu && !tdes && !control){
        lib = qui * 2.20462
        sto = qui * 0.157473
        onc = qui * 35.274
        tol = qui * 0.001
        tcu = qui * 0.00110231
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && lib && !sto && !onc && !tol && !tcu && !tdes && !control){
        qui = lib * 0.453592
        sto = qui * 0.157473
        onc = qui * 35.274
        tol = qui * 0.001
        tcu = qui * 0.00110231
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && !lib && sto && !onc && !tol && !tcu && !tdes && !control){
        qui = sto * 6,35029
        lib = qui * 2.20462
        onc = qui * 35.274
        tol = qui * 0.001
        tcu = qui * 0.00110231
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && !lib && !sto && onc && !tol && !tcu && !tdes && !control){
        qui = onc * 0.0283495
        sto = qui * 0.157473
        lib = qui * 2.20462
        tol = qui * 0.001
        tcu = qui * 0.00110231
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && !lib && !sto && !onc && tol && !tcu && !tdes && !control){
        qui = tol * 1000
        sto = qui * 0.157473
        lib = qui * 2.20462
        onc = qui * 35.274
        tcu = qui * 0.00110231
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && !lib && !sto && !onc && !tol && tcu && !tdes && !control){
        qui = tcu * 907.185
        sto = qui * 0.157473
        lib = qui * 2.20462
        onc = qui * 35.274
        tol = qui * 0.001
        tdes = qui * 0.000984207
        control = true
        exibir()

    }
    else if(!qui && !lib && !sto && !onc && !tol && !tcu && tdes && !control){
        qui = tdes * 1016.05
        sto = qui * 0.157473
        lib = qui * 2.20462
        onc = qui * 35.274
        tol = qui * 0.001
        tcu = qui * 0.00110231
        control = true
        exibir()


    }else{
        erro_parametros_combinaveis()
    }

    

    function exibir(){
        if(quilograma){
            quilograma.value = qui
        }else{
            quilograma = document.getElementById('quilograma')
            quilograma.value = qui
        }
        if(libra){
            libra.value = lib
        }else{
            libra = document.getElementById('libra')
            libra.value = lib
        }
        if(stone){
            stone.value = sto
        }else{
            stone = document.getElementById('stone')
            stone.value = sto
        }
        if(onca){
            onca.value = onc
        }else{
            onca = document.getElementById('onca')
            onca.value = onc
        }
        if(tonelada){
            tonelada.value = tol
        }else{
            tonelada = document.getElementById('tonelada')
            tonelada.value = tol
        }
        if(toneladacurta){
            toneladacurta.value = tcu
        }else{
            toneladacurta = document.getElementById('toneladacurta')
            toneladacurta.value = tcu
        }
        if(toneldadeslocamento){
            toneldadeslocamento.value = tdes
        }else{
            toneldadeslocamento = document.getElementById('toneldadeslocamento')
            toneldadeslocamento.value = tdes
        }
    } 
}
function limpar(){
    if(quilograma){
        quilograma.value = null
    }
    if(libra){
        libra.value = null
    }
    if(stone){
        stone.value = null
    }
    if(onca){
        onca.value = null
    }
    if(tonelada){
        tonelada.value = null
    }
    if(toneladacurta){
        toneladacurta.value = null
    }
    if(toneldadeslocamento){
        toneldadeslocamento.value = null
    }
    if(document.getElementById('erro_parametros_combinaveis')){
        document.getElementById('erro_parametros_combinaveis').remove()
    }
}
function erro_parametros_combinaveis(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.id="erro_parametros_combinaveis"
    lblerroParametro.innerHTML = "Preencha somente ou pelo menos um parâmetro !!!"
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros retornaram números negativos "
    campos.appendChild(lblnegativos)
}

