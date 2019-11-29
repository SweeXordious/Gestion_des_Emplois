package main.repository;

import main.document.Filliere;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FilliereRepository extends MongoRepository<Filliere,  Integer> {
    Object findFilliereByNom(String element);
}
