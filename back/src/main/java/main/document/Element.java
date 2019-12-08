package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document
public class Element {

    @Id
    private Integer id;
    private String nom;
    @DBRef
    private Element[] prerequis;
    private int nbSeance;

    public Element() {
    }

    public Element( Integer id, String nom, Element[] prerequis,int nb) {
        this.id = id;
        this.nom = nom;
        this.prerequis = prerequis;
        this.nbSeance=nb;
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

    public Element[] getPrerequis() {
        return prerequis;
    }

    public void setPrerequis(Element[] prerequis) {
        this.prerequis = prerequis;
    }

    public int getNbSeance() {
        return nbSeance;
    }

    public void setNbSeance(int nbSeance) {
        this.nbSeance = nbSeance;
    }


    @Override
    public String toString() {
        return "Element{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prerequis=" + Arrays.toString(prerequis) +
                ", nbSeance=" + nbSeance +
                '}';
    }
}
