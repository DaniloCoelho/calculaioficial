typeof 0 === 'string';

var campos = document.getElementById('campos')

function calcular(){
    if(document.getElementById('celsius')){
        var celsius = document.getElementById('celsius')
        var cel = celsius.value
    }
    if(document.getElementById('fahrenheit')){
        var fahrenheit = document.getElementById('fahrenheit')
        var fah = fahrenheit.value
    }
    if(document.getElementById('kelvin')){
        var kelvin = document.getElementById('kelvin')
        var kel = kelvin.value
    }
    
    var control = false

    if(document.getElementById('erro_parametros_combinaveis')){
        document.getElementById('erro_parametros_combinaveis').remove()
    }
    if(cel && !fah && !kel && !control){
        cel = Number(cel)
        fah = (cel * 1.8) + 32
        kel = cel + 273.15
        control = true
        exibir()

    }
    else if(fah && !kel && !cel && !control){
        fah = Number(fah)
        cel = (fah - 32)/1.8
        kel = cel + 273.15
        control = true
        exibir()

    }
    else if(kel && !fah && !cel && !control){
        kel = Number(kel)
        cel = kel - 273.15
        fah = (cel * 1.8) + 32
        control = true
        exibir()


    }else{
        erro_parametros_combinaveis()
    }

    

    function exibir(){
        if(celsius){
            celsius.value = cel
        }else{
            celsius = document.getElementById('celsius')
            celsius.value = cel
        }
        if(fahrenheit){
            fahrenheit.value = fah
        }else{
            fahrenheit = document.getElementById('fahrenheit')
            fahrenheit.value = fah
        }
        if(kelvin){
            kelvin.value = kel
        }else{
            kelvin = document.getElementById('kelvin')
            kelvin.value = kel
        }
    }
    
}

function limpar(){
    if(celsius){
        celsius.value = null
    }
    if(fahrenheit){
        fahrenheit.value = null
    }
    if(kelvin){
        kelvin.value = null
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

