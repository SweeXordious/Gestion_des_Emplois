package main.repository;

import main.document.Annee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnneeRepository extends MongoRepository <Annee,  Integer>{

}
