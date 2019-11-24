package main.document;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Document
@CrossOrigin(origins = "http://localhost:4200")
public class Modulee {

    @Id
    private ObjectId _id;
    private String nom;
    private String description;
    @DBRef
    private List<Element> elements;
    private int nbSeanceModule;
    private int year;
    private ObjectId [] groupes;

    public Modulee() {
    }

    public Modulee( String nom, String description, List<Element> elements,int nbSeanceModule,int year,ObjectId [] groupes) {
        this.nom = nom;
        this.description = description;
        this.elements = elements;
        this.nbSeanceModule=nbSeanceModule;
        this.year=year;
        this.groupes=groupes;
    }

    public ObjectId getId() {
        return _id;
    }

    public void setId(ObjectId id) {
        this._id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Element> getElements() { return elements; }

    public int getNbSeanceModule() {
        return nbSeanceModule;
    }

    public void setNbSeanceModule(int nbSeanceModule) {
        this.nbSeanceModule = nbSeanceModule;
    }

    public void setElements(List<Element> elements) {
        this.elements = elements;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public ObjectId[] getGroupes() {
        return groupes;
    }

    public void setGroupes(ObjectId[] groupes) {
        this.groupes = groupes;
    }

    @Override
    public String toString()
    {
        return "nom : "+this.getNom();
    }
}
