package main.repository;

import main.document.Prof;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfRepository extends MongoRepository<Prof, Integer> {
}
