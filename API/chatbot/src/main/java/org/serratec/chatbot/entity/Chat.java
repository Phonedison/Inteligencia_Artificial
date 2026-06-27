package org.serratec.chatbot.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "chat")
public class Chat {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "codigo_chat", nullable = false)
    private String codigoChat;

    @Column (name = "pergunta", nullable = false)
    private String pergunta;

    @Column (name = "resposta", nullable = false)
    private String resposta;

    @CreationTimestamp
    @Column (name = "data_da_pergunta", nullable = false)
    private LocalDate dataPergunta;
}
