<?php
    // Configuração para exibir erros - útil para depuração
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    // Verifica se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Email de destino
        $to = "contatojornalsnc@gmail.com";
        
        // Captura os dados do formulário
        $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars($_POST['name']);
        $subject = htmlspecialchars($_POST['subject']);
        $number = htmlspecialchars($_POST['number']);
        $cmessage = htmlspecialchars($_POST['message']);
        
        // Configura o assunto do email
        $emailSubject = "Você possui uma mensagem do Jornal SNC: " . $subject;
        
        // Configura os cabeçalhos do email
        $headers = "From: " . $from . "\r\n";
        $headers .= "Reply-To: " . $from . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        // Logo e link (caminho absoluto recomendado para emails)
        $logo = 'https://seusite.com.br/img/logosnc2.png'; // Substitua com URL completa
        $link = 'https://seusite.com.br'; // Substitua com URL completa
        
        // Monta o corpo do email em HTML
        $body = "<!DOCTYPE html><html lang='pt-BR'><head><meta charset='UTF-8'><title>Portal de notícias, Jornal SNC</title></head><body>";
        $body .= "<table style='width: 100%;'>";
        $body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
        $body .= "<a href='{$link}'><img src='{$logo}' alt='Logo Jornal SNC'></a><br><br>";
        $body .= "</td></tr></thead><tbody><tr>";
        $body .= "<td style='border:none;'><strong>Nome:</strong> {$name}</td>";
        $body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
        $body .= "</tr>";
        $body .= "<tr><td style='border:none;'><strong>Assunto:</strong> {$subject}</td></tr>";
        $body .= "<tr><td style='border:none;'><strong>Telefone:</strong> {$number}</td></tr>";
        $body .= "<tr><td></td></tr>";
        $body .= "<tr><td colspan='2' style='border:none;'><strong>Mensagem:</strong><br>{$cmessage}</td></tr>";
        $body .= "</tbody></table>";
        $body .= "</body></html>";
        
        // Envia o email e verifica o resultado
        $send = mail($to, $emailSubject, $body, $headers);
        
        // Resposta para o usuário
        if ($send) {
            echo "Mensagem enviada com sucesso! Retornaremos em breve.";
        } else {
            echo "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por outro meio.";
        }
    } else {
        // Se alguém tenta acessar este arquivo diretamente
        echo "Este arquivo processa o envio de formulário e não deve ser acessado diretamente.";
    }
?>