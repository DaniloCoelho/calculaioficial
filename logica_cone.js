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

     /*
        ab = pi * r**2
        al = pi * r * g
        at = ab * al

        v= (1/3) * ab * h

        g**2 = a**2 + b**2

    */

    if((rai || dia || per) && (alt || ger) && !are && !vol && !control){
        if(alt){
            if(rai){
                per = 2* pi * rai
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol=  (1/3) * pi* (rai**2) * alt
                dia = rai*2
                ger = Math.sqrt(rai**2 + alt**2)
            }
            else if(dia){
                rai = dia / 2
                per = 2* pi * rai
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol= (1/3) * pi* (rai**2) * alt
                ger = Math.sqrt(rai**2 + alt**2)
            }else{
                rai = per / (2*pi)
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol= (1/3) * pi* (rai**2) * alt
                dia = rai*2
                ger = Math.sqrt(rai**2 + alt**2)
            }
        }else{
            if(rai){
                per = 2* pi * rai
                alt = Math.sqrt(ger**2 - rai**2)
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol=  (1/3) * pi* (rai**2) * alt
                dia = rai*2
                
            }
            else if(dia){
                rai = dia / 2
                per = 2* pi * rai
                alt = Math.sqrt(ger**2 - rai**2)
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol= (1/3) * pi* (rai**2) * alt
            }else{
                rai = per / (2*pi)
                alt = Math.sqrt(ger**2 - rai**2)
                are = (pi*(rai**2)) + (pi*rai*alt)
                vol= (1/3) * pi* (rai**2) * alt
                dia = rai*2
            }
        }
        
        if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
            erro_negativos()
        }else{
            exibir()
        }
        control = true
    }
    if(((rai && dia)||(per && (rai || dia))) && !ger && !alt && !are && !vol && !control){
        erro_parametros_combinaveis()
        control = true
    }
    if((rai||dia || per) && (vol ||are)  && !control){
        if(vol){///
            if(rai){
                alt = vol /((1/3)*pi * (rai**2))
                dia = rai * 2
                per = 2* pi * rai
                are = (pi*(rai**2)) + (pi*rai*alt)
                ger = Math.sqrt(rai**2 + alt**2)
            }
            else if(dia){
                rai = dia / 2
                alt = vol /((1/3)*pi * (rai**2))
                per = 2* pi * rai
                are = (pi*(rai**2)) + (pi*rai*alt)
                ger = Math.sqrt(rai**2 + alt**2)
            }else{
                rai = per / (2*pi)
                alt = vol /((1/3)*pi * (rai**2))
                dia = rai * 2
                are = (pi*(rai**2)) + (pi*rai*alt)
                ger = Math.sqrt(rai**2 + alt**2)
            }
        }
        else{
            if(rai){
                //are = (pi*(rai**2)) + (pi*rai*alt)
                //alt = are - (pi*(rai**2)) /pi * rai
                alt = (are - (pi*(rai**2)))/(pi*rai)
                per = 2* pi * rai
                vol=  (1/3) * pi* (rai**2) * alt
                dia = rai * 2
                ger = Math.sqrt(rai**2 + alt**2)

            }
            else if(dia){
                rai = dia / 2
                alt = ((are - (2*(pi*(rai**2))))/((2*pi )* (2*rai)))*2
                per = 2* pi * rai
                vol=  (1/3) * pi* (rai**2) * alt
                ger = Math.sqrt(rai**2 + alt**2)
            }else{
                rai = per / (2*pi)
                alt = ((are - (2*(pi*(rai**2))))/((2*pi )* (2*rai)))*2
                vol=  (1/3) * pi* (rai**2) * alt
                dia = rai * 2
                ger = Math.sqrt(rai**2 + alt**2)
            } 
        }
        if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
            erro_negativos()
        }else{
            exibir()
        }
        control = true
    }
    if((alt) && (are || vol) && !rai && !dia && !per && !control){
        if(vol){
            rai = Math.sqrt(vol/(1/3 * (pi * alt)))
            dia = rai * 2
            per = 2 * pi * rai
            are = (pi*(rai**2)) + (pi*rai*alt)
            ger = Math.sqrt(rai**2 + alt**2)
        }else{
            a = pi
            b = pi * alt
            c = are
            delta = (b ** 2)-(4 * a * (c * (-1)))
            rai = ((-b) + (Math.sqrt(delta))) / (2 * a)
            dia = rai * 2
            vol=  (1/3) * pi* (rai**2) * alt
            per = 2 * pi * rai
            ger = Math.sqrt(rai**2 + alt**2)
        }
       
        
        
        if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
            erro_negativos()
        }else{
            exibir()
        }
        control = true
        
    }
    if((are || vol || ger) && !alt && !rai && !dia && !per && !control){
        if(ger){
            if(vol){
                alt = ger * 0.8 
                rai = Math.sqrt(vol/(1/3 * (pi * alt)))
                dia = rai * 2
                per = 2 * pi * rai
                are = (pi*(rai**2)) + (pi*rai*alt)
            }else{
                alt = ger * 0.8 
                a = pi
                b = pi * alt
                c = are
                delta = (b ** 2)-(4 * a * (c * (-1)))
                rai = ((-b) + (Math.sqrt(delta))) / (2 * a)
                dia = rai * 2
                vol=  (1/3) * pi* (rai**2) * alt
                per = 2 * pi * rai
            }
            
            if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
                erro_negativos()
            }else{
                exibir()
                althipotetico()
            }

        }else{
            erro_parametros_combinaveis()
        }
        control = true
    }
    if((rai || dia || per) && (alt||ger) && !control){
        if(alt){
            if(rai){
                per = 2 * pi * rai
                dia = rai * 2
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
                ger = Math.sqrt(rai**2 + alt**2)
                
            }else if(dia){
                rai = dia / 2
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
                per = 2 * pi * rai
                ger = Math.sqrt(rai**2 + alt**2)
            }else{
                dia = rai * 2
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
                rai = per / (2*pi)
                ger = Math.sqrt(rai**2 + alt**2)
            }
        }else{
            if(rai){
                per = 2 * pi * rai
                dia = rai * 2
                alt = Math.sqrt(ger**2 + rai**2)
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
                
                
            }else if(dia){
                rai = dia / 2
                alt = Math.sqrt(ger**2 + rai**2)
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
                per = 2 * pi * rai
                
            }else{
                rai = per / (2*pi)
                dia = rai * 2
                alt = Math.sqrt(ger**2 + rai**2)
                vol=  (1/3) * pi* (rai**2) * alt
                are = (pi*(rai**2)) + (pi*rai*alt)
            }
        }
        
        if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
            erro_negativos()
        }else{
            exibir()
        }
        control = true
    }
    if(alt && ger && !are && !vol && !rai && !dia && !per && !control){
        rai = Math.sqrt((ger**2) - (alt**2))
        per = 2 * pi * rai
        dia = rai * 2
        vol=  (1/3) * pi* (rai**2) * alt
        are = (pi*(rai**2)) + (pi*rai*alt)

        if(rai <0 || dia<0 || per<0 || are<0 || alt<0 || vol<0 || ger<0){
            erro_negativos()
        }else{
            exibir()
        }
        control = true
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
        if(geratriz){
            geratriz.value = ger.toFixed(2)
        }else{
            geratriz = document.getElementById('geratriz')
            geratriz.value = ger.toFixed(2)
        }
        var areadabase = pi * (rai**2)
        var areadalateral = pi * rai * alt
        var lblareabase = document.createElement('label')
        lblareabase.classList= "caixa"
        lblareabase.innerHTML = "Área da base = " + areadabase.toFixed(2) + "u<sup>2<sup>" + "<br>"
        campos.appendChild(lblareabase)
        var lblarealateral = document.createElement('label')
        lblarealateral.classList= "caixa"
        lblarealateral.innerHTML = "Área da lateral = " + areadalateral.toFixed(2) + "u<sup>2<sup>"
        campos.appendChild(lblarealateral)

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
function althipotetico(){
    var lblhipotetico = document.createElement('label')
    lblhipotetico.classList= "erro"
    lblhipotetico.innerHTML = "<br>Com esses parâmetros utilizamos a altura hipotética do cone como 80% da medida da geratriz, pode haver até 1% de margem de erro "
    campos.appendChild(lblhipotetico)

}
