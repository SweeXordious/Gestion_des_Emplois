package main.document;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Modulee {

    @Id
    private ObjectId _id;
    private String nom;
    private String description;
    private Element elements;
    private int nbSeanceModule;

    public Modulee() {
    }

    public Modulee( String nom, String description, Element elements,int nbSeanceModule) {
        this.nom = nom;
        this.description = description;
        this.elements = elements;
        this.nbSeanceModule=nbSeanceModule;
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

    public Element getElements() {
        return elements;
    }

    public int getNbSeanceModule() {
        return nbSeanceModule;
    }

    public void setNbSeanceModule(int nbSeanceModule) {
        this.nbSeanceModule = nbSeanceModule;
    }

    public void setElements(Element elements) {
        this.elements = elements;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
