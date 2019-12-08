package main.repository;

import main.document.Element;
import main.document.Groupe;
import main.document.Modulee;
import main.document.Progression;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProgressionRepository extends MongoRepository<Progression, Integer> {

    Object findProgressionByElementAndModuleAndGroupe(Element element, Modulee module, Groupe groupe);
}
