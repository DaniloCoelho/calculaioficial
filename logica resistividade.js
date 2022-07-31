var campos = document.getElementById('campos')


function calcular(){
    if(document.getElementById('resistencia')){
        var resistencia = document.getElementById('resistencia')
        var resis = Number(resistencia.value)
    }
    if(document.getElementById('comprimento')){
        var comprimento = document.getElementById('comprimento')
        var com = Number(comprimento.value)
    }
    if(document.getElementById('area')){
        var area = document.getElementById('area')
        var are = Number(area.value)
    }

    var control = false
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }
    if(document.getElementById('material')){
        var material = document.getElementById('material')
        var mater = 0
    }
    if(material.value == "aluminio" ){
        mater = 0.02857
    }
    if(material.value == "antimonia"){
        mater = 0.417
    }
    if(material.value == "bronze"){
        mater = 0.067
    }
    if(material.value == "chumbo"){
        mater = 0.22
    }
    if(material.value == "cobre"){
        mater = 0.0172
    }
    if(material.value == "constantan"){
        mater = 0.5
    }
    if(material.value == "estanho"){
        mater = 0.115
    }
    if(material.value == "grafite"){
        mater = 13
    }
    if(material.value == "ferro"){
        mater = 0.1
    }
    if(material.value == "latao"){
        mater = 0.067
    }
    if(material.value == "mercurio"){
        mater = 0.96
    }
    if(material.value == "nicromo"){
        mater = 1.1
    }
    if(material.value == "niquel"){
        mater = 0.087
    }
    if(material.value == "ouro"){
        mater = 0.024
    }
    if(material.value == "prata"){
        mater = 0.0158
    }
    if(material.value == "tungstenio"){
         mater = 0.055
    }
    if(material.value == "zinco"){
        mater = 0.056
    }

    //R = (p * L) /A
    //resis = (mater * com)/are
    //com = mater * resis/are
    //5  = (5 * 2) / 2 
    //10 = 5*x
    //x = 10/5
    //com = (resis * are)/mater
    //
    //R resistência
    //p resistividade do condutor em .m.
    //L comprimento em metro
    //area transversal  mm²
    //Material
    /*Resistividade (ohms.m.mm2)
    Alumínio    0.02857
    Antimônio   0.417
    Bronze      0.067
    Chumbo      0.22
    Cobre puro  0.0172
    Constantan  0.5
    Estanho     0.115
    Grafite     13
    Ferro puro  0.096
    Latão       0.067
    Mercúrio    0.96
    Nicromo     1.1
    Níquel      0.087
    Ouro        0.024
    Prata       0.0158
    Tungstêio   0.055
    Zinco       0.056*/
    //resis com are
    if(resis && com && !are && !control){
        are = (mater*com)/resis
        control = true
        exibir()
    }
    if(resis && are && !com && !control){
        com = (resis * are)/mater
        control = true
        exibir()
    }
    if(com && are && !resis && !control){
        resis = (mater * com)/are
        control = true
        exibir()
    }

    function exibir(){
        if(resistencia){
            resistencia.value = resis.toFixed(2)
        }
        else{
            resistencia = document.getElementById('resistencia')
            resistencia.value = resis.toFixed(2)
        }
        if(comprimento){
            comprimento.value = com.toFixed(2)
        }else{
            comprimento = document.getElementById('comprimento')
            comprimento.value = com.toFixed(2)
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
    if(resistencia){
        resistencia.value = false
    }
    if(comprimento){
        comprimento.value = false
    }
    if(area){
        area.value = false   
    }
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }
}
function erro_parametros_combinaveis(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.id = "lblparametro"
    lblerroParametro.classList= "erro"
    lblerroParametro.innerHTML = "Erro !!! Insira dois parâmetros."
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.id = "lblerro"
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros negativos "
    campos.appendChild(lblnegativos)
}
