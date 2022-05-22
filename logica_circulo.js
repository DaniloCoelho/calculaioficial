var campos = document.getElementById('campos')
var pi = 3.14159265359

function calcular(){
    if(document.getElementById('raio')){
        var raio = document.getElementById('raio')
        var rai = Number(raio.value)
    }
    if(document.getElementById('diametro')){
        var diametro = document.getElementById('diametro')
        var dia = Number(diametro.value)
    }
    if(document.getElementById('perimetro')){
        var perimetro = document.getElementById('perimetro')
        var per = Number(perimetro.value)
    }
    if(document.getElementById('area')){
        var area = document.getElementById('area')
        var are = Number(area.value)
    }
    var control = false
    
    if((rai||dia||per) && !control){
        if(rai){
            dia = rai*2
            per = 2* pi * rai
            are = 2*(pi*(rai**2))
        }
        else if(dia){
            rai = dia / 2
            per = 2* pi * rai
            are = 2*(pi*(rai**2))
        }
        else{
            rai = per / (2*pi)
            dia = rai*2
            are = 2*(pi*(rai**2))
        }
        control = true
        if(rai<0||dia<0||per<0||are<0){
            erro_negativos()
        }else{
            exibir()
        }
    }
    if((rai || dia || per) && are && !control){
        if(rai){
            dia = rai*2
            per = 2* pi * rai
            are = 2*(pi*(rai**2))
        }
        else if(dia){
            rai = dia / 2
            per = 2* pi * rai
            are = 2*(pi*(rai**2))
        }
        else{
            rai = per / (2*pi)
            dia = rai*2
            are = 2*(pi*(rai**2))
        }
        control = true
        if(rai <0 || dia <0 || per <0 || are <0){
            erro_negativos()
        }else{
            exibir()
        }
    }
    if(are && !rai && !dia && !per && !control){
        rai = Math.sqrt(are / (2*pi))
        dia = rai*2
        per = 2* pi * rai
        control = true
        if(rai<0 || dia<0 || per<0 || are <0){
            erro_negativos()
        }else{
            exibir()
        }
        
    }

    function exibir(){
        if(raio){
            raio.value = rai.toFixed(2)
        }
        else{
            raio = document.getElementById('raio')
            raio.value = rai.toFixed(2)
        }
        if(diametro){
            diametro.value = dia.toFixed(2)
    
        }else{
            diametro = document.getElementById('diametro')
            diametro.value = dia.toFixed(2)
            
        }
        if(perimetro){
            perimetro.value = per.toFixed(2)
        }else{
            perimetro = document.getElementById('perimetro')
            perimetro.value = per.toFixed(2)
        }
        if(area){
            area.value = are.toFixed(2)
            
        }else{
            area = document.getElementById('area')
            area.value = are.toFixed(2)
        }

    }
    
}

function limpar(){
    location.reload()
}
function erro_parametros_combinaveis(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.innerHTML = "Estes parâmetros não podem ser Calculados entre si!!!"
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros retornaram números negativos "
    campos.appendChild(lblnegativos)
}
