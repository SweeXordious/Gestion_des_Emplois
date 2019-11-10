package main.controller;

import main.document.Progression;
import main.repository.ProgressionRepository;
import org.springframework.web.bind.annotation.GetMapping;
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
}