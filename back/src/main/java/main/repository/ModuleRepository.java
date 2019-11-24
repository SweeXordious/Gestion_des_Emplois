package main.repository;

import main.document.Modulee;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ModuleRepository extends MongoRepository<Modulee, Integer> {
    List<Modulee> findModuleByYear(int year);
}
