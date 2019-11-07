package main.repository;

import main.document.Modulee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ModuleRepository extends MongoRepository<Modulee, Integer> {
}
