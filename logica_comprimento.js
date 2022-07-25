var campos = document.getElementById('campos')

function calcular(){
    if(document.getElementById('centimetros')){
        var centimetros = document.getElementById('centimetros')
        var cmet = Number(centimetros.value)
    }
    if(document.getElementById('quilometros')){
        var quilometros = document.getElementById('quilometros')
        var qmet = Number(quilometros.value)
    }
    if(document.getElementById('metros')){
        var metros = document.getElementById('metros')
        var met = Number(metros.value)
    }
    if(document.getElementById('pes')){
        var pes = document.getElementById('pes')
        var pess = Number(pes.value)
    }
    if(document.getElementById('polegadas')){
        var polegadas = document.getElementById('polegadas')
        var pol = Number(polegadas.value)
    }
    if(document.getElementById('milhas')){
        var milhas = document.getElementById('milhas')
        var mi = Number(milhas.value)
    }
    if(document.getElementById('jardas')){
        var jardas = document.getElementById('jardas')
        var jar = Number(jardas.value)
    }
    if(document.getElementById('mnauticas')){
        var mnauticas = document.getElementById('mnauticas')
        var man = Number(mnauticas.value)
    }
    if(document.getElementById('leguas')){
        var leguas = document.getElementById('leguas')
        var leg = Number(leguas.value)
    }
    if(document.getElementById('rod')){
        var rod = document.getElementById('rod')
        var rodd = Number(rod.value)
    }
    var control = false

    if(!cmet && qmet && !met&& !pess && !pol && !mi && !jar && !man && !leg && !rodd && !control){
        met = qui * 1000
        cmet = met * 100
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true

    }

    if(cmet && !qmet && !met&& !pess && !pol && !mi && !jar && !man && !leg && !rodd && !control){
        met = cmet * 0.01
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true

    }


    if(!cmet && !qmet && met&& !pess && !pol && !mi && !jar && !man && !leg && !rodd && !control){
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && pess && !pol && !mi && !jar && !man && !leg && !rodd && !control){
        met = pess * 0.3048
        cmet = met * 100
        qmet = met * 0.001
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && !pess && pol && !mi && !jar && !man && !leg && !rodd && !control){
        met = pol * 0.0254
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true

    }
    else if(!met && !pess && !pol && mi && !jar && !man && !leg && !rodd && !control){
        met = mi * 1609.344
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && !pess && !pol && !mi && jar && !man && !leg && !rodd && !control){
        met = jar * 0.9144
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        man = met * 0.000539957
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && !pess && !pol && !mi && !jar && man && !leg && !rodd && !control){
        met = man * 1882
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        leg = met * 0.000207124
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && !pess && !pol && !mi && !jar && !man && leg && !rodd && !control){
        met = leg * 4828.03
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        rod = met * 0.198839
        exibir()
        control = true
    }
    else if(!met && !pess && !pol && !mi && !jar && !man && !leg && rodd && !control){
        met = rodd * 5.0292
        cmet = met * 100
        qmet = met * 0.001
        pess = met * 3.280839895
        pol = met * 39.3700787402
        mi = met * 0.000621371
        jar = met * 1.09361
        man = met * 0.000539957
        leg = met * 0.000207124
        exibir()
        control = true
    }
    else {
        erro_parametros_combinaveis()
        control = true
    }

    

    function exibir(){
        if(centimetros){
            centimetros.value = cmet.toFixed(2)
        }else{
            centimetros = document.getElementById('centimetros')
            centimetros.value = cmet.toFixed(2)
        }
        if(quilometros){
            quilometros.value = qmet.toFixed(2)
        }else{
            quilometros = document.getElementById('quilometros')
            quilometros.value = qmet.toFixed(2)
        }
        if(metros){
            metros.value = met.toFixed(2)
        }else{
            metros = document.getElementById('metros')
            metros.value = met.toFixed(2)
        }
        if(pes){
            pes.value = pess.toFixed(2)
        }
        else{
            pes = document.getElementById('pes')
            pes.value = pess.toFixed(2)
        }
        if(polegadas){
            polegadas.value = pol.toFixed(2)
    
        }else{
            polegadas = document.getElementById('polegadas')
            polegadas.value = pol.toFixed(2)  
        }
        if(milhas){
            milhas.value = mi.toFixed(2)
        }else{
            milhas = document.getElementById('milhas')
            milhas.value = mi.toFixed(2)
        }
        if(jardas){
            jardas.value = jar.toFixed(2)
            
        }else{
            jardas = document.getElementById('jardas')
            jardas.value = jar.toFixed(2)
        }
        if(mnauticas){
            mnauticas.value = man.toFixed(2)
        }else{
            mnauticas = document.getElementById('mnauticas')
            mnauticas.value = man.toFixed(2)
        }
        if(leguas){
            leguas.value = leg.toFixed(2)
        }else{
            leguas = document.getElementById('leguas')
            leguas.value = leg.toFixed(2)
        }
        if(rod){
            rod.value = rodd.toFixed(2)
        }else{
            rod = document.getElementById('rod')
            rod.value = rodd.toFixed(2)
        }
        

    }
    
}

function limpar(){
    if(centimetros){
        centimetros.value = null
    }
    if(quilometros){
        quilometros.value = null
    }
    if(metros){
        metros.value = null
    }
    if(pes){
        pes.value = null
    }
    if(polegadas){
        polegadas.value = null

    }
    if(milhas){
        milhas.value = null
    }
    if(area){
        area.value = null
        
    }
    if(mnauticas){
        mnauticas.value = null
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
    lblerroParametro.innerHTML = "Preencha somente um parâmetro !!!"
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros retornaram números negativos "
    campos.appendChild(lblnegativos)
}

