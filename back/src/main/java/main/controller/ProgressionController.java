package main.controller;

import main.document.Modulee;
import main.document.Progression;
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

    public ProgressionController(ProgressionRepository progressionRepository) {
        this.progressionRepository = progressionRepository;
    }

    @GetMapping("/all")
    public List<Progression> getAll(){
        return progressionRepository.findAll();
    }

    @GetMapping("/{element}/{module}/{groupe}")
    public Object getProgressionByAnneeAndModuleAndGroupe(@PathVariable(value = "element") String element, @PathVariable(value = "module") String module, @PathVariable(value = "groupe") String groupe){
        Progression p =  (Progression) progressionRepository.findProgressionByElementAndModuleAndGroupe(element, module, groupe);
        System.out.println(p.toString());
        return p;
    }
}