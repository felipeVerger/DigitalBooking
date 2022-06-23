package com.proyecto.proyectInt.service;

import javax.mail.MessagingException;

public interface MailInterface {
    void sendSimpleEmail(String to, String subject, String text);

    void sendEmailWithAttachments(String to, String subject, String text, String attachmentsPath) throws MessagingException;
}
