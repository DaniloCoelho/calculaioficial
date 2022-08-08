var campos = document.getElementById('campos')
if(document.getElementById('base')){
    var base = document.getElementById('base')
    var bas = Number(base.value)
}

//transforma campo para text para inserir hexadecimal
function opcaops(){
    let qq = base.value
    if(qq == 16){
        numero.type = "text"
    }else{
        numero.type = "number"
    }
}

var decimal = 0
var y = 0

function calcular(){
    if(document.getElementById('base')){
        var base = document.getElementById('base')
        var bas = Number(base.value)
    }
    
    if(document.getElementById('numero')){
        var numero = document.getElementById('numero')
        var num = numero.value
    }
    var control = false
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }
    
    let test = document.createElement('label')
    test.id = "test"
    let test1 = document.createElement('label')
    test1.id = "test1"
    let erro = document.createElement('label')
    erro.id = "erro"
    var resultado = []   
    var numa = []
     var x = ""
    if(bas == 16 && !control){
        
        for(var i = 0 ; i < num.length ; i++){
            if(!(!!+(num[i])) && num[i] != 0){
                x = num[i].toUpperCase()
                test1.classList= "erro"
                
                if(x != "A" && x != "B" && x !="C" && x !="D" && x !="E" && x !="F" && x !="G"){
                    erro.classList= "erro"
                    erro.innerHTML = x + " Não é um Hexadecimal"
                    campos.appendChild(erro)
                    control = true
                    break
                }
                else if(x == "A"){
                    numa.push(10)   
                }else if (x == "B"){
                    numa.push(11)
                }else if(x == "C"){
                    numa.push(12) 
                }else if (x == "D"){
                    numa.push(13) 
                }else if (x == "E"){
                    numa.push(14)
                }else if(x == "F"){
                    numa.push(15)
                }else if(x == "G"){
                    numa.push(16)
                }
            }else{
                numa.push(num[i])
            }
        }  
    }else{
        numa = num
    }
    if(!control){
        for(var d = 0; d < num.length ; d++){
            if(num[d] >= bas){
                erro.classList= "erro"
                erro.innerHTML += num[d] + " Não é da base " + bas
                campos.appendChild(erro)
                control = true
                break
            }
        }
    }
    //transformando para decimal , exemplo ->base 2[2³ 2² 2¹ 2°] * [x , x ,x ,x]
    if (!control){
        y = Number((numa.length) -1)
        for(var i = 0 ;i < numa.length ; i++){
            decimal = decimal + (bas**y)* numa[i]
            y = y - 1
        }
    }
    //transformar decimal nas outras bases
    if(!control){
        y = decimal
        var str = ""
        let table = document.createElement('table');
        table.id ="caixa"
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        for(var i = 2; i < 17 ; i++){
            bas = i
            y = decimal

            while(y >= bas){
                resultado.push(y % bas)
                y = Math.floor(y/bas)
            }
            resultado.push(y)
            //juntar
            for(var e = (resultado.length -1) ; e > -1 ; e--){
                if(bas == 16){
                    if(resultado[e] == 10 ){
                        resultado[e] = "A"
                    }
                    if(resultado[e] == 11){
                        resultado[e] = "B"
                    }
                    if(resultado[e] == 12){
                        resultado[e] = "C"
                    }
                    if(resultado[e] == 13){
                        resultado[e] = "D"
                    }
                    if(resultado[e] == 14){
                        resultado[e] = "E"
                    }
                    if(resultado[e] == 15){
                        resultado[e] = "F"
                    }
                }
                str += resultado[e]
            }
            str.toString()

            if(i%2 == 0){
                let row_2 = document.createElement('tr')
                row_2.classList = "tabelapar"
                let row_2_data_1 = document.createElement('td')
                row_2_data_1.innerHTML = str
                let row_2_data_2 = document.createElement('td')
                row_2_data_2.innerHTML = " base " + bas
                row_2.appendChild(row_2_data_1);
                row_2.appendChild(row_2_data_2);
                tbody.appendChild(row_2);
            }
            if(i%2 != 0){
                let row_2 = document.createElement('tr')
                row_2.classList = "tabelaimpar"
                let row_2_data_1 = document.createElement('td')
                row_2_data_1.innerHTML = str
                let row_2_data_2 = document.createElement('td')
                row_2_data_2.innerHTML = " base " + bas
                row_2.appendChild(row_2_data_1);
                row_2.appendChild(row_2_data_2);
                tbody.appendChild(row_2);
            }
            if(bas == 10){
                i += 5
            }
            resultado = []
            str = ""
        }
        table.appendChild(thead);
        table.appendChild(tbody);
        campos.appendChild(table);
    }
    
}

function limpar(){
    //location.reload()
    if(base){
        base.value = null
        bas = false
    }
    if(numero){
        numero.value = null
        num = null
    }
    if(document.getElementById('lblerro')){
        document.getElementById('lblerro').remove()
    }
    if(document.getElementById('lblparametro')){
        document.getElementById('lblparametro').remove()
    }
    if(document.getElementById('caixa')){
        document.getElementById('caixa').remove()
    }
    if(document.getElementById('erro')){
        document.getElementById('erro').remove()
    }
    if(document.getElementById('test1')){
        document.getElementById('test1').remove()
    }
    if(document.getElementById('test')){
        document.getElementById('test').remove()
    }

}
function erro_parametros_combinaveis(){
    var lblerroParametro = document.createElement('label')
    lblerroParametro.id = "lblparametro"
    lblerroParametro.classList= "erro"
    lblerroParametro.innerHTML = "Erro !!! Insira um parâmetro válido."
    campos.appendChild(lblerroParametro)
}
function erro_negativos(){
    var lblnegativos = document.createElement('label')
    lblnegativos.id = "lblerro"
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "Erro!! Parametros negativos "
    campos.appendChild(lblnegativos)
}
