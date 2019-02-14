package com.stackroute.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
@CrossOrigin(origins = "*")
public class WebSocketController {

    private final SimpMessagingTemplate template;

    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }

    /*same as @RequestMappingThe @MessageMapping annotation ensures
     *that if a message is sent to destination "/send/message"
     */
    @MessageMapping("/send/message")
    public void onReceivedMesage(String message){
        this.template.convertAndSend("/chat", "hi "+message);
    }
}
