package main.config;

import main.document.Annee;
import main.repository.AnneeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = AnneeRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(AnneeRepository anneeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                anneeRepository.save(new Annee(1, "1er année"));
                anneeRepository.save(new Annee(2, "2em année"));
                anneeRepository.save(new Annee(3, "3em année"));
            }
        };
    }

}
