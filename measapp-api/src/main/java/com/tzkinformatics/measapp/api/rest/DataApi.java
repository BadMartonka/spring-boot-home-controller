package com.tzkinformatics.measapp.api.rest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class DataApi {

    @GetMapping
    public String home(Model model) {
        return "Szia Marci";
    }

}
