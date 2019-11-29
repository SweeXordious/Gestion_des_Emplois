package main.controller;

import main.document.Classe;
import main.document.Element;
import main.repository.ElementRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/element")
public class ElementController {

    private ElementRepository elementRepository;

    public ElementController(ElementRepository elementRepository) {
        this.elementRepository = elementRepository;
    }


    @GetMapping("/all")
    public List<Element> getAll(){
        return elementRepository.findAll();
    }

    @GetMapping("/id/{id}")
    public Object getByAnnee(@PathVariable(value="id") Integer id) {
        return elementRepository.findById(id);
    }

    @GetMapping("/nom/{nom}")
    public Object getByNom(@PathVariable(value="nom") String nom) {
        return elementRepository.findElementByNom(nom);
    }

    // Used in the DBConfig to facilitate work
    public List<Element> getElementsByNom(String [] elements)
    {
        List<Element> listeElements =new ArrayList<>();
        for (String element:elements) {
            listeElements.add((Element) elementRepository.findElementByNom(element));
        }
        return listeElements;
    }

}
