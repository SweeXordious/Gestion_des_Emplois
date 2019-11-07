package main.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Salle {

    @Id
    private Integer id;
    private String Num_Salle;

    public Salle() {
    }

    public Salle(Integer id, String num_Salle) {
        this.id = id;
        Num_Salle = num_Salle;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNum_Salle() {
        return Num_Salle;
    }

    public void setNum_Salle(String num_Salle) {
        Num_Salle = num_Salle;
    }
}
