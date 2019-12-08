package main.controller;

import main.document.Element;
import main.document.Groupe;
import main.document.Modulee;
import main.document.Progression;
import main.repository.ElementRepository;
import main.repository.GroupeRepository;
import main.repository.ModuleRepository;
import main.repository.ProgressionRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Progression")
public class ProgressionController {

    private ProgressionRepository progressionRepository;
    private ElementRepository elementRepository ;
    private ModuleRepository moduleRepository;
    private GroupeRepository groupeRepository;

    public ProgressionController(ProgressionRepository progressionRepository,  ElementRepository elementRepository, ModuleRepository moduleRepository, GroupeRepository groupe) {
        this.progressionRepository = progressionRepository;
        this.elementRepository =  elementRepository ;
        this.moduleRepository = moduleRepository;
        this.groupeRepository = groupe;
    }

    @GetMapping("/all")
    public List<Progression> getAll(){
        return progressionRepository.findAll();
    }

    @GetMapping("/{element}/{module}/{groupe}")
    public Progression getProgressionByAnneeAndModuleAndGroupe(@PathVariable(value = "element") String element, @PathVariable(value = "module") String module, @PathVariable(value = "groupe") String groupe){
        Element e = (Element)elementRepository.findElementByNom(element);
        Modulee m = (Modulee)moduleRepository.findModuleByNom(module);
        Groupe g =(Groupe)groupeRepository.findGroupeByNom(groupe);
        Progression p = (Progression)progressionRepository.findProgressionByElementAndModuleAndGroupe(e,m, g);
        return p;
    }
}