var campos = document.getElementById('campos')
if(document.getElementById('opcoes')){
    var opcoes = document.getElementById('opcoes')
    var opcao = opcoes.value
}
var erroqtdd = 0
var vc = 0 
var kmlm = 0
var control = false

function calcular(){
    
    if(document.getElementById('kmr')){
        document.getElementById('kmr').remove()
    }
    if(document.getElementById('txt')){
        document.getElementById('txt').remove()
    }
    if(document.getElementById('txt1')){
        document.getElementById('txt1').remove()
    }
    
    opcao = opcoes.value
    if (opcao == "gasolina"){
        vc = 7.283
        kmlm = 11.98
    }
    if (opcao == "etanol"){
        vc = 5.539
        kmlm = 8.25
    }
    if(document.getElementById('Valorporlitro')){
        var v_l = document.getElementById('Valorporlitro')
        var vl = Number(v_l.value)
    }
    if(document.getElementById('Qtdddelitros')){
        var q_l = document.getElementById('Qtdddelitros')
        var ql = Number(q_l.value)
    }
    if(document.getElementById('Quilomêtros')){
        var quil = document.getElementById('Quilomêtros')
        var qui = Number(quil.value)
    }
    if(document.getElementById('Kmporlitro')){
        var km_l = document.getElementById('Kmporlitro')
        var kml = Number(km_l.value)
    }
    if(document.getElementById('Valortotal')){
        var v_tot = document.getElementById('Valortotal')
        var vtot = Number(v_tot.value)
    }
    if(kml){
        erroqtdd++
    }
    if(vl){
        erroqtdd++
    }
    if(vtot){
        erroqtdd++
    }
    if(ql){
        erroqtdd++
    }
    if(qui){
        erroqtdd++
    }
    teste_n_parametros()
    
    if (qui && vtot && ql && !vl && !kml){
        vl = vtot / ql
        kml = qui /ql
        exibir()
        control = true
    }
    if (qui && vtot && !ql){
        if(vl){
            ql = vtot / vl
            kml = qui / ql
        }else{
            if(kml){
                ql = qui / kml
                vl = vtot/ql
            }else{
                vl = vc
                ql = vtot / vl
                kml = qui / ql
            }
        }
        exibir()
        control = true
    }
    if(qui && ql && !vtot){
        kml = qui / ql
        if(vl){
            vtot = vl * ql
        }else{
            vl = vc
            vtot = vl * ql
        }
        exibir()
        control = true
    }
    if (vtot && ql && !qui){
        vl = vtot / ql
        if(kml){
            qui = kml * ql
        }else{
            kml = kmlm
            qui = kml * ql
        }
        exibir()
        control =  true
    }
    if (vtot && !qui && !ql){
        if (vl){
            ql = vtot / vl
        }else{
            vl = vc
            ql = vtot / vl
        }
        if(kml){
            qui = ql * kml
        }else{
            kml = kmlm
            qui = ql * kml
        }
        exibir()
        control = true
    }
    if (qui && !vtot && !ql){
        control = true
        if(kml){
            ql = qui / kml
        }else{
            kml = kmlm
            ql = qui / kml
        }
        if(vl){
            vtot = ql * vl
        }else{
            vl = vc
            vtot = ql * vl
        }
        exibir()
        
    }
    if (ql && !qui && !vtot){
        control = true
        if(vl){
            vtot = ql * vl
        }else{
            vl = vc
            vtot = ql * vl
        }
        if (kml){
            qui = ql * kml
        }else{
            kml = kmlm
            qui = ql * kml
        }
        exibir()
        
    }
    if(((vl && kml)||(!vl && kml)||(vl && !kml)) && !ql && !qui && !vtot){
        erroparametro()
        control = true 
    }

    function exibir(){
        if(!v_l){
            v_l = document.getElementById('Valorporlitro')
        }
        if(!q_l){
            q_l = document.getElementById('Qtdddelitros')
        }
        if(!quil){
            quil = document.getElementById('Quilomêtros')
        }
        if(!km_l){
            km_l = document.getElementById('Kmporlitro')
        }
        if(!v_tot){
            v_tot = document.getElementById('Valortotal')
        }
        quil.value = qui.toFixed(2)
        km_l.value = kml.toFixed(2)
        q_l.value = ql.toFixed(2)
        v_l.value = vl.toFixed(3)
        v_tot.value = vtot.toFixed(2)
        var kmr = document.createElement('label')
        kmr.id = "kmr"
        kmr.innerHTML = "Valor por quilômetro rodado R$" + (vtot / qui).toFixed(2)
        kmr.classList = "caixa"
        campos.appendChild(kmr)
    }
}
function limpar(){
    //location.reload()
    if(document.getElementById('Valorporlitro')){
        document.getElementById('Valorporlitro').value = null
        v_l = false
        vl = false
    }
    if(document.getElementById('Qtdddelitros')){
        document.getElementById('Qtdddelitros').value = null
        q_l = false
        ql = false
        
    }
    if(document.getElementById('Quilomêtros')){
        document.getElementById('Quilomêtros').value = null
        quil = false
        qui = false
        
    }
    if(document.getElementById('Kmporlitro')){
        document.getElementById('Kmporlitro').value = null
        km_l = false
        kml = false
        
    }
    if(document.getElementById('Valortotal')){
        document.getElementById('Valortotal').value = null
        v_tot = false
        vtot = false
        
    }
    if(document.getElementById('kmr')){
        document.getElementById('kmr').innerHTML = ""
        kmr = false
    }
    
    if(document.getElementById('txt')){
        document.getElementById('txt').innerHTML = ""
    }
    if(document.getElementById('txt1')){
        document.getElementById('txt1').innerHTML = ""
    }
    
}
function erroparametro(){
    var txt = document.createElement('label')
    txt.classList = "erro"
    txt.id = "txt"
    txt.innerHTML = "Não é possível realizar operação com esse parâmetro <br>"
    campos.appendChild(txt)
}
function teste_n_parametros(){
    var txt1 = document.createElement('label')
    txt1.id = "txt1"
    txt1.classList = "erro"
    if(erroqtdd>4){
        txt1.innerHTML = "Não é possível realizar  esta operação, insira no maximo 4 parâmetros. <br>"
        campos.appendChild(txt1)
        control = true
    }
    if(erroqtdd = 0){
        txt1.innerHTML = "Não é possível realizar esta operação, insira no minímo 1 parâmetros. <br>"
        campos.appendChild(txt1)
        control = true
    }
}

