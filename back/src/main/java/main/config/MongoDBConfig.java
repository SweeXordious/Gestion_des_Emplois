package main.config;

import main.document.*;
import main.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = AnneeRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner anneeCommandLineRunner(AnneeRepository anneeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                anneeRepository.save(new Annee(1, "Promotion 2019"));
                anneeRepository.save(new Annee(2, "Promotion 2018"));
                anneeRepository.save(new Annee(3, "Promotion 2017"));
            }
        };
    }

    @Bean
    CommandLineRunner FilliereCommandLineRunner(FilliereRepository filliereRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                filliereRepository.save(new Filliere(0,"GI", "Genie Info"));
                filliereRepository.save(new Filliere(1,"GE", "Genie Electrique"));
                filliereRepository.save(new Filliere(2,"GC", "Genie Civil"));
            }
        };
    }

    @Bean
    CommandLineRunner ClasseCommandLineRunner(ClasseRepository classeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                classeRepository.save(new Classe(0,"GI", "GI"));
                classeRepository.save(new Classe(1,"GE1", "GE1"));
                classeRepository.save(new Classe(3,"GE2", "GE2"));
                classeRepository.save(new Classe(4,"GC1", "GC1"));
                classeRepository.save(new Classe(5,"GC2", "GC2"));
                classeRepository.save(new Classe(6,"GC3", "GC3"));
            }
        };
    }

    @Bean
    CommandLineRunner SalleCommandLineRunner(SalleRepository salleRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                salleRepository.save(new Salle(1,"1"));
                salleRepository.save(new Salle(2,"2"));
                salleRepository.save(new Salle(3,"3"));
                salleRepository.save(new Salle(4,"4"));
                salleRepository.save(new Salle(5,"5"));
                salleRepository.save(new Salle(6,"GI1"));
                salleRepository.save(new Salle(7,"GI2"));
                salleRepository.save(new Salle(8,"GI3"));

            }
        };
    }

    @Bean
    CommandLineRunner ElementCommandLineRunner(ElementRepository elementRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                elementRepository.save(new Element(1,"Admn BD oracle", "Administration DB oracle", null));
                elementRepository.save(new Element(2,"SIG", "Sig et BDD", null));
                elementRepository.save(new Element(3,"Java", "Java", null));
                elementRepository.save(new Element(4,"Design Patterns", "Design Patterns", new int[] {3}));
            }
        };
    }
}
