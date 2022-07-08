var campos = document.getElementById('campos')
var pi = 3.14159265359
var a = 0
var b = 0
var c = 0
var delta =0

function calcular(){
    if(document.getElementById('altura')){
        var altura = document.getElementById('altura')
        var alt = Number(altura.value)
    }
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
    if(document.getElementById('volume')){
        var volume = document.getElementById('volume')
        var vol = Number(volume.value)
    }
    if(document.getElementById('geratriz')){
        var geratriz = document.getElementById('geratriz')
        var ger = Number(geratriz.value)
    }
    var control = false

    

    function exibir(){
        if(altura){
            altura.value = alt.toFixed(2)
        }else{
            altura = document.getElementById('altura')
            altura.value = alt.toFixed(2)
        }
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
        if(volume){
            volume.value = vol.toFixed(2)
        }else{
            volume = document.getElementById('volume')
            volume.value = vol.toFixed(2)
        }
        if(geratriz){
            geratriz.value = ger.toFixed(2)
        }else{
            geratriz = document.getElementById('geratriz')
            geratriz.value = ger.toFixed(2)
        }
        var areadabase = pi * (rai**2)
        var areadalateral = pi * rai * alt
        var lblareabase = document.createElement('label')
        lblareabase.id = "lblareabase"
        lblareabase.classList= "caixa"
        lblareabase.innerHTML = "Área da base = " + areadabase.toFixed(2) + "u<sup>2<sup>" + "<br>"
        campos.appendChild(lblareabase)
        var lblarealateral = document.createElement('label')
        lblarealateral.id = "lblarealateral"
        lblarealateral.classList= "caixa"
        lblarealateral.innerHTML = "Área da lateral = " + areadalateral.toFixed(2) + "u<sup>2<sup>"
        campos.appendChild(lblarealateral)

    }
    
}

function limpar(){
    if(altura){
        altura.value = null
    }
    if(raio){
        raio.value = null
    }
    if(diametro){
        diametro.value = null

    }
    if(perimetro){
        perimetro.value = null
    }
    if(area){
        area.value = null
        
    }
    if(volume){
        volume.value = null
    }
    if(geratriz){
        geratriz.value = null
    }
    if(document.getElementById('lblareabase')){
        document.getElementById('lblareabase').remove()
    }
    if(document.getElementById('lblarealateral')){
        document.getElementById('lblarealateral').remove()
    }
    
    
    
    
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
function althipotetico(){
    var lblhipotetico = document.createElement('label')
    lblhipotetico.classList= "erro"
    lblhipotetico.innerHTML = "<br>Com esses parâmetros utilizamos a altura hipotética do cone como 80% da medida da geratriz, pode haver até 1% de margem de erro "
    campos.appendChild(lblhipotetico)

}
