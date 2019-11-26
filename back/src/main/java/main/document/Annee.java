package main.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Annee {
    @Id
    private int id;
    private String Annee;

    public Annee() {
    }

    public Annee(int id, String annee) {
        this.id = id;
        this.Annee = annee;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAnnee() {
        return Annee;
    }

    public void setAnnee(String annee) {
        this.Annee = annee;
    }
}
