package com.proyecto.proyectInt.security.ingress.jwtresponse;

public class ResponseMes {
    /* Attributes */

    private String message;


    /* Constructor */

    public ResponseMes(String message) {
        this.message = message;
    }


    /* Getters and Setters */

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
