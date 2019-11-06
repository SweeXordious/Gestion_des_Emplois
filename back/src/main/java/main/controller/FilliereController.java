package main.controller;

import main.document.Annee;
import main.document.Filliere;
import main.repository.AnneeRepository;
import main.repository.FilliereRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/filliere")

public class FilliereController {

    private FilliereRepository filliereRepository;

    public FilliereController(FilliereRepository _filliereRepository) {
        filliereRepository = _filliereRepository;
    }

    @GetMapping("/all")
    public List<Filliere> getAll(){
        return filliereRepository.findAll();
    }
}
