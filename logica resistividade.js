var campos = document.getElementById('campos')


function calcular(){
    if(document.getElementById('resistencia')){
        var resistencia = document.getElementById('resistencia')
        var resis = Number(resistencia.value)
    }
    if(document.getElementById('resistividade')){
        var resistividade = document.getElementById('resistividade')
        var ten = Number(resistividade.value)
    }
    if(document.getElementById('comprimento')){
        var comprimento = document.getElementById('comprimento')
        var cor = Number(comprimento.value)
    }
    if(document.getElementById('area')){
        var area = document.getElementById('area')
        var res = Number(area.value)
    }
    var control = false
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }

    //R = (p * L) //A
    //R resistência
    //p resistividade do condutor em .m.
    //L comprimento em metro
    //area transversal  mm²
    //Material

/*Resistividade (ohms.m.mm2)

Alumínio  0.029
Antimônio   0.417
Bronze      0.067
Chumbo      0.22
Cobre puro  0.0162
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

    
    if(resis<0 || cor<0 || res<0){
        erro_negativos()  
    }else{
        if(resis && ten && !cor && !res && !control){
            //i = p/v
            cor = resis / ten
            res = ten / cor
            control = true
            exibir()
        }
        else if(resis && cor && !ten && !res && !control){
            //v = p/i
            ten = resis / cor
            res = ten / cor
            control = true
            exibir()
        }
        else if(resis && res && !cor && !ten && !control){
            //i = (p/r)**(1/2)
            cor = (resis/res)**(1/2)
            ten = res * cor
            control = true
            exibir()
        }
        else if(ten && cor && !resis && !res && !control){
            //p = v*i
            resis = ten * cor
            res = ten / cor
            control = true
            exibir()
        }
        else if(ten && res && !cor && !resis && !control){
            //p = v**2 / r
            resis = ten**2 / res
            cor = resis / ten
            control = true
            exibir()
        }
        else if(cor && res && !resis && !ten && !control){
            //v = r*i
            ten = res * cor
            resis = ten * cor 
            control = true
            exibir()
        }
        else{
            erro_parametros_combinaveis()
        }
        
    }

    function exibir(){
        if(resistencia || resis){
            resistencia.value = resis.toFixed(2)
        }
        else{
            resistencia = document.getElementById('resistencia')
            resistencia.value = resis.toFixed(2)
        }
        if(resistividade){
            resistividade.value = ten.toFixed(2)
        }else{
            resistividade = document.getElementById('resistividade')
            resistividade.value = ten.toFixed(2) 
        }
        if(comprimento){
            comprimento.value = cor.toFixed(2)
        }else{
            comprimento = document.getElementById('comprimento')
            comprimento.value = cor.toFixed(2)
        }
        if(area){
            area.value = res.toFixed(2) 
        }else{
            area = document.getElementById('area')
            area.value = res.toFixed(2)
        }
    }
}

function limpar(){
    if(resistencia){
        resistencia.value = false
    }
    if(resistividade){
        resistividade.value = false
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
