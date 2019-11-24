package main.controller;

import main.document.Prof;
import main.repository.ProfRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/prof")
public class ProfController {

    private ProfRepository profRepository;

    public ProfController(ProfRepository profRepository) {
        this.profRepository = profRepository;
    }

    @GetMapping("/all")
    public List<Prof> getAll(){
        return profRepository.findAll();
    }
}
