package main.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Prof {

    @Id
    private Integer id;
    private String nom;
    private String prenom;
    private String mail;
    private int[] element;

    public Prof() {
    }

    public Prof(Integer id, String nom, String prenom, String mail, int[] element) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.element = element;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int[] getElement() {
        return element;
    }

    public void setElement(int[] element) {
        this.element = element;
    }
}
