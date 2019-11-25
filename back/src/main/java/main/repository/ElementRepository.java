package main.repository;

import main.document.Element;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ElementRepository extends MongoRepository<Element, ObjectId> {
    public Element findElementByNom(String element);

}
