package main.repository;

import main.document.Progression;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProgressionRepository extends MongoRepository<Progression, Integer> {

    @Query("{'element': ?0, 'module': ?1, 'groupe': ?2}")
    Object findProgressionByElementAndModuleAndGroupe(String element, String module, String groupe);
}
