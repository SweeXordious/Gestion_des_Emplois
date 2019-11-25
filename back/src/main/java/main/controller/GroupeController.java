package main.controller;

import main.document.Groupe;
import main.repository.GroupeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/groupe")
public class GroupeController {

    private GroupeRepository groupeRepository;

    public GroupeController(GroupeRepository _groupeRepository){
        this.groupeRepository = _groupeRepository;
    }

    @GetMapping("/all")
    public List<Groupe> getAll(){
        return groupeRepository.findAll();
    }
}