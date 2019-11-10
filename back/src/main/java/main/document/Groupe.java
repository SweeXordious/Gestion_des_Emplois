package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Groupe {
    @Id
    private ObjectId id;
    private String description;
    private ObjectId []  classes;

    public Groupe(ObjectId[] groupe, String description) {
        this.description=description;
        this.classes = groupe;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId[] getGroupe() {
        return classes;
    }

    public void setGroupe(ObjectId[] groupe) {
        this.classes = groupe;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
