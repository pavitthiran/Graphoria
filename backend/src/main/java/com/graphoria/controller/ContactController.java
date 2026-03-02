package com.graphoria.controller;

import com.graphoria.dto.ContactRequest;
import com.graphoria.entity.ContactRequestEntity;
import com.graphoria.repository.ContactRepository;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // debug endpoint: list all saved requests
    @GetMapping("/contact/all")
    public java.util.List<ContactRequestEntity> getAllContacts() {
        return contactRepository.findAll();
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> submitContact(@Valid @RequestBody ContactRequest request) {
        logger.info("Received contact form submission from: {}", request.getFullName());
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Convert DTO to Entity
            ContactRequestEntity entity = new ContactRequestEntity();
            entity.setFullName(request.getFullName());
            entity.setEmail(request.getEmail());
            entity.setPhone(request.getPhone());
            entity.setProjectType(request.getProjectType());
            entity.setBudget(request.getBudget());
            entity.setMessage(request.getMessage());
            
            // debug log incoming values and entity
            logger.debug("ContactRequest DTO: {}", request);
            logger.debug("ContactRequestEntity before save: {}", entity);
            
            // Save to database
            ContactRequestEntity saved = contactRepository.save(entity);
            logger.debug("Saved entity: {}", saved);
            
            logger.info("Contact form submitted successfully for: {}", request.getFullName());
            
            response.put("success", true);
            response.put("message", "Project request submitted successfully");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            logger.error("Error saving contact request: {}", e.getMessage(), e);
            
            response.put("success", false);
            response.put("message", "Failed to submit: " + e.getMessage());
            
            return ResponseEntity.internalServerError().body(response);
        }
    }
}
