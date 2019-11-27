package main.controller;

import main.document.Classe;
import main.document.Element;
import main.repository.ElementRepository;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/all1")
    public List<Element> getElementsByNom(String [] elements)
    {

        List<Element> listeElements =new ArrayList<>();
        for (String element:elements) {
            listeElements.add(elementRepository.findElementByNom(element));
        }
        return listeElements;
    }
}
