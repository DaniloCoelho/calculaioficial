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
    
    opcao = opcoes.value
    if (opcao == "gasolina"){
        vc = 7.267
        kmlm = 11
    }
    if (opcao == "etanol"){
        vc = 4,646
        kmlm = 8
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
    if (vl && ql && !vtot && !qui && !control){
        vtot = vl * ql
        if (kml){
            qui = ql * kml
        }else{
            kml = kmlm
            qui = ql * kml
        }
        quil.value = qui
        km_l.value = kml
        v_tot.value = vtot.toFixed(2)
        control = true
    }
    if (vl && vtot && !ql && !qui  && !control){
        ql = vtot / vl
        if (kml){
            qui = ql * kml
        }else{
            kml = kmlm
            qui = ql * kml
        }
        quil.value = qui
        km_l.value = kml
        q_l.value = ql
        control = true
    }
    if (vtot && ql && !vl && !qui  && !control){
        vl = vtot / ql
        if (kml){
            qui = ql * kml
        }else{
            kml = kmlm
            qui = ql * kml
        }
        quil.value = qui
        km_l.value = kml
        v_l.value = vl
        control = true
    }
    /// ql qui
    if (ql && qui && !vtot  && !control){
        if (vl){
            vl = vl   
        }else{
            vl = vc
        }
        if(kml){
            vtot = vl * ql
        }else{
            kml = qui / ql
            vtot = vl * ql
        }
        km_l.value = kml
        v_tot.value = vtot.toFixed(2)
        control = true
    }
    if (ql && qui && !vl  && !control){
        if (vtot){
            vtot = vtot
        }else{
            vtot = vc * ql
        }
        if(kml){
            kml = kml
        }else{
            kml = qui / ql
        }
        v_l.value = vl
        km_l.value = kml
        v_tot.value = vtot.toFixed(2)
        control = true
    }
    if (qui && kml && !ql  && !control){
        ql = qui / kml
        if (vl && !vtot){
            vtot = vl *ql
        }
        if (!vl && vtot){
           vl = vtot / ql
        }
        if (!vl && !vtot){
            vl =vc
            vtot = vl * ql
        }
        v_l.value = vl
        v_tot.value = vtot.toFixed(2)
        q_l.value = ql
        control = true

    }
    if (ql && kml && !qui  && !control){
        qui = ql * kml
        if (vl && !vtot){
            vtot = vl *ql
        }
        else if (!vl && vtot){
           vl = vtot / ql
        }
        else if (!vl && !vtot){
            vl = vc
            vtot = vl * ql
        }
        v_l.value = vl
        v_tot.value = vtot.toFixed(2)
        quil.value = qui
        control = true
    }
    if (kml && vtot && !qui && !ql){
        if (vl){
            ql = vtot / vl
        }else{
            vl = vc
            ql = vtot / vl
        }
        qui = ql * kml
        v_l.value = vl
        q_l.value = ql.toFixed(2)
        quil.value = qui
        control = true
    }
    if (qui && vl && !ql) {
        if (kml){
            ql = qui / kml
        }else{
            kml = kmlm
            ql = qui /kml
        }
        vtot = ql * vl
        v_tot.value.vtot.toFixed(2)
        km_l.value = kml
        q_l.value = ql.toFixed(2)
        control = true
    } 
    if (qui && vtot && !!ql){
        if (kml){
            ql = qui / kml
        }else{
            kml = kmlm
            ql = qui / kml
        }
        if (vl){
            vl = vl
        }else{
            vl = vtot / ql
        }
        vtot = ql * vl
        km_l.value = kml
        q_l.value = ql.toFixed(3)
        v_l.value = vl.toFixed(3)
        control = true
    }
    if (kml && vl && !vtot && !ql && !qui){
        erroparametro()
        control = true
    }
}
function limpar(){
    location.reload()
}
function erroparametro(){
    var txt = document.createElement('label')
    txt.classList = "erro"
    txt.innerHTML = "Não é possível realizar operação com esses dois parâmetros. "
    campos.appendChild(txt)
}
function teste_n_parametros(){
    var txt = document.createElement('label')
    txt.classList = "erro"
    if(erroqtdd>=4){
        txt.innerHTML = "Não é possível realizar operação insira no maximo 3 parâmetros. "
        campos.appendChild(txt)
    }
    if(erroqtdd<=1){
        txt.innerHTML = "Não é possível realizar esta operação, insira no minímo 2 parâmetros. "
        campos.appendChild(txt)
    }
    
}