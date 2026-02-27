package com.graphoria.controller;

import com.graphoria.dto.ContactRequest;
import com.graphoria.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/contact")
    public ResponseEntity<?> submitContact(@Valid @RequestBody ContactRequest request) {
        logger.info("Received contact form submission from: {}", request.getFullName());
        
        try {
            emailService.sendContactEmail(request);
            logger.info("Contact form submitted successfully for: {}", request.getFullName());
            
            return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Thank you! Your project inquiry has been submitted successfully. We'll get back to you within 24 hours."
            ));
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of(
                "success", false,
                "message", e.getMessage()
            ));
        }
    }
}
