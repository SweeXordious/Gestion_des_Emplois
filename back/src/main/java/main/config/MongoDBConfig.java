package main.config;

import main.StaticIDs;
import main.controller.ElementController;
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
                anneeRepository.save(new Annee(StaticIDs.anneeId++,"Promotion 2019"));
                anneeRepository.save(new Annee(StaticIDs.anneeId++,"Promotion 2018"));
                anneeRepository.save( new Annee(StaticIDs.anneeId++,"Promotion 2017"));
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
                elementRepository.save(new Element("Analyse", new String[] {},9));
                elementRepository.save(new Element("Analyse Numérique 1", new String[] {},5));
                elementRepository.save(new Element("Introduction au Droit", new String[] {},7));
                elementRepository.save(new Element("Contrats et Marchés Publics", new String[] {},7));
                elementRepository.save(new Element("Analyse Numérique 2", new String[] {},5));
                elementRepository.save(new Element("Recherche Opérationnelle", new String[] {},9));
                elementRepository.save(new Element("Gestion Comptable et Financière", new String[] {},7));
                elementRepository.save(new Element("Contrôle de Gestion", new String[] {},7));
                elementRepository.save(new Element("Probabilités", new String[] {},5));
                elementRepository.save(new Element("Statistique Inférencielle", new String[] {},5));
                elementRepository.save(new Element("Analyse des Données", new String[] {},4));
                elementRepository.save(new Element("Economie", new String[] {},7));
                elementRepository.save(new Element("Sociologie Générale", new String[] {},7));
                elementRepository.save(new Element("Marketing", new String[] {},7));
                elementRepository.save(new Element("Gestion de la Production et de la Qualité", new String[] {},7));
                elementRepository.save(new Element("Management de Projets", new String[] {},7));
                elementRepository.save(new Element("Projet Professionnel", new String[] {},7));
                elementRepository.save(new Element("Sociologie des Organisations", new String[] {},7));
                elementRepository.save(new Element("Gestion des Ressources Humaines", new String[] {},7));
                elementRepository.save(new Element("Français", new String[] {},7));
                elementRepository.save(new Element("Anglais", new String[] {},7));


                //elementRepository.save(e1);

            }
        };
    }
    @Bean
    CommandLineRunner GroupeCommandLineRunner(GroupeRepository groupeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Groupe g1 = new Groupe(new ObjectId[] { new ObjectId()},"Gi, GC1");
                groupeRepository.save(g1);

            }
        };
    }


    @Bean
   CommandLineRunner ModuleCommandLineRunner(ModuleRepository moduleRepository, ElementRepository elementRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                 ElementController elementController = new ElementController(elementRepository);
                 moduleRepository.save(new Modulee("Mathématiques Appliquèes 1", "s1", elementController.getElementsByNom(new String[]{"Analyse","Analyse Numérique 1"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Droits et Marchés Publics", "s1",elementController.getElementsByNom(new String[]{"Introduction au Droit","Contrats et Marchés Publics Numérique 1"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Techniques de communication 1", "s1",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Mathématiques Appliquèes 2", "s2",elementController.getElementsByNom(new String[]{"Analyse Numérique 2","Recherche Opérationnelle"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Comptabilité et contrôle de gestion", "s2",elementController.getElementsByNom(new String[]{"Gestion Comptable et Financière","Contrôle de Gestion"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Techniques de communication 2", "s2",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,1,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Mathématiques Appliquèes 3", "s3",elementController.getElementsByNom(new String[]{"Probabilités","Statistique Inférencielle","Analyse des Données"}),14,2,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Environnement Socioéconomique", "s3",elementController.getElementsByNom(new String[]{"Economie","Sociologie Générale"}),14,2,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Techniques de communication 3", "s3",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,2,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Techniques de communication 4", "s4",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,2,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Marketing et Gestion de la Production", "s4",elementController.getElementsByNom(new String[]{"Marketing","Gestion de la Production et de la Qualité"}),14,2,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Management de Projets", "s5",elementController.getElementsByNom(new String[]{"Management de Projets","Projet Professionnel"}),14,3,new ObjectId[] {new ObjectId()}));
                 moduleRepository.save(new Modulee("Gestion des Ressources Humaines", "s5",elementController.getElementsByNom(new String[]{"Gestion des Ressources Humaines","Sociologie des Organisations"}),14,3,new ObjectId[] {new ObjectId()}));
            }
        };
    }
    @Bean
    CommandLineRunner ProgressionCommandLineRunner(ProgressionRepository progressionRepository){
        return new CommandLineRunner() {

            @Override
            public void run(String... args) throws Exception {
                //progressionRepository.save(new Progression(g1,e1,m1,4));

            }
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
