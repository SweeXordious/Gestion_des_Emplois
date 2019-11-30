package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Document
@CrossOrigin(origins = "http://localhost:4200")
public class Progression {
    @Id
    private Integer id;
    @DBRef
    private Groupe groupe;
    @DBRef
    private Modulee module;
    @DBRef
    private Element element;
    private int progression;

    public Progression( Integer id,Groupe groupe,Modulee module, Element element, int progression) {
        this.id = id;
        this.groupe = groupe;
        this.element = element;
        this.module = module;
        this.progression = progression;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Groupe getGroupe() {
        return groupe;
    }

    public void setGroupe(Groupe groupe) {
        this.groupe = groupe;
    }

    public Element getElement() {
        return element;
    }

    public void setElement(Element element) {
        this.element = element;
    }

    public Modulee getModule() {
        return module;
    }

    public void setModule(Modulee module) {
        this.module = module;
    }

    public int getProgression() {
        return progression;
    }

    @Override
    public String toString() {
        return "Progression{" +
                "id=" + id +
                ", groupe=" + groupe +
                ", element=" + element +
                ", module=" + module +
                ", progression=" + progression +
                '}';
    }

    public void setProgression(int progression) {
        this.progression = progression;
    }
}
