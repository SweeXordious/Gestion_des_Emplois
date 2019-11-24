package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

@Document
@CrossOrigin(origins = "http://localhost:4200")
public class Progression {
    @Id
    private ObjectId id;
    @DBRef
    private Groupe groupe;
    @DBRef
    private Element element;
    @DBRef
    private Modulee module;
    private int progression;

    public Progression(Groupe groupe, Element element, Modulee module, int progression) {
        this.groupe = groupe;
        this.element = element;
        this.module = module;
        this.progression = progression;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
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

    public void setProgression(int progression) {
        this.progression = progression;
    }
}
