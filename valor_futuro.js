let valorinvestido = 0
let lucroLiquido = 0
let lucroBruto = 0
let valor = 0
let aporte = 0
let valorInvestidoLista=[]
let lucroBrutoLista=[]
let aporteLista =[]
let montanteLista=[]
let ca =0
let lucronomes=[]
let lmes =0
let control = false

function calcular(){

    if(document.getElementById('ValorInicial')){
        var v_i = document.getElementById('ValorInicial')
        var vi = Number(v_i.value)
    }
    if(document.getElementById('NMeses')){
        var n_m = document.getElementById('NMeses')
        var nm = Number(n_m.value)
    }
    if(document.getElementById('TxCrescimento')){
        var t_c = document.getElementById('TxCrescimento')
        var tc = Number(t_c.value)
    }
    if(document.getElementById('ValorAMensal')){
        var v_m = document.getElementById('ValorAMensal')
        var vm = Number(v_m.value)
    }
    if(document.getElementById('ValorAAnual')){
        var v_a = document.getElementById('ValorAAnual')
        var va = Number(v_a.value)
    }
    if(document.getElementById('MontanteTotal')){
        var m_t = document.getElementById('MontanteTotal')
        var mt = Number(m_t.value)
    }
    /////////teste parâmetro negativo////////
    if(mt){
        if(mt < 0){
            exibir_erro_negativo()
            control = true
        }
    }
    if(nm){
        if(nm < 0){
            exibir_erro_negativo()
            control = true
        }
    }
    if(tc){
        if(tc < 0){
            exibir_erro_negativo()
            control = true
        }
    }
    if(vi){
        if(vi< 0){
            exibir_erro_negativo()
            control = true
        }
    }
    if(vm){
        if(vm <0){
            exibir_erro_negativo()
            control = true
        }
    }
    if(va){
        if(va < 0){
            exibir_erro_negativo()
            control = true
        }
    }
    ///////montante///////////
    if(!mt && nm && tc && (vi||vm||va) && !control){ 
        tc = tc/100
        if(vi){
            mt = vi
            valorinvestido = vi
            aporte = vi
        }else{
            valorinvestido =0
            aporte = 0
        }
        ca = 1
        for(var c = 1;c < nm+1;c++){ 
            if(va && ca%12 == 0){
                mt += va
                valorinvestido += va 
                ca = 1
                aporte += va
            }
            if(vm){
                mt = (mt+vm)
                valorinvestido += vm
                aporte += vm
            }
            lmes = mt * tc   
            mt *= (1+tc) 
            ca+=1
            
            montanteLista.push(mt)
            valorInvestidoLista.push(valorinvestido) 
            aporteLista.push(aporte) 
            aporte = 0
            lucroBruto = mt - valorinvestido
            lucroBrutoLista.push(lucroBruto)
            lucronomes.push(lmes)
        }
        lucroBruto = mt - valorinvestido
        m_t.value = mt.toFixed(2)
        if(nm>=24){
            lucroLiquido = lucroBruto * 0.85 //ir 15%
        }else if (nm>= 12 && nm < 24){
            lucroLiquido = lucroBruto * 0.825 //ir 17,5%
        }else if(nm<12){
            lucroLiquido = lucroBruto * 0.80 //ir 17,5%
        }
        mt = null
        control = true
        exibir_lucro()
    }
    ////// numero de vezes//////
    if(!nm && tc && mt &&(vi||vm||va) && !control){
        nm = 0 
        if (vi){
            valor = vi
            valorinvestido += vi
        }
        tc = tc/100
        ca = 1
        while(valor < mt){
            if(va && ca%12 == 0){
                valor += va
                valorinvestido += va 
                ca = 1
            }
            if(vm){
                valor = (valor+vm)
                valorinvestido += vm
            }   
            valor *= (1+tc)
            ca+=1
            nm +=1
        }
        mt = 0
        for(var c = 1;c < nm+1;c++){ 
            if(va && ca%12 == 0){
                mt += va
                valorinvestido += va 
                ca = 1
                aporte += va
            }
            if(vm){
                mt = (mt+vm)
                valorinvestido += vm
                aporte += vm
            }  
            lmes = mt * tc 
            mt *= (1+tc) 
            ca+=1    
            montanteLista.push(mt)
            valorInvestidoLista.push(valorinvestido) 
            aporteLista.push(aporte) 
            aporte = 0
            lucroBruto = mt - valorinvestido
            lucroBrutoLista.push(lucroBruto)
            lucronomes.push(lmes)
        }
        lucroBruto = valor - valorinvestido
        n_m.value = nm
        m_t.value = valor.toFixed(2)
        if(nm>=24){
            lucroLiquido = lucroBruto * 0.85 //ir 15%
        }else if (nm>= 12 && nm < 24){
            lucroLiquido = lucroBruto * 0.825 //ir 17,5%
        }else if(nm<12){
            lucroLiquido = lucroBruto * 0.80 //ir 17,5%
        }
        exibir_lucro()
        control = true
    }   
    ////calcula capital inicial////
    if(!vi && tc && mt && nm && !control){
        tc = tc/100
        valorinvestido =0
        valor = 0
        ca = 1
        for(var c = 1;c < nm+1;c++){ 
            if(va && ca%12 == 0){
                valor += va 
                ca = 1  
            }
            if(vm){
                valor +=vm
            }   
            valor *= (1+tc) 
            ca+=1    

        }
        console.log(valor)
        mt -= valor
        vi = mt/((1+tc)**nm)
        console.log(vi)
        valorinvestido = vi
        mt = vi
        aporte = vi
        console.log(mt)

        ca = 0
        for(var c = 1;c < nm+1;c++){ 
            if(va && ca%12 == 0){
                mt+= va
                valorinvestido += va 
                ca = 1
                aporte += va
            }
            if(vm){
                mt= (mt+vm)
                valorinvestido += vm
                aporte += vm
            } 
            lmes = mt * tc  
            mt*= (1+tc) 
            ca+=1    
            montanteLista.push(mt)
            valorInvestidoLista.push(valorinvestido) 
            aporteLista.push(aporte) 
            aporte = 0
            lucroBruto = mt - valorinvestido
            lucroBrutoLista.push(lucroBruto)
            lucronomes.push(lmes)
        }
        lucroBruto = mt - valorinvestido
        v_i.value = vi.toFixed(2)
        m_t.value = mt.toFixed(2)

        if(nm>=24){
            lucroLiquido = lucroBruto * 0.85 //ir 15%
        }else if (nm>= 12 && nm < 24){
            lucroLiquido = lucroBruto * 0.825 //ir 17,5%
        }else if(nm<12){
            lucroLiquido = lucroBruto * 0.80 //ir 17,5%
        }
        exibir_lucro()
            for(var c = 1;c < nm+1;c++){

            }
        control = true    
    }
    /////calcula juros//////
    if(!tc && mt && (vi||vm ||va) && nm && !control){
        tc = 2
        let a = mt - 1
        let b = mt + 1
        ///teste

        if(vi){
            valor = vi
        }else{
            valor = 0
        }
        for(var c = 1;c < nm+1;c++){ 
            if(va && ca%12 == 0){
                valor += va
                ca = 1
            }
            if(vm){
                valor += vm
            }   
            //valor *= (1+tc) 
            ca+=1 
        }
        if(valor >= mt){
            t_c.value = 111111111111
        }else{
            while(valor < a || valor > b){
                if(vi){
                    valor = vi
                }else{
                    valor = 0
                }           
                for(var c = 1;c < nm+1;c++){ 
                    if(va && ca%12 == 0){
                        valor += va
                        ca = 1
                    }
                    if(vm){
                        valor += vm
                    }   
                    valor *= (1+tc) 
                    ca+=1 
                }
                if (valor < a ){
                    if(vi){
                        valor = vi
                    }else{
                        valor = 0
                    }
                    tc+=0.001
                    for(var c = 1;c < nm+1;c++){
                        if(va && ca%12 == 0){
                            valor += va
                            ca = 1
                        }
                        if(vm){
                            valor +=vm
                        }   
                        valor *= (1+tc) 
                        ca+=1 
                    }
                    if(valor > a){
                        tc-=0.001
                        while(valor < a){
                            if(vi){
                                valor = vi
                            }else{
                                valor = 0
                            }
                            tc += 0.0000001
                            for(var c = 1;c < nm+1;c++){ //teste
                                if(va && ca%12 == 0){
                                    valor += va
                                    ca = 1
                                }
                                if(vm){
                                    valor +=vm
                                }   
                                valor *= (1+tc) 
                                ca+=1 
                            }
                        }break
                    }
                }
                if (valor > b){
                    if(vi){
                        valor = vi
                    }else{
                        valor = 0
                    }
                    tc -= 0.001
                    for(var c = 1;c < nm+1;c++){
                        if(va && ca%12 == 0){
                            valor += va
                            ca = 1
                        }
                        if(vm){
                            valor +=vm
                        }   
                        valor *= (1+tc) 
                        ca+=1 
                    }
                    if(valor < b){
                        tc += 0.001
                        
                        while (valor > b){
                            if(vi){
                                valor = vi
                            }else{
                                valor = 0
                            }
                            tc -= 0.0000001
                            for(var c = 1;c < nm+1;c++){ //
                                if(va && ca%12 == 0){
                                    valor += va
                                    ca = 1
                                }
                                if(vm){
                                    valor +=vm
                                }   
                                valor *= (1+tc) 
                                ca+=1 
                            }
                        }break    
                    }
                }          
            }
            
            if(vi){
                mt = vi
            }else{
                mt = 0
            }
            for(var c = 1;c < nm+1;c++){ 
                if(va && ca%12 == 0){
                    mt += va
                    valorinvestido += va 
                    ca = 1
                    aporte += va
                }
                if(vm){
                    mt += vm
                    valorinvestido += vm
                    aporte += vm
                }
                lmes = mt * tc   
                mt *= (1+tc) 
                ca+=1    
                montanteLista.push(mt)
                valorInvestidoLista.push(valorinvestido) 
                aporteLista.push(aporte) 
                aporte = 0
                lucroBruto = mt - valorinvestido
                lucroBrutoLista.push(lucroBruto)
                lucronomes.push(lmes)
                }
                lucroBruto = valor - valorinvestido
                t_c.value = tc*100
                m_t.value = valor.toFixed(2)
                if(nm>=24){
                    lucroLiquido = lucroBruto * 0.85 //ir 15%
                }else if (nm>= 12 && nm < 24){
                    lucroLiquido = lucroBruto * 0.825 //ir 17,5%
                }else if(nm<12){
                    lucroLiquido = lucroBruto * 0.80 //ir 17,5%
                }
                exibir_lucro()
                control = true
        }
    }
    if(!control){
        erroParametros()
    }       
}
/////checa se existe o campo e valor e limpa/////
function limpar(){
    location.reload()
}
////exclui itens///////
function relatorio(){ 
    document.getElementById('table1').remove()
    document.getElementById('foto').remove()
    document.getElementById('Calcular').remove()
    document.getElementById('relatorio').remove()
    //troca nome do botão
    document.getElementById('limpar').value = "Voltar"

    //criar tr (linha), com parcelas e parcelas com IOF
    let table = document.createElement('table');
    table.id ="caixa"
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
 
    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('calculadora').appendChild(table);
    // Creating and adding data to first row of the table
    //criar um for
    let row = document.createElement('tr');
    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = " Mês ";
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = "Montante";
    let row_data_3 = document.createElement('td');
    row_data_3.innerHTML = " Aporte ";
    let row_data_4 = document.createElement('td');
    row_data_4.innerHTML = " Total investido ";
    let row_data_5 = document.createElement('td');
    row_data_5.innerHTML = " Lucro acumulado ";
    let row_data_6 = document.createElement('td');
    row_data_6.innerHTML = " Lucro no mês ";

    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    row.appendChild(row_data_4);
    row.appendChild(row_data_5);
    row.appendChild(row_data_6);


    tbody.appendChild(row);
    for(var c=0;c<=montanteLista.length-1;c++){
        if(c%2 == 0){
            let row_2 = document.createElement('tr')
            row_2.classList = "tabelapar"
            let row_2_data_1 = document.createElement('td')
            row_2_data_1.innerHTML = c+1+"°  "
            let row_2_data_2 = document.createElement('td')
            row_2_data_2.innerHTML = "  "+montanteLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"   "
            let row_2_data_3 = document.createElement('td')
            row_2_data_3.innerHTML = "  "+aporteLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_4 = document.createElement('td')
            row_2_data_4.innerHTML = "  "+valorInvestidoLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_5 = document.createElement('td')
            row_2_data_5.innerHTML = "  "+lucroBrutoLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_6 = document.createElement('td')
            row_2_data_6.innerHTML = "  "+lucronomes[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            
            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            row_2.appendChild(row_2_data_3);
            row_2.appendChild(row_2_data_4);
            row_2.appendChild(row_2_data_5);
            row_2.appendChild(row_2_data_6);
            tbody.appendChild(row_2);
        }
        if(c%2 != 0){
            let row_2 = document.createElement('tr')
            row_2.classList = "tabelaimpar"
            let row_2_data_1 = document.createElement('td')
            row_2_data_1.innerHTML = c+1+"°  "
            let row_2_data_2 = document.createElement('td')
            row_2_data_2.innerHTML = "  "+montanteLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"   "
            let row_2_data_3 = document.createElement('td')
            row_2_data_3.innerHTML = "  "+aporteLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_4 = document.createElement('td')
            row_2_data_4.innerHTML = "  "+valorInvestidoLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_5 = document.createElement('td')
            row_2_data_5.innerHTML = "  "+lucroBrutoLista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_6 = document.createElement('td')
            row_2_data_6.innerHTML = "  "+lucronomes[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            
            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            row_2.appendChild(row_2_data_3);
            row_2.appendChild(row_2_data_4);
            row_2.appendChild(row_2_data_5);
            row_2.appendChild(row_2_data_6);
            tbody.appendChild(row_2);
        }
   }
}
function voltar(){
    document.getElementById('relatorio').value = "ok"
}
function juros(){
    for(var c = 1;c < nm+1;c++){ 
        if(va && ca%12 == 0){
            valor += va
            ca = 1
        }
        if(vm){
            valor +=vm
        }   
        valor *= (1+tc) 
        ca+=1 
    }
}
function exibir_lucro(){
    var table1 = document.getElementById('table1')
    var tr1 = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var lblLucroBruto = document.createElement('label')
    lblLucroBruto.innerText = "Lucro Bruto"
    var resLucroBruto =document.createElement('label')
    resLucroBruto.innerHTML = lucroBruto.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
    var tr2 = document.createElement('tr')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var lblLucroLiquido = document.createElement('label')
    lblLucroLiquido.innerText = "Lucro Liquido"
    var resLucroLiquido =document.createElement('label')
    resLucroLiquido.innerHTML = lucroLiquido.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
    var tr3 = document.createElement('tr')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    var lblValorInvestido = document.createElement('label')
    lblValorInvestido.innerText = "Valor Investido"
    var resValorInvestido =document.createElement('label')
    resValorInvestido.innerHTML = valorinvestido.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

    td1.appendChild(lblLucroBruto)
    td2.appendChild(resLucroBruto)
    tr1.appendChild(td1)
    tr1.appendChild(td2)

    td3.appendChild(lblLucroLiquido)
    td4.appendChild(resLucroLiquido)
    tr2.appendChild(td3)
    tr2.appendChild(td4)

    td5.appendChild(lblValorInvestido)
    td6.appendChild(resValorInvestido)
    tr3.appendChild(td5)
    tr3.appendChild(td6)

    table1.appendChild(tr1)
    table1.appendChild(tr2)
    table1.appendChild(tr3)
}
function erroParametros(){
    var table1 = document.getElementById('table1')
    var tr1 = document.createElement('tr')
    var td1 = document.createElement('td')
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.innerText = "Insira no minimo 3 parâmetros"
    td1.appendChild(lblerroParametro)
    tr1.appendChild(td1)
    table1.appendChild(tr1)
}
function exibir_erro_negativo(){
    var table1 = document.getElementById('table1')
    var tr1 = document.createElement('tr')
    var td1 = document.createElement('td')
    var lblerroParametro = document.createElement('label')
    lblerroParametro.classList= "erro"
    lblerroParametro.innerText = "Este parâmetro não pode ser negativo!!!"
    td1.appendChild(lblerroParametro)
    tr1.appendChild(td1)
    table1.appendChild(tr1)
}
