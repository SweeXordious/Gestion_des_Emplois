package main.repository;

import main.document.Element;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ElementRepository extends MongoRepository<Element, Integer> {
}
