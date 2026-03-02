package com.graphoria.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TestController {

    @GetMapping("/test")
    public ResponseEntity<Map<String, String>> test() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Backend is working!");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/test-post")
    public ResponseEntity<Map<String, String>> testPost(@RequestBody Map<String, String> data) {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("received", data.toString());
        return ResponseEntity.ok(response);
    }
}
