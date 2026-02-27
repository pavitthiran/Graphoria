package com.graphoria.service;

import com.graphoria.dto.ContactRequest;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;
    private final PdfGenerationService pdfGenerationService;

    @Value("${app.email.to:pavitthiranrock@gmail.com}")
    private String toEmail;

    @Value("${app.email.from:noreply@graphoria.com}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender, PdfGenerationService pdfGenerationService) {
        this.mailSender = mailSender;
        this.pdfGenerationService = pdfGenerationService;
    }

    public void sendContactEmail(ContactRequest contactRequest) throws MessagingException {
        logger.info("Starting email send process for: {}", contactRequest.getFullName());

        try {
            // Generate PDF
            logger.info("Generating PDF for contact request...");
            byte[] pdfBytes = pdfGenerationService.generateContactPdf(contactRequest);
            logger.info("PDF generated successfully");

            // Create email message
            logger.info("Creating MIME message...");
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            // Set email properties
            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("New Project Inquiry - " + contactRequest.getFullName() + " - " + contactRequest.getProjectType());
            
            // Email body
            String submissionDate = LocalDateTime.now().format(
                    DateTimeFormatter.ofPattern("MMMM dd, yyyy 'at' hh:mm a")
            );
            
            String emailBody = String.format(
                    "<html>" +
                    "<body style='font-family: Arial, sans-serif; color: #333;'>" +
                    "<h2 style='color: #2E7D32;'>New Project Inquiry Received</h2>" +
                    "<p><strong>Company:</strong> Graphoria Creative Design</p>" +
                    "<p><strong>Submission Date:</strong> %s</p>" +
                    "<hr>" +
                    "<h3>Client Details:</h3>" +
                    "<p><strong>Name:</strong> %s</p>" +
                    "<p><strong>Email:</strong> %s</p>" +
                    "<p><strong>Phone:</strong> %s</p>" +
                    "<hr>" +
                    "<h3>Project Details:</h3>" +
                    "<p><strong>Project Type:</strong> %s</p>" +
                    "<p><strong>Budget:</strong> %s</p>" +
                    "<hr>" +
                    "<h3>Message:</h3>" +
                    "<p style='background: #f5f5f5; padding: 15px; border-radius: 5px;'>%s</p>" +
                    "<hr>" +
                    "<p style='color: #666; font-size: 12px;'>This is an automated email from Graphoria Creative Design.</p>" +
                    "</body>" +
                    "</html>",
                    submissionDate,
                    contactRequest.getFullName(),
                    contactRequest.getEmail(),
                    contactRequest.getPhone() != null ? contactRequest.getPhone() : "Not provided",
                    contactRequest.getProjectType(),
                    contactRequest.getBudget() != null ? contactRequest.getBudget() : "Not specified",
                    contactRequest.getMessage().replace("\n", "<br>")
            );

            helper.setText(emailBody, true);

            // Attach PDF
            String fileName = "Project_Inquiry_" + 
                    contactRequest.getFullName().replace(" ", "_") + "_" +
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss")) +
                    ".pdf";
            
            logger.info("Attaching PDF file: {}", fileName);
            helper.addAttachment(fileName, new ByteArrayResource(pdfBytes));

            // Send email
            logger.info("Sending email to: {}", toEmail);
            mailSender.send(message);
            logger.info("Email sent successfully to: {}", toEmail);
            
        } catch (MessagingException e) {
            logger.error("MessagingException in email service: {}", e.getMessage(), e);
            throw e;
        } catch (Exception e) {
            logger.error("Exception in email service: {}", e.getMessage(), e);
            throw new MessagingException("Failed to send email: " + e.getMessage(), e);
        }
    }
}
