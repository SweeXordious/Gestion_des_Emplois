package main.config;

import main.document.*;
import main.repository.*;
import org.bson.types.ObjectId;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.stream.Stream;

@EnableMongoRepositories(basePackageClasses = AnneeRepository.class)
@Configuration
@CrossOrigin(origins = "http://localhost:4200")
public class MongoDBConfig {
    Modulee m1= new  Modulee("Management111", "Technique de programmation",new ObjectId[] {new ObjectId()},14,1,new ObjectId[] {new ObjectId()});
    Groupe g1 = new Groupe(new ObjectId[] { new ObjectId()},"Gi, GC11111");
    Element e1= new Element("Java Avancée1111", new String[] {"Java"}, 7);

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

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
                classeRepository.save(new Classe("GI", "GI"));
                classeRepository.save(new Classe("GE1", "GE1"));
                classeRepository.save(new Classe("GE2", "GE2"));
                classeRepository.save(new Classe("GC1", "GC1"));
                classeRepository.save(new Classe("GC2", "GC2"));
                classeRepository.save(new Classe("GC3", "GC3"));
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
                //elementRepository.save(new Element("Java Avancée", new String[] {"Java"}, 7));
                elementRepository.save(e1);

            }
        };
    }
    @Bean
    CommandLineRunner GroupeCommandLineRunner(GroupeRepository groupeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                groupeRepository.save(g1);

            }
        };
    }


    @Bean
   CommandLineRunner ModuleCommandLineRunner(ModuleRepository moduleRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                moduleRepository.save(m1);
               // moduleRepository.save(new Modulee("Maths 1", "Technique de programmation",new ObjectId[] {new ObjectId()},14,2,new ObjectId[] {new ObjectId()}));
                //moduleRepository.save(new Modulee("Sociologie", "Technique de programmation",new ObjectId[] {new ObjectId()},14,3,new ObjectId[] {new ObjectId()}));

            }
        };
    }
    @Bean
    CommandLineRunner ProgressionCommandLineRunner(ProgressionRepository progressionRepository){
        return new CommandLineRunner() {

            @Override
            public void run(String... args) throws Exception {
                progressionRepository.save(new Progression(g1,e1,m1,4));

            }
        };
    }
    @Bean
    CommandLineRunner init(ModuleRepository moduleRepository) {
        return args -> {
            /*Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                User user = new User(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);*/

        moduleRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner ProfCommandLineRunner(ProfRepository profRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                profRepository.save(new Prof(1,"Mousal", "Ahmed", "mail@mail.com", new int[] {1}));
            }
        };
    }
}
