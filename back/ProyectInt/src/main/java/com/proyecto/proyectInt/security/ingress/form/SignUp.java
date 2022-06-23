package com.proyecto.proyectInt.security.ingress.form;

public class SignUp {

    /* Attributes */
    private String name;
    private String lastname;
    private String email;
    private String role;
    private String password;
    private String city;

    /* Constructor */

    public SignUp(String name, String lastName, String email, String role, String password, String city) {
        this.name = name;
        this.lastname = lastName;
        this.email = email;
        this.role = role;
        this.password = password;
        this.city = city;
    }

    public SignUp() {
    }

    /* Getters and Setters */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() { return role; }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }
}
