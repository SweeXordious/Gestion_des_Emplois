package main.repository;

import main.document.Annee;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AnneeRepository extends MongoRepository <Annee,  Integer>{
    Object findByAnnee(String annee);
    // Object findById(Integer id);
}
