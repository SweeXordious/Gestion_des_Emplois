package main.controller;

import main.document.Filliere;
import main.document.Modulee;
import main.repository.ModuleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/dashboard")
@RequestMapping("/module")
public class ModuleController {

    private ModuleRepository moduleRepository;

    public ModuleController(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }

    @GetMapping("/all")
    public List<Modulee> getAll(){
        return moduleRepository.findAll();
    }

    @GetMapping(value="/annee/{year}")
    public List<Modulee> getModuleByYear(@PathVariable int year ){
        return moduleRepository.findModuleByYear(year);
    }

    @GetMapping("/id/{id}")
    public Object getModuleById(@PathVariable(value="id") Integer id) {
        return moduleRepository.findById(id);
    }

    @GetMapping("/nom/{nom}")
    public Object getModuleByNom(@PathVariable(value="nom") String nom) {
        return moduleRepository.findModuleByNom(nom);
    }


}
