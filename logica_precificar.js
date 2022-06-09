var campos = document.getElementById('campos')
var decimo = 0
var ferias = 0

function calcular(){
    if(document.getElementById('salariopretendido')){
        var salariopretendido = document.getElementById('salariopretendido')
        var salpret = Number(salariopretendido.value)
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
    var control = false
    var checkdecimo = document.getElementsByName('decimo')
    var checkferias = document.getElementsByName('ferias')


    if(checkdecimo[0].checked){
        decimo = salpret
    }else if(checkdecimo[1].checked){
        decimo = 0
    }
    if(checkferias[0].checked){
        ferias = (salpret/3)+ salpret
    }else if(checkferias[1].checked){
        ferias = 0
    }
    

    

    
    
}
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
    var areadabase = pi * (rai**2)
    var areadalateral = 2*pi * rai * alt
    var lblareabase = document.createElement('label')
    lblareabase.classList= "caixa"
    lblareabase.innerHTML = "Área da base = " + areadabase.toFixed(2) + "u<sup>2<sup>" + "<br>"
    campos.appendChild(lblareabase)
    var lblarealateral = document.createElement('label')
    lblarealateral.classList= "caixa"
    lblarealateral.innerHTML = "Área da lateral = " + areadalateral.toFixed(2) + "u<sup>2<sup>"
    campos.appendChild(lblarealateral)

}

function limpar(){
    location.reload()
}
function displayvisible(x){
    x.style = "display:visible;"
    
    
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros retornaram números negativos "
    campos.appendChild(lblnegativos)
}
function displaynone(x){
    x.style = "display:none;"
    
    
}
