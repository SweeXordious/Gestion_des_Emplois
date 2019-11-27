package main.repository;

import main.document.Groupe;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupeRepository extends MongoRepository<Groupe, Integer> {
}
