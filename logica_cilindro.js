var campos = document.getElementById('campos')
var pi = 3.14159265359

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
    var control = false
    /*
       area da base = pi*r^2
       area da lateral = 2*pi *r * h
       area tot = 2*(pi*r^2) + 2*(pi*r*h)
       area tot - 2*(pi*r^2) = 2*(pi*r*h)
       (area tot - 2*(pi*r^2)) = ((2*pi )* (2*r)) * (2*h) 
       (area tot - 2*(pi*r^2))/((2*pi )* (2*r)) = 2*h
       (area tot - 2*(pi*r^2)/((2*pi )* (2*r)))/2 = h
       
       perimetro = 2* pi * r
       r = perimetro / 2*pi

       volume = pi* r^2 * h
       h = volume / pi * r^2
       r^2 = volume / pi* h
       
       r= d/2
       d= r*2


    */
    if((rai||dia) && alt && !per && !are && !vol && !control){
        if(!rai){
            rai = dia / 2
        }else{
            per = 2* pi * rai
            are = 2*(pi*(rai**2)) + 2*(pi*rai*alt)
            vol= pi* (rai**2) * alt
            dia = rai*2
        }
        exibir()
        control = true
    }
    if((rai||dia) && per && !alt && !are && !vol && !control){
        //erro
    }
    if((rai||dia) && are && !per && !alt && !vol && !control){
        if(!rai){
            rai = dia / 2
        }else{
            alt = ((are - (2*(pi*(rai**2))))/((2*pi )* (2*rai)))*2
            per = 2* pi * rai
            vol= pi* (rai**2) * alt
            dia = rai * 2
        }
        exibir()
        control = true
    }
    if(rai && dia && !are && !per && !alt && !vol && !control){
        //erro
    }
    if((rai||dia) && vol && !are && !per && !vol && !control){
        if(!rai){
            rai = dia / 2
        }else{
            alt = vol /(pi * (rai**2))
            dia = rai * 2
            per = 2* pi * rai
            are = 2*(pi*(rai**2)) + 2*(pi*rai*alt)
        }
        exibir()
        control = true
    }
    if(alt && per && !rai && !vol && !dia && !are && !control){
        rai = per / (2*pi)
        vol= pi* (rai**2) * alt
        dia = rai * 2
        are = 2*(pi*(rai**2)) + 2*(pi*rai*alt)
        exibir()
        control = true
    }
    if(alt && are && !rai && !vol && !dia && !per && !control){
        
    }
    if(alt && vol && !are && !rai && !dia && !per && !control){

    }
    if(per && are && !alt && !rai && !dia && !vol && !control){

    }
    if(per && vol && !alt && !rai && !dia && !are && !control){

    }
    if(per && vol && !alt && !rai && !dia && !are && !control){

    }
    if(per && vol && !alt && !rai && !dia && !are && !control){

    }
    if(are && vol && !alt && !rai && !dia && !per && !control){

    }
    
    /*
        rai || dia && alt  ok
        rai || dia && per  ok 
        rai || dia && are  ok
        rai || dia && vol  ok
        rai dia  falta msg de erro
        alt per  ok
        alt are  -
        alt vol  -
        per are  -
        per vol  -
        are vol

    */

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
        
    
    
    }
    
}

function limpar(){
    location.reload()
}
