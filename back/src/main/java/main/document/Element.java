package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Element {

    @Id
    private ObjectId id;
    private String nom;
    private String[] prerequis;
    private int nbSeance;

    public Element() {
    }

    public Element( String nom, String[] prerequis,int nb) {
        this.nom = nom;
        this.prerequis = prerequis;
        this.nbSeance=nb;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String[] getPrerequis() {
        return prerequis;
    }

    public void setPrerequis(String[] prerequis) {
        this.prerequis = prerequis;
    }

    public int getNbSeance() {
        return nbSeance;
    }

    public void setNbSeance(int nbSeance) {
        this.nbSeance = nbSeance;
    }
}