package org.serratec.chatbot.controller;

import org.serratec.chatbot.entity.Chat;
import org.serratec.chatbot.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    // @Value("${app.api.urlN8n}")
    private final String urlN8n = "http://localhost:5678/webhook-test/perguntar";

    @Autowired
    private ChatRepository chatRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/perguntar")
    public ResponseEntity<Map<String, String>> perguntar(@RequestBody Map<String, String> dados) {
        String pergunta = dados.get("pergunta");
        String codigoChat = dados.get("sessionId") != null ? dados.get("sessionId") : "sessão-default";

        Map<String, String> requestN8n = new HashMap<>();
        requestN8n.put("action", "sendMessage");
        requestN8n.put("chatInput", pergunta);
        requestN8n.put("sessionId", codigoChat);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestN8n,
                headers);

        String resposta;
        try {
            // Envia para o n8n e recebe a string de texto com a resposta da IA
            ResponseEntity<Map> responseN8n = restTemplate.postForEntity(urlN8n, entity, Map.class);

            if (responseN8n.getBody() != null && responseN8n.getBody().containsKey("output")) {
                resposta = responseN8n.getBody().get("output").toString();
            } else {
                resposta = responseN8n.getBody().toString();
            }
        } catch (RestClientException e) {
            resposta = "Erro ao se comunicar com o motor de IA (n8n): " + e.getMessage();
        }

        Chat chat = new Chat();
        chat.setPergunta(pergunta);
        chat.setResposta(resposta);
        chat.setCodigoChat(codigoChat);
        chatRepository.save(chat);

        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("resposta", resposta);
        return ResponseEntity.ok(responseBody);
    }
}
