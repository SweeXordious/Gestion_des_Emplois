package main.controller;

import main.document.Classe;
import main.repository.ClasseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/classe")
public class ClasseController {

    private ClasseRepository classeRepository;

    public ClasseController(ClasseRepository _classeRepository){
        classeRepository = _classeRepository;
    }

    @GetMapping("/all")
    public List<Classe> getAll(){
        return classeRepository.findAll();
    }
}
