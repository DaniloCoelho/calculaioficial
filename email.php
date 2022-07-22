<?php
    
    //verificar se existe as variaveis repassadas do outro arquivo

    if(isset($_POST['email']) && !empty($_POST['email'])){
        //primeira coisa criar variaveis para pegar dados do formulario

        $nome = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $mensagem = addslashes($_POST['message']);

        //agora preciso montar a mensagem para enviar 

        $to = "dan.ali.ferr@gmail.com"; //destinatario
        $subject = "Mensagem do site calculeai.com"; //assunto
        $body = "Nome: ".$nome. "\r\n".
                "Email: ".$email."\r\n".
                "Mensagem: ".$mensagem;

        //cabeçalho do email 
        //o reply-to significa responder para quem 
        //from de onde o email ta vindo
        //x=mailer é a indicação da versao php , onde phpversion(); retorna a versão

        $header = "From:contato@calculeai.com.br"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();

        //chamar função mail() com os parametros ai retorna verdadeiro ou falso
        if(mail($to,$subject,$body,$header)){
            echo("Email enviado com sucesso!");
            header("location: index.html");
        }else{
            echo("Email não enviado!");
            header("location: index.html");
        }
        

    }
    else{
        header("location: contato.html");
    }
    
    
    


?>