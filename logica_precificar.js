var campos = document.getElementById('campos')
var decimo = 0
var ferias = 0
var ipva = 0
var licenciamento = 144.86
var somatotalano = []
var mesestrabalho = 0
var dias_trabalho_mes = 0
var somaano = 0
if(document.getElementById('ferias1530')){
    var opcoes = document.getElementById('ferias1530')
    var opcao = opcoes.value
}

function calcular(){
    opcao = opcoes.value
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
    
    if(document.getElementById('prevmensal')){
        var prevmensal = document.getElementById('prevmensal')
        var previsaomensal = Number(prevmensal.value)
    }
    if(document.getElementById('v_veiculo')){
        var v_veiculo = document.getElementById('v_veiculo')
        var valorveiculo = Number(v_veiculo.value)
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
        var vmensalcontas = Number(valormensalcontas.value)
    }
    
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
    var check20anos = document.getElementsByName('20anos')
    var checkrefeicao = document.getElementsByName('refeicao')

    
    dias_trabalho_mes = (diastrabalho * 4) + 2
    if(dias_trabalho_mes<=2){
        dias_trabalho_mes = 0
    }

    if(checkdecimo[0].checked){
        decimo = salpret
        somatotalano.push(decimo)
    }else if (checkdecimo[1].checked){
        decimo = 0
    }
    if(checkferias[0].checked){
        if(opcao == "15"){
            ferias = ((salpret/2)/3)+ (salpret/2)
            mesestrabalho = 11.5
            somatotalano.push(ferias)
            somatotalano.push(salpret * mesestrabalho)
        }else if(opcao == "30"){
            ferias = (salpret/3) + salpret
            mesestrabalho = 11
            somatotalano.push(salpret * mesestrabalho)
            somatotalano.push(ferias)
        }
    }else if(checkferias[1].checked){
        mesestrabalho = 12
        somatotalano.push(salpret * mesestrabalho)
        ferias = 0
        
    }
    if(checkprev[0].checked){
        previsaomensal = previsaomensal*12
        somatotalano.push(previsaomensal)
    }else if(checkprev[1].checked){
        previsaomensal = 0
    }
    if(checkveiculo[0].checked){
        if(check20anos[0].checked){
            somatotalano.push(licenciamento)
            somatotalano.push(valorveiculo * 0.05)//depreciação
        }else if(check20anos[1].checked){
            ipva = valorveiculo * 0.04
            somatotalano.push(licenciamento)
            somatotalano.push(valorveiculo * 0.05)//depreciação
            somatotalano.push(ipva)
        }
        if(checkseguro[0].checked){
            somatotalano.push(vseganual)
        }else if(checkseguro[1].checked){
            vseganual = 0
        }   
    }else if(checkveiculo[1].checked){
        licenciamento = 0
    }
    if(checklocomocao[0].checked){
        custodialocomocao = custodialocomocao * dias_trabalho_mes
        somatotalano.push((custodialocomocao * mesestrabalho))
        
    }else if(checklocomocao[1].checked){
        //custodialocomocao = 0
    }
    if(checkrefeicao[0].checked){
        custodiarefeicao = custodiarefeicao * dias_trabalho_mes
        somatotalano.push((custodiarefeicao * mesestrabalho))

    }else if(checkrefeicao[1].checked){
        custodiarefeicao = 0
    }
    if(checkajudante[0].checked){
        custodiafreelancer = custodiafreelancer * dias_trabalho_mes
        somatotalano.push((custodiafreelancer * mesestrabalho)) 
    }else if(checkajudante[1].checked){
        custodiafreelancer = 0
    }
    if(checkferramenta[0].checked){
        somatotalano.push((vmanumensal * mesestrabalho))
    }else if(checkferramenta[1].checked){
        vmanumensal = 0 
    }
    if(checkimovel[0].checked){
        somatotalano.push((vmensalimovel*12)) //12 pois todo mes paga
    }else if(checkimovel[1].checked){
        vmensalimovel = 0
    }
    if(checkcontas[0].checked){
        somatotalano.push((vmensalcontas*12))//12 pois todo mes paga
        
    }else if(checkcontas[1].checked){
        vmensalcontas = 0
    }
    for(var i = 0; i < ((somatotalano.length)); i++){
        somaano+= somatotalano[i]
    }
    if(salpret>0 && diastrabalho>0 && horastrabalho>0){
        document.getElementById('table1').style="display:none;"
        document.getElementById('titulo').innerHTML= "Valor a ser cobrado."
        document.getElementById('foto').style="display:none;"
        document.getElementById('btncalc').style="display:none;"
        //document.getElementById('btnlimpar').style="display:none;"
        document.getElementById('btnlimpar').value ="Voltar"
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('calculadora').appendChild(table);
    
        // Creating and adding data to first row of the table
        //criar um for
        let row1 = document.createElement('tr');
        row1.classList = "tabelaimpar"
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = " Item ";
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = " Valor total anual ";
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = " Valor mensal ";
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = " Valor diário ";
        let row_data_5 = document.createElement('td');
        row_data_5.innerHTML = " Valor por hora ";

        row1.appendChild(row_data_1);
        row1.appendChild(row_data_2);
        row1.appendChild(row_data_3);
        row1.appendChild(row_data_4);
        row1.appendChild(row_data_5);
        tbody.appendChild(row1);

        //valor total
        let row2 = document.createElement('tr');
        row2.classList = "tabelaprincipal"
        let row2_data_1 = document.createElement('td');
        row2_data_1.innerHTML = " Total ";
        let row2_data_2 = document.createElement('td');
        row2_data_2.innerHTML = somaano.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
        let row2_data_3 = document.createElement('td');
        row2_data_3.innerHTML = (somaano/12).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
        let row2_data_4 = document.createElement('td');
        row2_data_4.innerHTML = ((somaano/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
        let row2_data_5 = document.createElement('td');
        row2_data_5.innerHTML = (((somaano/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

        row2.appendChild(row2_data_1);
        row2.appendChild(row2_data_2);
        row2.appendChild(row2_data_3);
        row2.appendChild(row2_data_4);
        row2.appendChild(row2_data_5);
        tbody.appendChild(row2);
    ////salario/////////
        let row3 = document.createElement('tr');
        row3.classList = "tabelaimpar"
        let row3_data_1 = document.createElement('td');
        row3_data_1.innerHTML = " Salário ";
        let row3_data_2 = document.createElement('td');
        row3_data_2.innerHTML = (salpret*mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'});
        let row3_data_3 = document.createElement('td');
        row3_data_3.innerHTML = salpret.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'});
        let row3_data_4 = document.createElement('td');
        row3_data_4.innerHTML = (salpret/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
        let row3_data_5 = document.createElement('td');
        row3_data_5.innerHTML = ((salpret/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

        row3.appendChild(row3_data_1);
        row3.appendChild(row3_data_2);
        row3.appendChild(row3_data_3);
        row3.appendChild(row3_data_4);
        row3.appendChild(row3_data_5);

        tbody.appendChild(row3);

    //////decimo terceiro///////

        if(checkdecimo[0].checked){
            let row4 = document.createElement('tr');
            row4.classList = "tabelapar"
            let row4_data_1 = document.createElement('td');
            row4_data_1.innerHTML = "13° salário";
            let row4_data_2 = document.createElement('td');
            row4_data_2.innerHTML = decimo.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row4_data_3 = document.createElement('td');
            row4_data_3.innerHTML = (decimo/mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row4_data_4 = document.createElement('td');
            row4_data_4.innerHTML = ((decimo/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row4_data_5 = document.createElement('td');
            row4_data_5.innerHTML = (((decimo/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row4.appendChild(row4_data_1);
            row4.appendChild(row4_data_2);
            row4.appendChild(row4_data_3);
            row4.appendChild(row4_data_4);
            row4.appendChild(row4_data_5);

            tbody.appendChild(row4);

        }
        
        ////////ferias
        if(checkferias[0].checked){
            let row5 = document.createElement('tr');
            row5.classList = "tabelaimpar"
            let row5_data_1 = document.createElement('td');
            row5_data_1.innerHTML = "Férias";
            let row5_data_2 = document.createElement('td');
            row5_data_2.innerHTML = ferias.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row5_data_3 = document.createElement('td');
            row5_data_3.innerHTML = (ferias/mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row5_data_4 = document.createElement('td');
            row5_data_4.innerHTML = ((ferias/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row5_data_5 = document.createElement('td');
            row5_data_5.innerHTML = (((ferias/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row5.appendChild(row5_data_1);
            row5.appendChild(row5_data_2);
            row5.appendChild(row5_data_3);
            row5.appendChild(row5_data_4);
            row5.appendChild(row5_data_5);
            tbody.appendChild(row5);
        }
        /////previdencia

        if(checkprev[0].checked){
            let row6 = document.createElement('tr');
            row6.classList = "tabelapar"
            let row6_data_1 = document.createElement('td');
            row6_data_1.innerHTML = "Previdência";
            let row6_data_2 = document.createElement('td');
            row6_data_2.innerHTML = previsaomensal.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'});
            let row6_data_3 = document.createElement('td');
            row6_data_3.innerHTML = (previsaomensal/mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row6_data_4 = document.createElement('td');
            row6_data_4.innerHTML = ((previsaomensal/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row6_data_5 = document.createElement('td');
            row6_data_5.innerHTML = (((previsaomensal/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row6.appendChild(row6_data_1);
            row6.appendChild(row6_data_2);
            row6.appendChild(row6_data_3);
            row6.appendChild(row6_data_4);
            row6.appendChild(row6_data_5);
            tbody.appendChild(row6);
        }
        
        
        /////ipva + licenciamento

        if(checkveiculo[0].checked){
            let row7 = document.createElement('tr');
            row7.classList = "tabelaimpar"
            let row7_data_1 = document.createElement('td');
            row7_data_1.innerHTML = "IPVA + Licenciamento";
            let row7_data_2 = document.createElement('td');
            row7_data_2.innerHTML = (ipva + licenciamento).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_data_3 = document.createElement('td');
            row7_data_3.innerHTML = (((ipva + licenciamento)/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_data_4 = document.createElement('td');
            row7_data_4.innerHTML = (((ipva + licenciamento)/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_data_5 = document.createElement('td');
            row7_data_5.innerHTML = ((((ipva + licenciamento)/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row7.appendChild(row7_data_1);
            row7.appendChild(row7_data_2);
            row7.appendChild(row7_data_3);
            row7.appendChild(row7_data_4);
            row7.appendChild(row7_data_5);
            tbody.appendChild(row7);

            //depreciação

            let row7_1 = document.createElement('tr');
            row7_1.classList = "tabelapar"
            let row7_1_data_1 = document.createElement('td');
            row7_1_data_1.innerHTML = "Depreciação do automóvel";
            let row7_1_data_2 = document.createElement('td');
            row7_1_data_2.innerHTML = (valorveiculo * 0.05).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_1_data_3 = document.createElement('td');
            row7_1_data_3.innerHTML = (((valorveiculo * 0.05)/mesestrabalho)).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_1_data_4 = document.createElement('td');
            row7_1_data_4.innerHTML = (((valorveiculo * 0.05)/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row7_1_data_5 = document.createElement('td');
            row7_1_data_5.innerHTML = ((((valorveiculo * 0.05)/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row7_1.appendChild(row7_1_data_1);
            row7_1.appendChild(row7_1_data_2);
            row7_1.appendChild(row7_1_data_3);
            row7_1.appendChild(row7_1_data_4);
            row7_1.appendChild(row7_1_data_5);
            tbody.appendChild(row7_1);

            if(checkseguro[0].checked){
                ////seguro

                let row8 = document.createElement('tr');
                row8.classList = "tabelaimpar"
                let row8_data_1 = document.createElement('td');
                row8_data_1.innerHTML = "Seguro Automotivo";
                let row8_data_2 = document.createElement('td');
                row8_data_2.innerHTML = vseganual.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
                let row8_data_3 = document.createElement('td');
                row8_data_3.innerHTML = (vseganual/mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
                let row8_data_4 = document.createElement('td');
                row8_data_4.innerHTML = ((vseganual/mesestrabalho)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
                let row8_data_5 = document.createElement('td');
                row8_data_5.innerHTML = (((vseganual/mesestrabalho)/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

                row8.appendChild(row8_data_1);
                row8.appendChild(row8_data_2);
                row8.appendChild(row8_data_3);
                row8.appendChild(row8_data_4);
                row8.appendChild(row8_data_5);
                tbody.appendChild(row8);
            }
        }
        
        ////locomoção

        if(checklocomocao[0].checked){
            let row9 = document.createElement('tr');
            row9.classList = "tabelapar"
            let row9_data_1 = document.createElement('td');
            row9_data_1.innerHTML = "Locomoção";
            let row9_data_2 = document.createElement('td');
            row9_data_2.innerHTML = (custodialocomocao* mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row9_data_3 = document.createElement('td');
            row9_data_3.innerHTML = (custodialocomocao).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row9_data_4 = document.createElement('td');
            row9_data_4.innerHTML = ((custodialocomocao)/dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row9_data_5 = document.createElement('td');
            row9_data_5.innerHTML = ((custodialocomocao/dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row9.appendChild(row9_data_1);
            row9.appendChild(row9_data_2);
            row9.appendChild(row9_data_3);
            row9.appendChild(row9_data_4);
            row9.appendChild(row9_data_5);
            tbody.appendChild(row9);
        }
        ///refeição

        if(checkrefeicao[0].checked){
            let row10 = document.createElement('tr');
            row10.classList = "tabelaimpar"
            let row10_data_1 = document.createElement('td');
            row10_data_1.innerHTML = "Refeição";
            let row10_data_2 = document.createElement('td');
            row10_data_2.innerHTML = (custodiarefeicao * mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'});
            let row10_data_3 = document.createElement('td');
            row10_data_3.innerHTML = custodiarefeicao.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row10_data_4 = document.createElement('td');
            row10_data_4.innerHTML = (custodiarefeicao/ dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row10_data_5 = document.createElement('td');
            row10_data_5.innerHTML =  ((custodiarefeicao/ dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row10.appendChild(row10_data_1);
            row10.appendChild(row10_data_2);
            row10.appendChild(row10_data_3);
            row10.appendChild(row10_data_4);
            row10.appendChild(row10_data_5);
            tbody.appendChild(row10);
        }
        ////ajudante

        if(checkajudante[0].checked){
            let row11 = document.createElement('tr');
            row11.classList = "tabelapar"
            let row11_data_1 = document.createElement('td');
            row11_data_1.innerHTML = "Ajudante";
            let row11_data_2 = document.createElement('td');
            row11_data_2.innerHTML = (custodiafreelancer * mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row11_data_3 = document.createElement('td');
            row11_data_3.innerHTML = custodiafreelancer.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row11_data_4 = document.createElement('td');
            row11_data_4.innerHTML = (custodiafreelancer/ dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row11_data_5 = document.createElement('td');
            row11_data_5.innerHTML = ((custodiafreelancer/ dias_trabalho_mes)/ horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row11.appendChild(row11_data_1);
            row11.appendChild(row11_data_2);
            row11.appendChild(row11_data_3);
            row11.appendChild(row11_data_4);
            row11.appendChild(row11_data_5);
            tbody.appendChild(row11);
        }
        ////manutenção

        if(checkferramenta[0].checked){
            let row12 = document.createElement('tr');
            row12.classList = "tabelaimpar"
            let row12_data_1 = document.createElement('td');
            row12_data_1.innerHTML = "Manutenções ferramentas";
            let row12_data_2 = document.createElement('td');
            row12_data_2.innerHTML = (vmanumensal * mesestrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row12_data_3 = document.createElement('td');
            row12_data_3.innerHTML = vmanumensal.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row12_data_4 = document.createElement('td');
            row12_data_4.innerHTML = (vmanumensal/ dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row12_data_5 = document.createElement('td');
            row12_data_5.innerHTML = ((vmanumensal/ dias_trabalho_mes)/horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row12.appendChild(row12_data_1);
            row12.appendChild(row12_data_2);
            row12.appendChild(row12_data_3);
            row12.appendChild(row12_data_4);
            row12.appendChild(row12_data_5);
            tbody.appendChild(row12);
        }
        ////imovel
        if(checkimovel[0].checked){
            let row13 = document.createElement('tr');
            row13.classList = "tabelapar"
            let row13_data_1 = document.createElement('td');
            row13_data_1.innerHTML = "Imóvel";
            let row13_data_2 = document.createElement('td');
            row13_data_2.innerHTML = (vmensalimovel*12).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row13_data_3 = document.createElement('td');
            row13_data_3.innerHTML = vmensalimovel.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row13_data_4 = document.createElement('td');
            row13_data_4.innerHTML = (vmensalimovel/ dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row13_data_5 = document.createElement('td');
            row13_data_5.innerHTML = ((vmensalimovel/ dias_trabalho_mes)/ horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})

            row13.appendChild(row13_data_1);
            row13.appendChild(row13_data_2);
            row13.appendChild(row13_data_3);
            row13.appendChild(row13_data_4);
            row13.appendChild(row13_data_5);
            tbody.appendChild(row13);
        }
        /////agua,luz,telefonia

        if(checkcontas[0].checked){
            let row14 = document.createElement('tr');
            row14.classList = "tabelaimpar"
            let row14_data_1 = document.createElement('td');
            row14_data_1.innerHTML = "Água ,luz ,telefônia";
            let row14_data_2 = document.createElement('td');
            row14_data_2.innerHTML = (vmensalcontas*12).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row14_data_3 = document.createElement('td');
            row14_data_3.innerHTML = (vmensalcontas).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row14_data_4 = document.createElement('td');
            row14_data_4.innerHTML = (vmensalcontas / dias_trabalho_mes).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
            let row14_data_5 = document.createElement('td');
            row14_data_5.innerHTML = ((vmensalcontas / dias_trabalho_mes)/ horastrabalho).toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
    
            row14.appendChild(row14_data_1);
            row14.appendChild(row14_data_2);
            row14.appendChild(row14_data_3);
            row14.appendChild(row14_data_4);
            row14.appendChild(row14_data_5);
            tbody.appendChild(row14); 
        }

        document.createElement('br')
        document.getElementById('calculadora').appendChild(document.createElement('br'))
    }else{
        if(salpret<0 || diastrabalho <0 || horastrabalho <0){
            erro_negativos()
        }else if(!salpret || !diastrabalho || !horastrabalho){
            erro_parametros()
        }
    }
}
function limpar(){
    location.reload()
}
function displayvisible(x){
    x.style = "display:visible;"
}
function erro_negativos(){
    if(document.getElementById("parametrosnegativos")){
        document.getElementById("parametrosnegativos").remove()
    }
    if(document.getElementById("insira3parametros")){
        document.getElementById("insira3parametros").remove()
    }
    var lblnegativos = document.createElement('label')
    lblnegativos.classList= "erro"
    lblnegativos.innerHTML = "ERRO!! Insira parâmetros positivos"
    lblnegativos.id ="parametrosnegativos"
    campos.appendChild(lblnegativos)
}
function erro_parametros(){
    if(document.getElementById("insira3parametros")){
        document.getElementById("insira3parametros").remove()
    }
    if(document.getElementById("parametrosnegativos")){
        document.getElementById("parametrosnegativos").remove()
    }
    var lblparametros = document.createElement('label')
    lblparametros.classList= "erro"
    lblparametros.innerHTML = "ERRO!! Insira os parâmetros <br>Salário pretendido ,<br>Dias trabalhados por semana , <br>Horas trabalhadas por dia"
    lblparametros.id = "insira3parametros"
    campos.appendChild(lblparametros)
}
function displaynone(x){
    x.style = "display:none;"  
}
