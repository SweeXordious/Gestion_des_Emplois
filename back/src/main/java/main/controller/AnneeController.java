package main.controller;

import main.document.Annee;
import main.repository.AnneeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/annee")
public class AnneeController {

    private AnneeRepository anneeRepository;

    public AnneeController(AnneeRepository _anneeRepository){
        anneeRepository = _anneeRepository;
    }

    @GetMapping("/all")
    public List<Annee> getAll(){
        return anneeRepository.findAll();
    }

    @GetMapping("/id/{id}")
    public Object getAnneeById(@PathVariable(value="id") Integer id){
        return anneeRepository.findById(id);
    }

    @GetMapping("/annee/{annee}")
    public Object getAnneeByAnnee(@PathVariable(value="annee") String annee){
        return anneeRepository.findByAnnee(annee);
    }
}
