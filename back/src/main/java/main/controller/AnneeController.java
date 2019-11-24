package main.controller;

import main.document.Annee;
import main.repository.AnneeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
