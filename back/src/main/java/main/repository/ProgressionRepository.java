package main.repository;

import main.document.Progression;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProgressionRepository extends MongoRepository<Progression, ObjectId> {
}
