package main.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Filliere {

    @Transient
    public static final String SEQUENCE_NAME = "Filliere_sequence";

    @Id
    private Integer id;
    private String Nom;
    private String Description;

    public Filliere() {
    }

    public Filliere(Integer id, String nom, String description) {
        this.id = id;
        Nom = nom;
        Description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
