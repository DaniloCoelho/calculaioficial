var campos = document.getElementById('campos')

function calcular(){
    if(document.getElementById('cateto_b')){
        var c_b = document.getElementById('cateto_b')
        var cb = Number(c_b.value)
    }
    if(document.getElementById('cateto_a')){
        var c_a = document.getElementById('cateto_a')
        var ca = Number(c_a.value)
    }
    if(document.getElementById('hipotenusa')){
        var hip = document.getElementById('hipotenusa')
        var hi = Number(hip.value)
    }
    if(document.getElementById('senoa')){
        var seno_a = document.getElementById('senoa')
        var sen_a = Number(seno_a.value)
    }
    if(document.getElementById('senob')){
        var seno_b = document.getElementById('senob')
        var sen_b = Number(seno_b.value)
    }
    if(document.getElementById('cossenoa')){
        var cosse_a = document.getElementById('cossenoa')
        var cos_a = Number(cosse_a.value)
    }
    if(document.getElementById('cossenob')){
        var cosse_b = document.getElementById('cossenob')
        var cos_b = Number(cosse_b.value)
    }
    if(document.getElementById('tangentea')){
        var tang_a = document.getElementById('tangentea')
        var tan_a = Number(tang_a.value)
    }
    if(document.getElementById('tangenteb')){
        var tang_b = document.getElementById('tangenteb')
        var tan_b = Number(tang_b.value)
    }
    if((hi && (tan_a || tan_b)|| tan_a && tan_b) && !cb && !ca && !sen_a && !sen_b && !cos_a && !cos_b){
        erro_parametros_combinaveis()
    }
    else if ((cb && (sen_a || cos_b)|| sen_a && cos_b)&& !hi && !tan_a && !tan_b && !ca && !sen_b && !cos_a){
        erro_parametros_combinaveis()//ok
    }
    else if((ca && (sen_b || cos_a)|| sen_b && cos_a)&& !hi && !tan_a && !tan_b && !cb && !sen_a && !cos_b){
        erro_parametros_combinaveis()
    }
    else if(!hi && !ca && !cb){
        erro_parametros_combinaveis()
    }
    else if(hi && hi < 0){
        erro_negativos()
    }
    else if(ca && ca<0){
        erro_negativos()
    }
    else if(cb && cb <0){
        erro_negativos()
    }
    else{
        for(var c = 1;c <=7;c++){
            //calcula a hipotenusa
            if (!hi && cb && ca ){ 
                var hi = ((ca**2)+(cb**2))**(1/2) 
            }else if (!hi && ca && sen_a){
                var hi = ca / sen_a
            }else if (!hi && cb && sen_b){
                var hi = cb / sen_b
            }else if (!hi && cb && cos_a){
                var hi = cb / cos_a
            }else if(!hi && ca && cos_b){
                var hi = ca/cos_b
            }
    
            //calcula o cateto a
            else if (!ca && cb && hi){ 
                if (hi<cb){
                    erro_hip_menor_cateto()
                    c = 8
                }else{
                    var ca = ((hi**2)-(cb**2))**(1/2) 
                }
            }else if (!ca && sen_a && hi){
                var ca = sen_a * hi 
            }else if (!ca && cos_b && hi){
                var ca = cos_b * hi
            }else if (!ca && cb && tan_a ){
                var ca = cb*tan_a
            }else if (!ca && cb && tan_b){
                var ca = cb/tan_b
            }
    
            // calcula o cateto b
            else if (!cb && ca && hi){
                if (hi < ca){
                    erro_hip_menor_cateto()
                    c = 8
                }else{
                    var cb = ((hi**2)-(ca**2))**(1/2)
                }
            }else if (!cb && sen_b && hi){
                var cb = sen_b * hi
            }else if (!cb && hi && cos_a){ 
                var cb = hi * cos_a
            }else if (!cb && ca && tan_a){
               var cb = ca / tan_a
            }else if (!cb && tan_b && ca){
                var cb = tan_b * ca
            }
            //calcula seno a
            else if (!sen_a && ca && hi){ // ca = sen a * hi 
                var sen_a = ca /hi           
            }
            //calcula seno b
            else if (!sen_b && cb && hi){ // cb = senb * hi
                var sen_b = cb /hi
            }
            //calcula cosseno a
            else if (!cos_a && cb && hi){ // hi = cb/cos a   cb = hi * cos a
                var cos_a = cb /hi
            }
            //calcula cosseno b
            else if (!cos_b && ca && hi){// hi = ca/cos_b   ca = cos_b * hi
                var cos_b = ca /hi
            }
            //calcula tangente a
            else if (!tan_a && ca && cb){ // cb = ca / tan_a   ca = cb*tan_a
                var tan_a = ca /cb
            }
            //calcula tangente b
            else if (!tan_b && ca && cb){ // cb = tan_b * ca   ca = cb/tan_b
                var tan_b = cb /ca
            }
        }
    
        area = (cb * ca /2).toFixed(3)
        hip.value = hi.toFixed(3)
        c_a.value = ca.toFixed(3)
        c_b.value = cb.toFixed(3)
        seno_a.value = sen_a.toFixed(3)
        seno_b.value = sen_b.toFixed(3)
        cosse_a.value = cos_a.toFixed(3)
        cosse_b.value = cos_b.toFixed(3)
        tang_a.value = tan_a.toFixed(3)
        tang_b.value = tan_b.toFixed(3)
        exibir_area()
    } 
}

function limpar(){
    document.getElementById('cateto_b').value = null
    document.getElementById('cateto_a').value = null
    document.getElementById('hipotenusa').value = null
    document.getElementById('senoa').value = null
    document.getElementById('senob').value = null
    document.getElementById('cossenoa').value = null
    document.getElementById('cossenob').value = null
    document.getElementById('tangentea').value = null
    document.getElementById('tangenteb').value = null
    document.getElementById('tr1').remove()
    

}
function erro_parametros_combinaveis(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.innerHTML = "Estes parâmetros não podem ser Calculados entre si!!!"
    campos.appendChild(lblerroParametro)
}
function erro_hip_menor_cateto(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.innerHTML = "Em um triângulo retangulo a hipotenusa não pode ser menor que uns dos catetos "
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! números negativos "
    campos.appendChild(lblnegativos)
}
function exibir_area(){
    var lblarea = document.createElement('label')
    var lblarea1 = document.createElement('label')
    var table1 = document.getElementById('table1')
    var tr1 = document.createElement('tr')
    tr1.id = "tr1"
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')

    lblarea.innerHTML = "A área é :"
    lblarea1.innerHTML = area + " u²"
    td1.appendChild(lblarea)
    td2.appendChild(lblarea1)
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    table1.appendChild(tr1)
}