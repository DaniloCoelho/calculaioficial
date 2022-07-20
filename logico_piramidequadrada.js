var campos = document.getElementById('campos')
var x =0
var lblerro

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
    if(document.getElementById('apotemabase')){
        var apotemabase = document.getElementById('apotemabase')
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
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    
    }

    if(alt && lb && !control){
        apobase = lb / 2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true 
        exibir()  
    }
    if(alt && apobase && !control){
        lb = apobase *2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
        exibir()
    }
    if(alt && gtriz && !control){
        if(alt> gtriz){
            var lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a altura não pode ser maior que a geratriz "
            campos.appendChild(lblerro)
            control = true
        }else{
            apobase = ((gtriz)**2 - (alt)**2)**(1/2)
            lb = apobase *2
            arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
            fl = gtriz * apobase
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(alt && arestapi && !control){
        if(alt> arestapi){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a altura não pode ser maior que a aresta da pirâmide "
            campos.appendChild(lblerro)
            control = true
        }else{
            // sen de 45° 0,7071067812      cateto oposto = sen45° * hipotenusa
            x = ((arestapi**2) - (alt**2) )**(1/2)
            apobase = 0.70710678118654752440084436210485 * x
            lb = apobase *2
            gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
            fl = gtriz * apobase
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(alt && are && !control){
        lb = are**(1/2)
        apobase = lb / 2
        gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true
        exibir()

    }
    if(alt && fl && !control){
        if(alt > fl){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a altura não pode ser maior que a área da face lateral "
            campos.appendChild(lblerro)
            control = true
        }else{
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
            exibir()
            //gtriz = ((alt)**2 + (apobase)**2 )**(1/2)
            //x = fl / gtriz
        }
        

    }
    if(lb && gtriz && !control){
        apobase = lb / 2
        if(apobase> gtriz){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a apótema da base não pode ser maior que a geratriz"
            campos.appendChild(lblerro)
            control = true
        }else{
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
            fl = gtriz * apobase
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(lb && arestapi && !control){
        apobase = lb / 2
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        fl = gtriz * apobase
        are = lb**2
        control = true
        exibir()

    }
    if(lb && are && !control){
        lblerro = document.createElement('label')
        lblerro.id = "lblerro"
        lblerro.classList= "erro"
        lblerro.innerHTML = "Erro!! não é possível calcular todos os parãmetros somente com esses dois parâmetros"
        campos.appendChild(lblerro)
        control = true
    }
    if(lb && apobase && !control){
        lblerro = document.createElement('label')
        lblerro.id = "lblerro"
        lblerro.classList= "erro"
        lblerro.innerHTML = "Erro!! não é possível calcular todos os parãmetros somente com esses dois parâmetros"
        campos.appendChild(lblerro)
        control = true
    }
    if(lb && fl && !control){
        apobase = lb / 2
        gtriz = fl / apobase
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        are = lb**2
        control = true
        exibir()
    }
    if(gtriz && arestapi && !control){
        if(gtriz> arestapi){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a geratriz não pode ser maior que a aresta da pirâmide"
            campos.appendChild(lblerro)
            control = true
        }else{
            apobase =((arestapi)**2 - (gtriz)**2)**(1/2)
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            lb = apobase *2
            are = lb**2
            fl = gtriz * apobase
            control = true
            exibir()
        }
        
    }
    if(gtriz && are && !control){
        lb = are**(1/2)
        apobase = lb /2
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true
        exibir()
    }
    if(gtriz && apobase && !control){
        if(gtriz< apobase){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a geratriz não pode ser maior que a aresta pirâmide"
            campos.appendChild(lblerro)
            control = true
        }else{
            lb = apobase *2
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
            fl = gtriz * apobase
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(gtriz && fl && !control){
        if(gtriz> fl){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a geratriz não pode ser maior que a área da face lateral"
            campos.appendChild(lblerro)
            control = true
        }else{
            apobase = fl /gtriz
            arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            lb = apobase *2
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(arestapi && are && !control){
        lb = are**(1/2)
        apobase = lb /2
        gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        fl = gtriz * apobase
        control = true
        exibir()

    }
    if(arestapi && apobase && !control){
        if(apobase> arestapi){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a apótema da base não pode ser maior que a aresta pirâmide"
            campos.appendChild(lblerro)
            control = true
            
        }else{
            lb = apobase *2
            gtriz =((arestapi)**2 - (apobase)**2)**(1/2)
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            fl = gtriz * apobase
            are = lb**2
            control = true
            exibir()
        }
        
    }
    if(arestapi && fl && !control){
        if(fl < arestapi){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a área da face lateral não pode ser menor que a aresta pirâmide"
            campos.appendChild(lblerro)
            control = true
        }else{
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
            exibir()
        }
        
        
        
    }
    if(are && apobase && !control){
        lblerro = document.createElement('label')
        lblerro.id = "lblerro"
        lblerro.classList= "erro"
        lblerro.innerHTML = "Erro!! não é possível calcular todos os parãmetros somente com esses dois parâmetros"
        campos.appendChild(lblerro)
        control = true
    }
    if(are && fl && !control){
        lb = are**(1/2)
        apobase = lb /2
        gtriz = fl / apobase
        alt = ((gtriz)**2 - (apobase)**2)**(1/2)
        arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
        control = true
        exibir()
    }
    if(apobase && fl && !control){
        if(apobase > fl){
            lblerro = document.createElement('label')
            lblerro.id = "lblerro"
            lblerro.classList= "erro"
            lblerro.innerHTML = "Erro!! a apótema da base não pode ser maior que a área da face lateral"
            campos.appendChild(lblerro)
            control = true
        }else{
            gtriz = fl / apobase
            alt = ((gtriz)**2 - (apobase)**2)**(1/2)
            arestapi =((gtriz)**2 + (apobase)**2)**(1/2)
            lb = apobase *2
            are = lb**2
            control = true
            exibir()
        }
        
    }

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
            apotemabase = document.getElementById('apotemabase')
            apotemabase.value = apobase.toFixed(3)
        }
        if(flateral){
            flateral.value = fl.toFixed(3)
        }else{
            flateral = document.getElementById('flateral')
            flateral.value = fl.toFixed(3)
        }
        lblvolume = document.createElement('label')
        lblvolume.id = "lblvolume"
        lblvolume.innerHTML = "<br>Volume = "+((are*alt)/3).toFixed(3)+"u²"
        campos.appendChild(lblvolume)
      
    }
    
}

function limpar(){
    if(altura){
        altura.value = null
    }
    if(ladobase){
        ladobase.value = null
    }
    if(geratriz){
        geratriz.value = null
    }
    if(aresta){
        aresta.value = null
    }
    if(area){
        area.value = null  
    }
    if(flateral){
        flateral.value = null
    }
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(apotemabase){
        apotemabase.value = null
    }
    if(document.getElementById('lblvolume')){
        document.getElementById('lblvolume').remove()
    }
    
}

