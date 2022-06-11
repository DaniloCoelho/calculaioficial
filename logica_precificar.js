var campos = document.getElementById('campos')
var decimo = 0
var ferias = 0
var somatotalano = 0

function calcular(){
    if(document.getElementById('salariopretendido')){
        var salariopretendido = document.getElementById('salariopretendido')
        var salpret = Number(salariopretendido.value)
    }
    if(document.getElementById('diasdetrabalho')){
        var diasdetrabalho = document.getElementById('diasdetrabalho')
        var diastrabalho = Number(diasdetrabalho.value)
    }
    if(document.getElementById('horasdetrabalho')){
        var horasdetrabalho = document.getElementById('horasdetrabalho')
        var horastrabalho = Number(horasdetrabalho.value)
    }
    if(document.getElementById('diasdeferias')){
        var diasdeferias = document.getElementById('diasdeferias')
        var diasferias = Number(diasdeferias.value)
    }
    if(document.getElementById('prevmensal')){
        var prevmensal = document.getElementById('prevmensal')
        var previsaomensal = Number(prevmensal.value)
    }
    if(document.getElementById('v_veiculo')){
        var v_veiculo = document.getElementById('v_veiculo')
        var valorveiculo = Number(v_veiculo.value)
    }
    if(document.getElementById('a_carro')){
        var a_carro = document.getElementById('a_carro')
        var anocarro = Number(a_carro.value)
    }
    if(document.getElementById('v_seg_anual')){
        var v_seg_anual = document.getElementById('v_seg_anual')
        var vseganual = Number(v_seg_anual.value)
    }
    if(document.getElementById('custodiariolocomocao')){
        var custodiariolocomocao = document.getElementById('custodiariolocomocao')
        var custodialocomocao = Number(custodiariolocomocao.value)
    }
    if(document.getElementById('custodiariorefeicao')){
        var custodiariorefeicao = document.getElementById('custodiariorefeicao')
        var custodiarefeicao = Number(custodiariorefeicao.value)
    }
    if(document.getElementById('custodiariofreelancer')){
        var custodiariofreelancer = document.getElementById('custodiariofreelancer')
        var custodiafreelancer = Number(custodiariofreelancer.value)
    }
    if(document.getElementById('valormanumensal')){
        var valormanumensal = document.getElementById('valormanumensal')
        var vmanumensal = Number(valormanumensal.value)
    }
    if(document.getElementById('valormensalimovel')){
        var valormensalimovel = document.getElementById('valormensalimovel')
        var vmensalimovel = Number(valormensalimovel.value)
    }
    if(document.getElementById('valormensalcontas')){
        var valormensalcontas = document.getElementById('valormensalcontas')
        var valormensalcontas = Number(valormensalcontas.value)
    }
    var control = false
    var checkdecimo = document.getElementsByName('decimo')
    var checkferias = document.getElementsByName('ferias')
    var checkprev = document.getElementsByName('previdencia')
    var checkveiculo = document.getElementsByName('veiculo')
    var checkseguro = document.getElementsByName('seguro')
    var checklocomocao = document.getElementsByName('locomocao')
    var checkajudante = document.getElementsByName('ajudante')
    var checkferramenta = document.getElementsByName('ferramenta')
    var checkimovel = document.getElementsByName('imovel')
    var checkcontas = document.getElementsByName('contas')


    if(checkdecimo[0].checked){
        decimo = salpret
    }else if(checkdecimo[1].checked){
        decimo = 0
    }
    if(checkferias[0].checked){
        ferias = (salpret/3)+ salpret
        somatotalano = (salpret * 11)
    }else if(checkferias[1].checked){
        ferias = 0
        somatotalano = (salpret * 12)
    }
    if(checkprev[0].checked){
        previsaomensal = previsaomensal*12
    }else if(checkprev[1].checked){
        previsaomensal = 0
    }
    if(checkveiculo[0].checked){
        
    }else if(checkveiculo[1].checked){
        
    }
    if(checkseguro[0].checked){
        
    }else if(checkseguro[1].checked){
        
    }
    if(checklocomocao[0].checked){
        
    }else if(checklocomocao[1].checked){
        
    }
    if(checkajudante[0].checked){
        
    }else if(checkajudante[1].checked){
        
    }
    if(checkferramenta[0].checked){
        
    }else if(checkferramenta[1].checked){
        
    }
    if(checkimovel[0].checked){
        
    }else if(checkimovel[1].checked){
        
    }
    if(checkcontas[0].checked){
        
    }else if(checkcontas[1].checked){
        
    }

    somatotalano = somatotalano + decimo + ferias + previsaomensal
    




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

}
function limpar(){
    location.reload()
}
function displayvisible(x){
    x.style = "display:visible;"
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros retornaram números negativos "
    campos.appendChild(lblnegativos)
}
function displaynone(x){
    x.style = "display:none;"  
}
