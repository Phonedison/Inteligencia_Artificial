package org.serratec.chatbot.controller;

import org.serratec.chatbot.entity.Chat;
import org.serratec.chatbot.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Autowired
    private ChatRepository chatRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/perguntar")
    public ResponseEntity<Chat> perguntar (@RequestBody Map<String, String> dados) {
        String pergunta = dados.get("pergunta");
        String codigoChat = dados.get("sessionId") != null ? dados.get("sessionId") : "sessão-default";

        String urlN8n = "";

        Map<String, String> requestN8n = new HashMap<>();
        requestN8n.put("action", "sendMessage");
        requestN8n.put("chatInput", pergunta);
        requestN8n.put("sessionId", codigoChat);

        String resposta = "";
        try {
            // Envia para o n8n e recebe a string de texto com a resposta da IA
            ResponseEntity<String> responseN8n = restTemplate.postForEntity(urlN8n, requestN8n, String.class);
            resposta = responseN8n.getBody();
        } catch (Exception e) {
            resposta = "Erro ao se comunicar com o motor de IA (n8n): " + e.getMessage();
        }

        Chat chat = new Chat();
        chat.setPergunta(pergunta);
        chat.setResposta(resposta);
        chat.setCodigoChat(codigoChat);

        Chat chatSalvo = chatRepository.save(chat);


        return ResponseEntity.ok(chat);
    }
}
