var campos = document.getElementById('campos')
var x =0

function calcular(){
    if(document.getElementById('altura')){
        var altura = document.getElementById('altura')
        var alt = Number(altura.value)
    }
    if(document.getElementById('ladobase')){
        var ladobase = document.getElementById('ladobase')
        var lb = Number(ladobase.value)
    }
    if(document.getElementById('geratriz')){
        var geratriz = document.getElementById('geratriz')
        var gtriz = Number(geratriz.value)
    }
    if(document.getElementById('aresta')){
        var aresta = document.getElementById('aresta')
        var arestapi = Number(aresta.value)
    }
    if(document.getElementById('area')){
        var area = document.getElementById('area')
        var are = Number(area.value)
    }
    if(document.getElementById('apótemabase')){
        var apotemabase = document.getElementById('apótemabase')
        var apobase = Number(apotemabase.value)
    }
    if(document.getElementById('flateral')){
        var flateral = document.getElementById('flateral')
        var fl = Number(flateral.value)
    }
    var control = false

        // r = lb / 2
        // g² =(alt)² + (lb/2)²
        // ap² = (g)² + r²
        // fl = g * r
        // ab = lb²

    if(alt && lb && !control){
        apobase = lb / 2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true   
    }
    if(alt && apobase && !control){
        lb = apobase *2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
    }
    if(alt && gtriz && !control){
        if(alt> gtriz){
            //erro
        }
        apobase = ((gtriz)**2 - (alt)**2)**(1/2)
        lb = apobase *2
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
    }
    if(alt && arestapi && !control){
        if(alt> arestapi){
            //erro
        }
        // sen de 45° 0,7071067812      cateto oposto = sen45° * hipotenusa
        x = ((arestapi**2) - (alt**2) )**(1/2)
        apobase = 0.70710678118654752440084436210485 * x
        lb = apobase *2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true

    }
    if(alt && are && !control){
        lb = are**(1/2)
        apobase = lb / 2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true

    }
    if(alt && fl && !control){
        if(alt > fl){
            //erro
        }
        apobase = alt/2 
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        x = gtriz * apobase
        while((fl < x-0.001) || (fl > x+0.001)){
            gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
            x = gtriz * apobase
            if(fl > x){
                apobase += 0.0001
                if(fl < x){
                    apobase -= 0.0001
                    while(fl > x){
                        apobase += 0.0000001
                    }
                    break
                }
            }
            if(fl < x){
                apobase -= 0.0001
                if(fl > x){
                    apobase += 0.0001
                    while(fl < x){
                        apobase -= 0.0000001
                    }
                    break

                }
            }
        }
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        lb = apobase *2
        are = lb**2
        control = true
        //gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        //x = fl / gtriz

    }
    if(lb && gtriz && !control){
        apobase = lb / 2
        if(apobase> gtriz){
            //erro
        }
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
    }
    if(lb && arestapi && !control){
        apobase = lb / 2
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true

    }
    if(lb && are && !control){
        //ver
    }
    if(lb && apobase && !control){
        //ver
    }
    if(lb && fl && !control){
        apobase = lb / 2
        gtriz = fl / apobase
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        are = lb**2
        control = true
    }
    if(gtriz && arestapi && !control){
        if(gtriz> arestapi){
            //erro
        }
        apobase =((arestapi)**2 - (gtriz)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        lb = apobase *2
        are = lb**2
        fl = gtriz * apobase
        control = true
    }
    if(gtriz && are && !control){
        lb = are**(1/2)
        apobase = lb /2
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true
    }
    if(gtriz && apobase && !control){
        if(gtriz< apobase){
            //erro
        }
        lb = apobase *2
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
    }
    if(gtriz && fl && !control){
        if(gtriz> fl){
            //erro
        }
        apobase = fl /gtriz
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        lb = apobase *2
        are = lb**2
        control = true
    }
    if(arestapi && are && !control){
        lb = are**(1/2)
        apobase = lb /2
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true

    }
    if(arestapi && apobase && !control){
        if(apobase> arestapi){
            //erro
        }
        lb = apobase *2
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
    }
    if(arestapi && fl && !control){
        if(fl < arestapi){
            //erro
        }
        apobase = alt/2 
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        x = gtriz * apobase
        while((fl < x-0.001) || (fl > x+0.001)){
            gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
            x = gtriz * apobase
            if(fl > x){
                apobase += 0.0001
                if(fl < x){
                    apobase -= 0.0001
                    while(fl > x){
                        apobase += 0.0000001
                    }
                    break
                }
            }
            if(fl < x){
                apobase -= 0.0001
                if(fl > x){
                    apobase += 0.0001
                    while(fl < x){
                        apobase -= 0.0000001
                    }
                    break

                }
            }
        }
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        lb = apobase *2
        are = lb**2
        control = true
        
    }
    if(are && apobase){
        //nao da
    }
    if(are && fl && !control){
        lb = are**(1/2)
        apobase = lb /2
        gtriz = fl / apobase
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        control = true
    }
    if(apobase && fl && !control){
        if(apobase > fl){
            //erro
        }
        gtriz = fl / apobase
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        lb = apobase *2
        are = lb**2
        control = true
    }
    exibir()

    

    function exibir(){
        if(altura){
            altura.value = alt.toFixed(3)
        }else{
            altura = document.getElementById('altura')
            altura.value = alt.toFixed(3)
        }
        if(ladobase){
            ladobase.value = lb.toFixed(3)
        }
        else{
            ladobase = document.getElementById('ladobase')
            ladobase.value = lb.toFixed(3)
        }
        if(geratriz){
            geratriz.value = gtriz.toFixed(3)
    
        }else{
            geratriz = document.getElementById('geratriz')
            geratriz.value = gtriz.toFixed(3)
            
        }
        if(aresta){
            aresta.value = arestapi.toFixed(3)
        }else{
            aresta = document.getElementById('aresta')
            aresta.value = arestapi.toFixed(3)
        }
        if(area){
            area.value = are.toFixed(3)
            
        }else{
            area = document.getElementById('area')
            area.value = are.toFixed(3)
        }
        if(apotemabase){
            apotemabase.value = apobase.toFixed(3)
        }else{
            apotemabase = document.getElementById('apótemabase')
            apotemabase.value = apobase.toFixed(3)
        }
        if(flateral){
            flateral.value = fl.toFixed(3)
        }else{
            flateral = document.getElementById('flateral')
            flateral.value = fl.toFixed(3)
        }
      
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
