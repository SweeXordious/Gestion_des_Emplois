package main.controller;

import main.document.Filliere;
import main.document.Salle;
import main.repository.SalleRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/salle")
public class SalleController {

    private SalleRepository salleRepository;

    public SalleController(SalleRepository salleRepository) {
        this.salleRepository = salleRepository;
    }

    @GetMapping("/all")
    public List<Salle> getAll(){
        return salleRepository.findAll();
    }
}
