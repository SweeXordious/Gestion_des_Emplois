package main.document;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Modulee {

    @Id
    private ObjectId _id;
    private String nom;
    private String description;
    private int [] elements;
    private int nbSeanceModule;

    public Modulee() {
    }

    public Modulee( String nom, String description, int[] elements,int nbSeanceModule) {
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

    public int[] getElements() {
        return elements;
    }

    public int getNbSeanceModule() {
        return nbSeanceModule;
    }

    public void setNbSeanceModule(int nbSeanceModule) {
        this.nbSeanceModule = nbSeanceModule;
    }

    public void setElements(int [] elements) {
        this.elements = elements;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
