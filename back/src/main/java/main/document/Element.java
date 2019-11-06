package main.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Element {

    @Id
    private Integer id;
    private String nom;
    private String description;
    private int[] prerequis;

    public Element() {
    }

    public Element(Integer id, String nom, String description, int[] prerequis) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prerequis = prerequis;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int[] getPrerequis() {
        return prerequis;
    }

    public void setPrerequis(int[] prerequis) {
        this.prerequis = prerequis;
    }
}
