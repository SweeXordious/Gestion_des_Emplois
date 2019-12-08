package main.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document
public class Groupe {
    @Id
    private Integer id;
    private String nom;
    @DBRef
    private Classe[] classes;

    public Groupe(Integer id, String nom, Classe[] classes) {
        this.id = id;
        this.nom= nom;
        this.classes = classes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Classe[] getGroupe() {
        return classes;
    }

    public void setGroupe(Classe[] groupe) {
        this.classes = groupe;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Groupe{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", classes=" + Arrays.toString(classes) +
                '}';
    }
}
