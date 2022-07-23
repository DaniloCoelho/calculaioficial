var campos = document.getElementById('campos')


function calcular(){
    if(document.getElementById('potencia')){
        var potencia = document.getElementById('potencia')
        var pot = Number(potencia.value)
    }
    if(document.getElementById('tensao')){
        var tensao = document.getElementById('tensao')
        var ten = Number(tensao.value)
    }
    if(document.getElementById('corrente')){
        var corrente = document.getElementById('corrente')
        var cor = Number(corrente.value)
    }
    if(document.getElementById('resistencia')){
        var resistencia = document.getElementById('resistencia')
        var res = Number(resistencia.value)
    }
    var control = false
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }
    
    if(pot<0 || cor<0 || res<0){
        erro_negativos()  
    }else{
        if(pot && ten && !cor && !res && !control){
            //i = p/v
            cor = pot / ten
            res = ten / cor
            control = true
            exibir()
        }
        else if(pot && cor && !ten && !res && !control){
            //v = p/i
            ten = pot / cor
            res = ten / cor
            control = true
            exibir()
        }
        else if(pot && res && !cor && !ten && !control){
            //i = (p/r)**(1/2)
            cor = (pot/res)**(1/2)
            ten = res * cor
            control = true
            exibir()
        }
        else if(ten && cor && !pot && !res && !control){
            //p = v*i
            pot = ten * cor
            res = ten / cor
            control = true
            exibir()
        }
        else if(ten && res && !cor && !pot && !control){
            //p = v**2 / r
            pot = ten**2 / res
            cor = pot / ten
            control = true
            exibir()
        }
        else if(cor && res && !pot && !ten && !control){
            //v = r*i
            ten = res * cor
            pot = ten * cor 
            control = true
            exibir()
        }
        else{
            erro_parametros_combinaveis()
        }
        
    }

    function exibir(){
        if(potencia || pot){
            potencia.value = pot.toFixed(2)
        }
        else{
            potencia = document.getElementById('potencia')
            potencia.value = pot.toFixed(2)
        }
        if(tensao){
            tensao.value = ten.toFixed(2)
        }else{
            tensao = document.getElementById('tensao')
            tensao.value = ten.toFixed(2) 
        }
        if(corrente){
            corrente.value = cor.toFixed(2)
        }else{
            corrente = document.getElementById('corrente')
            corrente.value = cor.toFixed(2)
        }
        if(resistencia){
            resistencia.value = res.toFixed(2) 
        }else{
            resistencia = document.getElementById('resistencia')
            resistencia.value = res.toFixed(2)
        }

    }
    
}

function limpar(){
    //location.reload()
    if(potencia){
        potencia.value = false
    }
    /*else{
        raio = document.getElementById('raio')
        raio.value = rai.toFixed(2)
    }*/
    if(tensao){
        tensao.value = false
    }/*else{
        diametro = document.getElementById('diametro')
        diametro.value = dia.toFixed(2)   
    }*/
    if(corrente){
        corrente.value = false
    }
    /*else{
        perimetro = document.getElementById('perimetro')
        perimetro.value = per.toFixed(2)
    }*/
    if(resistencia){
        resistencia.value = false   
    }
    /*else{
        area = document.getElementById('area')
        area.value = are.toFixed(2)
    }*/
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
