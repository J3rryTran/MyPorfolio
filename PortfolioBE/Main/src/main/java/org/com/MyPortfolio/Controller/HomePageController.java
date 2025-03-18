package org.com.MyPortfolio.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomePageController {
    @Autowired
    private HomePageController

    @RequestMapping(value = {"", "/", "home"})
    public String HomePage(){

    }
}
