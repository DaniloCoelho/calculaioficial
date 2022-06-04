let parcelas = []
let parcelasiof =[]
let valor_presente = 0
let valor_juros = 0
let valor_juros_lista =[]
let amortizacao = 0
let amortização =[]
let iof_dia = 0
let iof_dia_lista = []
let percentual_dia = 0
let iof_total = 0
let cet = 0
let parcelas_com_iof = 0
let juro_parcelaiof = 0
let amortizacaoiof = 0
let pv = 0 // valor presente
let juro_parcela = 0
let pviof = 0 //valor presente iiof
let vpiof = 0//valor prestação iof
let c = 0
let mt =0
var m_t = document.getElementById('MontanteTotal')
var valor_parcela_iof = document.getElementById('ValorParcelaIOF')
var valor_parcela= document.getElementById('Valor_Parcela')
var iof= document.getElementById('IOF')
var piof= document.getElementById('PIOF')
var custoet= document.getElementById('CET')
var control = false
if(document.getElementById('opcoes')){
    var opcoes = document.getElementById('opcoes')
    var opcao = opcoes.value
}

function calcular(){

    opcao = opcoes.value

    if(document.getElementById('ValorFinanciado')){
        var v_f = document.getElementById('ValorFinanciado')
        var vf = Number(v_f.value)
    }
    if(document.getElementById('Nparcelas')){
        var n_p = document.getElementById('Nparcelas')
        var np = Number(n_p.value)
    }
    if(document.getElementById('TxJuros')){
        var t_j = document.getElementById('TxJuros')
        var tj = Number(t_j.value)
    }
    if(document.getElementById('ValorParcela')){
        var v_p = document.getElementById('ValorParcela')
        var vp = Number(v_p.value)
    }
    if(document.getElementById('Taxaadicional')){
        var t_a = document.getElementById('Taxaadicional')
        var ta = Number(t_a.value)
    }
    
        
    if (opcao == "price"){
        /////////calcular capital/////////////
        if(!vf && np && tj && vp){
            tj = tj/100
            let vf = 0
            vf = vp*((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            mt = vp * np
            v_f.value = vf.toFixed(2)
            valor_presente = vf
            valor_juros = 0
            amortizacao = 0
            iof_dia = 0
            /////calcula iof/////////
            for(var c = 1;c <= np;c++){
                valor_juros = valor_presente * tj
                amortizacao = vp - valor_juros
                valor_presente = valor_presente - amortizacao
                
                percentual_dia = c*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
                amortização.push(amortizacao)
                valor_juros_lista.push(valor_juros)
                iof_dia_lista.push(iof_dia)
                parcelas.push(vp)

            }
            iof_total = (vf * (0.38/100)) + iof_dia
            cet = mt + iof_total
            parcelas_com_iof = (vf+iof_total)/((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            for(var c = 1;c <= np;c++){
                parcelasiof.push(parcelas_com_iof)
            }
            if(ta){
                vf-=ta
            }
            cet = 2
            let a = (vf/parcelas_com_iof) - 0.005
            let b = (vf/parcelas_com_iof) + 0.005
            let x = (1-(1/((1+cet)**np)))/cet
            while(x < a){
                if(x < a){       
                    cet -= 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x > a){
                        cet += 0.001
                        cet -= 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x>a){
                            cet += 0.00001
                            while (x<a){
                                cet -= 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }                       
                    }
                }else if(x > b){
                    cet += 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x < b){
                        cet -= 0.001
                        cet += 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x<a){
                            cet -= 0.00001
                            while (x>a){
                                cet += 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }
                    }
                }
            }
            exibir_price()
            v_f.value = vf.toFixed(2)   
        }
        /////calcular prestação/////////// tj!= 1
        else if(!vp && tj && np && vf){
            if(tj == 1){
                tj += 0,0000001
            }
            tj = tj/100
            if(ta){
                vf+=ta
            }
            vp = vf/((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            mt = vp * np
            
            valor_presente = vf
            valor_juros = 0
            amortizacao = 0
            iof_dia = 0
            ////calcula IOF////////////////
            for(var c = 1;c <= np;c++){
                valor_juros = valor_presente * tj
                amortizacao = vp - valor_juros
                valor_presente = valor_presente - amortizacao
                percentual_dia = c*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
                amortização.push(amortizacao)
                valor_juros_lista.push(valor_juros)
                iof_dia_lista.push(iof_dia)
                parcelas.push(vp)
            }
            iof_total = (vf * (0.38/100)) + iof_dia
            cet = mt + iof_total
            parcelas_com_iof = (vf+iof_total)/((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            for(var c = 1;c <= np;c++){
                parcelasiof.push(parcelas_com_iof)
            }
            ///////calcula CET/////////////////////
            if(ta){
                vf = vf -ta
            }
            cet = 2
            a = (vf/parcelas_com_iof) - 0.005
            b = (vf/parcelas_com_iof) + 0.005
            x = (1-(1/((1+cet)**np)))/cet
            while(x < a){
                if(x < a){       
                    cet -= 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x > a){
                        cet += 0.001
                        cet -= 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x>a){
                            cet += 0.00001
                            while (x<a){
                                cet -= 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }                       
                    }
                }else if(x > b){
                    cet += 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x < b){
                        cet -= 0.001
                        cet += 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x<a){
                            cet -= 0.00001
                            while (x>a){
                                cet += 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }
                    }
                }
            }
            exibir_price()
            v_p.value = vp.toFixed(2)
        }
        ////////// calcula numero de parcelas Price///////
        else if (!np && vf && tj && vp){
            if(tj==1){
                tj+= 0.0000001
            }
            tj = tj/100
            if(ta){
                vf+=ta
            }
            let np = 12
            a = (vf/vp) -0.01
            b = (vf/vp) +0.01
            x = (1-(1/((1+tj)**np)))/tj
            while (x < a || x > b){
                if(np > 10000){
                    np = 10001
                    break
                }
                if(x < a){
                    np+=2
                    x = (1-(1/((1+tj)**np)))/tj
                    if(x > a){
                        np-=2
                        np+=0.01
                        x = (1-(1/((1+tj)**np)))/tj
                        if(x>a){
                            np-=0.01
                            x = (1-(1/((1+tj)**np)))/tj
                            while(x<a){
                                np+=0.000000001
                                x = (1-(1/((1+tj)**np)))/tj
                            }                      
                        }
                    }                   
                }else if(x > b){
                    np -= 2
                    x = (1-(1/((1+tj)**np)))/tj
                    if(x < b){
                        np += 2
                        np -= 0.01
                        x = (1-(1/((1+tj)**np)))/tj
                        if(x<b){
                            np += 0.01
                            x = (1-(1/((1+tj)**np)))/tj
                            while(x>b){
                                np -= 0.000000001
                                x = (1-(1/((1+tj)**np)))/tj
                            }   
                        }
                    }
                }
            }
            mt = vp * np
            valor_presente = vf
            valor_juros = 0
            amortizacao = 0
            iof_dia = 0
            /////////calcula IOF/////////////////
            for(var c = 1;c <= np;c++){
                valor_juros = valor_presente * tj
                amortizacao = vp - valor_juros
                valor_presente = valor_presente - amortizacao
                percentual_dia = c*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
                amortização.push(amortizacao)
                valor_juros_lista.push(valor_juros)
                iof_dia_lista.push(iof_dia)
                parcelas.push(vp)
            }
            iof_total = (vf * (0.38/100)) + iof_dia
            parcelas_com_iof = (vf+iof_total)/((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            for(var c = 1;c <= np;c++){
                parcelasiof.push(parcelas_com_iof)
            }
            /////////calcula CET/////////////
            if(ta){
                vf = vf -ta
            }
            cet = 2
            a = (vf/parcelas_com_iof) - 0.005
            b = (vf/parcelas_com_iof) + 0.005
            x = (1-(1/((1+cet)**np)))/cet
            while(x < a){
                if(x < a){       /////////testar
                    cet -= 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x > a){
                        cet += 0.001
                        cet -= 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x>a){
                            cet += 0.00001
                            while (x<a){
                                cet -= 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }     
                    }
                }else if(x > b){
                    cet += 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x < b){
                        cet -= 0.001
                        cet += 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x<a){
                            cet -= 0.00001
                            while (x>a){
                                cet += 0.000000001
                                x = (1-(1/((1+cet)**np)))/cet
                            }
                        }  
                    }
                }
            }
            if(np<=10000 && np>1){
                exibir_price()
                n_p.value = np.toFixed(2) 
            }
            if(np>10000){
                m_t.classList = "erro"
                m_t.innerHTML ="Valor tendendo ao infinito"
            } 
            if (np < 1) {
                m_t.classList = "erro"
                m_t.innerHTML ="A parcela deve ser maior que 1"

            }
        }
        /////calcula taxa de juros
        else if(!tj && vp && vf && np){
            let tj = 2
            if(ta){
                vf+=ta
            }
            a = (vf/vp) - 0.05
            b = (vf/vp) + 0.05
            x = (1-(1/((1+tj)**np)))/tj
            while(x < a || x > b){
                if(x < a){ 
                    tj -= 0.001
                    x = (1-(1/((1+tj)**np)))/tj
                    if(x > a){
                        tj += 0.001
                        tj -= 0.00001
                        x = (1-(1/((1+tj)**np)))/tj
                        if(x>a){
                            tj += 0.00001
                            tj -= 0.0000001
                            x = (1-(1/((1+tj)**np)))/tj
                            if (x>a){
                                tj += 0.0000001
                                while (x<a){
                                    tj -= 0.000000001
                                    x = (1-(1/((1+tj)**np)))/tj
                                    c+=1
                                    if (x>a || x == (vf / vp) || c==2000){
                                        break
                                    }
                                }
                            }
                        }
                    }
                }else if(x > b){
                    tj += 0.001
                    x = (1-(1/((1+tj)**np)))/tj
                    if(x < b){
                        tj -= 0.001
                        tj += 0.00001
                        x = (1-(1/((1+tj)**np)))/tj
                        if(x<a){
                            tj -= 0.00001
                            tj += 0.0000001
                            x = (1-(1/((1+tj)**np)))/tj
                            if (x<a){
                                tj -= 0.0000001
                                while (x>a){
                                    tj += 0.000000001
                                    x = (1-(1/((1+tj)**np)))/tj
                                    c+=1
                                    if (x<a || x == (vf / vp) || c == 11000){
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }         
            mt = vp * np
            valor_presente = vf 
            valor_juros = 0
            amortizacao = 0
            iof_dia = 0
    
            for(var c = 1;c <= np;c++){//calcula iof
                valor_juros = valor_presente * tj
                amortizacao = vp - valor_juros
                valor_presente = valor_presente - amortizacao
                percentual_dia = c*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
                amortização.push(amortizacao)
                valor_juros_lista.push(valor_juros)
                iof_dia_lista.push(iof_dia)
                parcelas.push(vp)
            }
            iof_total = (vf * (0.38/100)) + iof_dia
            parcelas_com_iof = (vf+iof_total)/((((1+tj)**np)-1)/(((1+tj)**np)*tj))
            for(var c = 1;c <= np;c++){
                parcelasiof.push(parcelas_com_iof)
            }
            //////////calcula CET//////////
            if(ta){
                vf = vf -ta
            }
            cet = 2
            a = (vf/parcelas_com_iof) - 0.01
            b = (vf/parcelas_com_iof) + 0.01
            x = (1-(1/((1+cet)**np)))/cet
            while(x < a){
                if(x < a){       
                    cet -= 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x > a){
                        cet += 0.001
                        cet -= 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x>a){
                            cet += 0.00001
                            cet -= 0.0000001
                            x = (1-(1/((1+cet)**np)))/cet
                            if (x>a){
                                cet += 0.0000001
                                while (x<a){
                                    cet -= 0.000000001
                                    x = (1-(1/((1+cet)**np)))/cet
                                    if (x>a || x == (vf/vp)){
                                        break
                                    }
                                }
                            }
                        }
                    }
                }else if(x > b){
                    cet += 0.001
                    x = (1-(1/((1+cet)**np)))/cet
                    if(x < b){
                        cet -= 0.001
                        cet += 0.00001
                        x = (1-(1/((1+cet)**np)))/cet
                        if(x<a){
                            cet -= 0.00001
                            cet += 0.0000001
                            x = (1-(1/((1+cet)**np)))/cet
                            if (x<a){
                                cet -= 0.0000001
                                while (x>a){
                                    cet += 0.000000001
                                    x = (1-(1/((1+cet)**np)))/cet
                                    if (x<a || x == (vf / vp)){
                                        break
                                    }
                                }
                            }
                        } 
                    }
                }
            }
            if(tj>=0){
                exibir_price()
                t_j.value = (tj*100).toFixed(6)   
            }
            if(tj<0){
                m_t.classList = "erro"
                m_t.innerHTML = "Erro!!<br>taxa de juros não pode ser negativa"
            }  
        }
        else{
            m_t.classList = "erro"
            m_t.innerHTML="Você deve informar 3 parâmetros ,<br>excluído 'Taxas adicionais'."
        } 
    }
    ////////calcula capital////////////
    if (opcao == "sac"){

        opcaops()
        if(!vf && np && tj && vp){
            tj = tj/100
            let vf = 20000
            a = vp - 0.0001
            b = vp + 0.0001
            let y = (vf/np)+(vf*tj)

            while (y<a || y>b){
                if (y == vp){
                    break
                }else if (y<a && y!=vp){
                    vf+=1000
                    y = (vf/np)+(vf*tj)
                    if(y>a){
                        vf-=1000
                        vf+=10
                        y = (vf/np)+(vf*tj)
                        if (y>a){
                            vf-=10
                            vf+=0.1
                            y = (vf/np)+(vf*tj)
                            if (y>a){
                                vf-=0.1
                                vf+=0.0001
                                y = (vf/np)+(vf*tj)
                                while (y<a){
                                    vf+=0.0001
                                    y = (vf/np)+(vf*tj)
                                    if (y>a || y==vp){
                                        break               
                                    }
                                }
                            }
                        }
                    }
                }else if(y>b && y!=vp){
                    vf-=1000
                    y = (vf/np)+(vf*tj)
                    if(y<b){
                        vf+=1000
                        vf-=10
                        y = (vf/np)+(vf*tj)
                        if(y<b){
                            vf+=10
                            vf-=0.1
                            y = (vf/np)+(vf*tj)
                            if(y<b){
                                vf+=0.1
                                vf-=0.0001
                                y = (vf/np)+(vf*tj)
                                while(y>b){
                                    vf-=0.0001
                                    y = (vf/np)+(vf*tj)
                                    if (y<b || y==vp){
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }  
            pv = vf 
            juro_parcela = 0
            amortizacao = 0
            juro_parcelaiof = 0
            amortizacaoiof = 0
            mt = 0
            iof_dia =0
            percentual_dia = 0
            parcelas = []
            parcelasiof = []
            
            for(var v = 1;v <= np ; v++){
                juro_parcela = pv * tj
                valor_juros_lista.push(juro_parcela)
                amortizacao = vf / np
                amortização.push(amortizacao)
                vp = amortizacao + juro_parcela
                pv = pv - amortizacao
                mt = mt + vp
                parcelas.push(vp)
                percentual_dia = v*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
            }
            console.log(parcelas)          
            iof_total = (vf * (0.38/100)) + iof_dia
            cet = mt + iof_total
            pviof = vf + iof_total //presente valor
            vpiof = 0 //valor prestação iof

            for(var c = 1;c <= np;c++){
                juro_parcelaiof = pviof * tj
                amortizacaoiof = (vf + iof_total)/ np
                vpiof = amortizacaoiof + juro_parcelaiof
                pviof = pviof - amortizacaoiof
                parcelasiof.push(vpiof)
            }

            ////////calcula CET////////////
            if(ta){
                vf-=ta
            }
            cet = ((parcelasiof[0]-amortizacao)/vf)*100
            v_f.value = vf.toFixed(2)
        }
        ///////////calcula prestação///////////
        else if(!vp && tj && np && vf){
            tj = tj/100
            if(ta){
                vf+=ta
            }
            pv = vf
            juro_parcela = 0
            amortizacao = 0
            juro_parcelaiof = 0
            amortizacaoiof = 0
            mt = 0
            iof_dia =0
            percentual_dia = 0
            parcelas = []
            parcelasiof = []
            for(var v = 1;v <= np ; v++){
                juro_parcela = pv * tj
                valor_juros_lista.push(juro_parcela)
                amortizacao = vf / np
                amortização.push(amortizacao)
                vp = amortizacao + juro_parcela
                pv = pv - amortizacao
                mt = mt + vp
                parcelas.push(vp)
                percentual_dia = v*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
            }  
                     
            iof_total = (vf * (0.38/100)) + iof_dia
            cet = mt + iof_total
            pviof = vf + iof_total //presente valor
            vpiof = 0 //valor prestação iof

            for(var c = 1;c <= np;c++){
                juro_parcelaiof = pviof * tj
                amortizacaoiof = (vf + iof_total)/ np
                vpiof = amortizacaoiof + juro_parcelaiof
                pviof = pviof - amortizacaoiof
                parcelasiof.push(vpiof)
            }
            ////////calcula CET////////////
            if(ta){
                vf-=ta
            }
            cet = ((parcelasiof[0]-(vf/np))/vf)*100
            exibir_sac()
            v_p.value = parcelas[0].toFixed(2)
        }
        ////////////////////calcular juros//////////////
        else if(!tj && vp && np && vf){
            if(ta){
                vf+=ta
            }
            pv = vf
            amortizacao = vf / np
            juro_parcela = vp - amortizacao
            tj = (juro_parcela/pv)*100
            juro_parcelaiof = 0
            amortizacaoiof = 0
            mt = 0
            iof_dia =0
            percentual_dia = 0
            parcelas = []
            parcelasiof = []

            for(var v = 1;v <= np ; v++){
                juro_parcela = pv * (tj/100)
                valor_juros_lista.push(juro_parcela)
                pv = pv - amortizacao
                amortização.push(amortizacao)
                mt = mt + vp
                parcelas.push(vp)
                percentual_dia = v*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
            }           
            iof_total = (vf * (0.38/100)) + iof_dia
            pviof = vf + iof_total //presente valor
            vpiof = 0              //valor prestação iof

            for(var c = 1;c <= np;c++){
                juro_parcelaiof = pviof * (tj/100)
                amortizacaoiof = (vf + iof_total)/ np
                vpiof = amortizacaoiof + juro_parcelaiof
                pviof = pviof - amortizacaoiof
                parcelasiof.push(vpiof)
            }
            ////////calcula CET////////////
            if(ta){
                vf-=ta
            }
            cet = ((parcelasiof[0]-amortizacao)/vf)*100
            if(tj>=0){
                exibir_sac()
                t_j.value = tj.toFixed(2)
            }
            if(tj<0){
                m_t.classList = "erro"
                m_t.innerHTML = "Erro!!<br>Taxa de juros não pode ser negativa"
            }
        }
        ////////calcular n vezes/////////////
        else if(!np && vp && tj && vf){
            tj = tj/100
            if(ta){
                vf+=ta
            }
            juro_parcela = vf * tj
            amortizacao = vp - juro_parcela
            np = vf / amortizacao
            pv = vf
            juro_parcelaiof = 0
            amortizacaoiof = 0
            mt = 0
            iof_dia =0
            percentual_dia = 0
            parcelas = []
            parcelasiof = []

            for(var v = 1;v <= np ; v++){
                juro_parcela = pv * tj
                valor_juros_lista.push(juro_parcela)
                amortizacao = vf / np
                amortização.push(amortizacao)
                vp = amortizacao + juro_parcela
                pv = pv - amortizacao
                mt = mt + vp
                parcelas.push(vp)
                percentual_dia = v*30
                if (percentual_dia >365){
                    percentual_dia = 365
                }
                iof_dia = iof_dia + (((percentual_dia * 0.0082191781)/100)*amortizacao)
            }           
            iof_total = (vf * (0.38/100)) + iof_dia
            cet = mt + iof_total
            pviof = vf + iof_total //presente valor
            vpiof = 0              //valor prestação iof

            for(var c = 1;c <= np;c++){
                juro_parcelaiof = pviof * tj
                amortizacaoiof = (vf + iof_total)/ np
                vpiof = amortizacaoiof + juro_parcelaiof
                pviof = pviof - amortizacaoiof
                parcelasiof.push(vpiof)
            }
            ////////calcula CET////////////
            if(ta){
                vf-=ta
            }
            cet = ((parcelasiof[0]-amortizacao)/vf)*100
            if(np>=0){
                exibir_sac()
                n_p.value = np.toFixed(2)
            }
            if (np< 0){
                m_t.classList = "erro"
                m_t.innerHTML= "Erro!!<br>Valor de parcelas não pode ser menor que zero."
            }
        } 
        else{
            m_t.classList = "erro"
            m_t.innerHTML="Você deve informar 3 parâmetros ,<br>excluído 'Taxas adicionais'."
        } 
    }   
}
function limpar(){//checa se existe o campo e valor e limpa
    if(control){
        location.reload()
    }else{
        if(document.getElementById('ValorFinanciado')){
            document.getElementById('ValorFinanciado').value = null
            v_f = false
            vf = false
        }
        if(document.getElementById('Nparcelas')){
            document.getElementById('Nparcelas').value = null
            n_p = false
            np = false  
        }
        if(document.getElementById('TxJuros')){
            document.getElementById('TxJuros').value = null
            t_j = false
            tj = false
        }
        if(document.getElementById('ValorParcela')){
            document.getElementById('ValorParcela').value = null
            v_p = false
            vp = false
        }
        if(document.getElementById('Taxaadicional')){
            document.getElementById('Taxaadicional').value = null
            t_a = false
            ta = false
        }
        if(document.getElementById('LabelMontanteTotal')){
            document.getElementById('LabelMontanteTotal').innerHTML = ""
            m_t.innerHTML= ""
            document.getElementById('LabelIOF').innerHTML = ""
            iof.innerHTML = ""
            valor_parcela_iof.innerHTML = ""
            piof.innerHTML = ""
            document.getElementById('LabelCET').innerHTML = ""
            custoet.innerHTML = ""
        }
    }
    

}
function relatorio(){
    //exclui itens
    document.getElementById('table1').remove()
    //document.getElementById('h2').remove()
    document.getElementById('foto').remove()
    document.getElementById('opcoes').remove()
    document.getElementById('Calcular').remove()
    document.getElementById('relatorio').remove()
    //troca nome do botão
    document.getElementById('limpar').value = "Voltar"
    control = true
    

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
    row_data_1.innerHTML = " Parcela ";
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = " Parcela sem IOF ";
    let row_data_3 = document.createElement('td');
    row_data_3.innerHTML = " Parcelas com IOF ";
    let row_data_4 = document.createElement('td');
    row_data_4.innerHTML = " Amortização ";
    let row_data_5 = document.createElement('td');
    row_data_5.innerHTML = " Juros ";

    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    row.appendChild(row_data_4);
    row.appendChild(row_data_5);

    tbody.appendChild(row);
    for(var c=0;c<=parcelas.length-1;c++){
        if(c%2 == 0){
            let row_2 = document.createElement('tr')
            row_2.classList = "tabelapar"
            let row_2_data_1 = document.createElement('td')
            row_2_data_1.innerHTML = c+1+"°  "
            let row_2_data_2 = document.createElement('td')
            row_2_data_2.innerHTML = "  "+parcelas[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"   "
            let row_2_data_3 = document.createElement('td')
            row_2_data_3.innerHTML = "  "+parcelasiof[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_4 = document.createElement('td')
            row_2_data_4.innerHTML = "  "+amortização[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_5 = document.createElement('td')
            row_2_data_5.innerHTML = "  "+valor_juros_lista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            
            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            row_2.appendChild(row_2_data_3);
            row_2.appendChild(row_2_data_4);
            row_2.appendChild(row_2_data_5);
            tbody.appendChild(row_2);
        }
        if(c%2 != 0){
            let row_2 = document.createElement('tr')
            //row_2.id = "tabelaimpar"
            row_2.classList = "tabelaimpar"
            let row_2_data_1 = document.createElement('td')
            row_2_data_1.innerHTML = c+1+"°  "
            let row_2_data_2 = document.createElement('td')
            row_2_data_2.innerHTML = "  "+parcelas[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"   "
            let row_2_data_3 = document.createElement('td')
            row_2_data_3.innerHTML = "  "+parcelasiof[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_4 = document.createElement('td')
            row_2_data_4.innerHTML = "  "+amortização[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
            let row_2_data_5 = document.createElement('td')
            row_2_data_5.innerHTML = "  "+valor_juros_lista[c].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "

            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            row_2.appendChild(row_2_data_3);
            row_2.appendChild(row_2_data_4);
            row_2.appendChild(row_2_data_5);

            tbody.appendChild(row_2);
        }
        
   }
}
function voltar(){
    document.getElementById('relatorio').value = "ok"
    location.reload()
}
function exibir_price(){
    var labelmontante = document.getElementById('LabelMontanteTotal')
    labelmontante.innerHTML = "Montante sem IOF"
    m_t.classList = "fonte_sizeprice"
    m_t.innerHTML= mt.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
    var labeliof = document.getElementById('LabelIOF')
    labeliof.innerHTML = "IOF"
    iof.innerHTML = iof_total.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
    valor_parcela_iof.innerHTML = "Parcelas com IOF"
    piof.innerHTML = parcelas_com_iof.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
    var labelcet = document.getElementById('LabelCET')
    labelcet.innerHTML = "CET"
    custoet.innerHTML = (cet*100).toFixed(3)+"%"      
}
function exibir_sac(){
    var labelmontante = document.getElementById('LabelMontanteTotal')
    labelmontante.innerHTML = "Montante sem IOF"
    m_t.classList = "fonte_sizeprice"
    m_t.innerHTML= mt.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
    var labeliof = document.getElementById('LabelIOF')
    labeliof.innerHTML = "IOF"
    iof.innerHTML = iof_total.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
    var labelcet = document.getElementById('LabelCET')
    labelcet.innerHTML = "CET"
    custoet.innerHTML = cet.toFixed(3)+"%"
    valor_parcela.innerHTML = "Valor 1° parcela sem IOF"
    valor_parcela_iof.innerHTML = "1° parcela com IOF"
    piof.innerHTML = parcelasiof[0].toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})+"  "
}
function opcaops(){
    let aa = opcoes.value
    if(aa == "price"){
        valor_parcela.classList = "fonte_sizeprice"
        valor_parcela.innerHTML = "Valor da Parcela"
    }
    if(aa == "sac"){
        valor_parcela.classList = "fonte_sizesac"
        valor_parcela.innerHTML = "Valor 1° parcela sem IOF"
    }
}