package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Groupe {
    @Id
    private Integer id;
    private String description;
    private Integer []  classes;

    public Groupe(Integer id, String description, Integer[] groupe) {
        this.id = id;
        this.description=description;
        this.classes = groupe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer[] getGroupe() {
        return classes;
    }

    public void setGroupe(Integer[] groupe) {
        this.classes = groupe;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
