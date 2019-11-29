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
                anneeRepository.save(new Annee(StaticIDs.anneeId++,"Promotion_2019"));
                anneeRepository.save(new Annee(StaticIDs.anneeId++,"Promotion_2018"));
                anneeRepository.save( new Annee(StaticIDs.anneeId++,"Promotion_2017"));
            }
        };
    }

    @Bean
    CommandLineRunner FilliereCommandLineRunner(FilliereRepository filliereRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                filliereRepository.save(new Filliere(StaticIDs.filliere++,"GI", "Genie Info"));
                filliereRepository.save(new Filliere(StaticIDs.filliere++,"GE", "Genie Electrique"));
                filliereRepository.save(new Filliere(StaticIDs.filliere++,"GC", "Genie Civil"));
            }
        };
    }

    @Bean
    CommandLineRunner ClasseCommandLineRunner(ClasseRepository classeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                classeRepository.save(new Classe(StaticIDs.classe++, "GI", "GI"));
                classeRepository.save(new Classe(StaticIDs.classe++, "GE1", "GE1"));
                classeRepository.save(new Classe(StaticIDs.classe++, "GE2", "GE2"));
                classeRepository.save(new Classe(StaticIDs.classe++, "GC1", "GC1"));
                classeRepository.save(new Classe(StaticIDs.classe++, "GC2", "GC2"));
                classeRepository.save(new Classe(StaticIDs.classe++, "GC3", "GC3"));
            }
        };
    }

    @Bean
    CommandLineRunner SalleCommandLineRunner(SalleRepository salleRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                salleRepository.save(new Salle(StaticIDs.salle++,"1"));
                salleRepository.save(new Salle(StaticIDs.salle++,"2"));
                salleRepository.save(new Salle(StaticIDs.salle++,"3"));
                salleRepository.save(new Salle(StaticIDs.salle++,"4"));
                salleRepository.save(new Salle(StaticIDs.salle++,"5"));
                salleRepository.save(new Salle(StaticIDs.salle++,"GI1"));
                salleRepository.save(new Salle(StaticIDs.salle++,"GI2"));
                salleRepository.save(new Salle(StaticIDs.salle++,"GI3"));

            }
        };
    }

    @Bean
    CommandLineRunner ElementCommandLineRunner(ElementRepository elementRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                elementRepository.save(new Element(StaticIDs.element++, "Analyse", new Element[] {},9));
                elementRepository.save(new Element(StaticIDs.element++, "Analyse Numérique 1", new Element[] {(Element) elementRepository.findElementByNom("Analyse")},5));
                elementRepository.save(new Element(StaticIDs.element++, "Introduction au Droit", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Contrats et Marchés Publics", new Element[] {(Element) elementRepository.findElementByNom("Introduction au Droit")},7));
                elementRepository.save(new Element(
                        StaticIDs.element++, "Analyse Numérique 2",
                        new Element[] {(Element) elementRepository.findElementByNom("Analyse"),
                                (Element) elementRepository.findElementByNom("Analyse Numérique 1"),}
                        ,5
                ));
                elementRepository.save(new Element(StaticIDs.element++, "Recherche Opérationnelle", new Element[] {},9));
                elementRepository.save(new Element(StaticIDs.element++, "Gestion Comptable et Financière", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Contrôle de Gestion", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Probabilités", new Element[] {},5));
                elementRepository.save(new Element(StaticIDs.element++, "Statistique Inférencielle", new Element[] {},5));
                elementRepository.save(new Element(StaticIDs.element++, "Analyse des Données", new Element[] {},4));
                elementRepository.save(new Element(StaticIDs.element++, "Economie", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Sociologie Générale", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Marketing", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Gestion de la Production et de la Qualité", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Management de Projets", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Projet Professionnel", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Sociologie des Organisations", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Gestion des Ressources Humaines", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Français", new Element[] {},7));
                elementRepository.save(new Element(StaticIDs.element++, "Anglais", new Element[] {},7));


                //elementRepository.save(e1);

            }
        };
    }
    @Bean
    CommandLineRunner GroupeCommandLineRunner(GroupeRepository groupeRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Groupe g1 = new Groupe(StaticIDs.groupe++, "Groupe GI, GC1", new Integer[] {0,3} );
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
                 moduleRepository.save(new Modulee(StaticIDs.module++, "Mathématiques Appliquèes 1", "s1", elementController.getElementsByNom(new String[]{"Analyse","Analyse Numérique 1"}),14,1,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Droits et Marchés Publics", "s1",elementController.getElementsByNom(new String[]{"Introduction au Droit","Contrats et Marchés Publics Numérique 1"}),14,1,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Techniques de communication 1", "s1",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,1, new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Mathématiques Appliquèes 2", "s2",elementController.getElementsByNom(new String[]{"Analyse Numérique 2","Recherche Opérationnelle"}),14,1,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Comptabilité et contrôle de gestion", "s2",elementController.getElementsByNom(new String[]{"Gestion Comptable et Financière","Contrôle de Gestion"}),14,1,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Techniques de communication 2", "s2",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,1,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Mathématiques Appliquèes 3", "s3",elementController.getElementsByNom(new String[]{"Probabilités","Statistique Inférencielle","Analyse des Données"}),14,2,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Environnement Socioéconomique", "s3",elementController.getElementsByNom(new String[]{"Economie","Sociologie Générale"}),14,2,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Techniques de communication 3", "s3",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,2,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Techniques de communication 4", "s4",elementController.getElementsByNom(new String[]{"Français","Anglais"}),14,2,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Marketing et Gestion de la Production", "s4",elementController.getElementsByNom(new String[]{"Marketing","Gestion de la Production et de la Qualité"}),14,2,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Management de Projets", "s5",elementController.getElementsByNom(new String[]{"Management de Projets","Projet Professionnel"}),14,3,new Integer[] {0}));
                 moduleRepository.save(new Modulee(StaticIDs.module++,"Gestion des Ressources Humaines", "s5",elementController.getElementsByNom(new String[]{"Gestion des Ressources Humaines","Sociologie des Organisations"}),14,3,new Integer[] {0}));
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
                profRepository.save(new Prof(StaticIDs.prof++,"Mousal", "Ahmed", "mail@mail.com", new int[] {1}));
            }
        };
    }
}
