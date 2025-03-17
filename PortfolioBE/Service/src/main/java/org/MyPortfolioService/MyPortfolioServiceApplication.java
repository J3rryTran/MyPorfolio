package org.MyPortfolioService;

import org.MyPortfolioService.Service.MyPortfolioService0;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.annotation.ApplicationScope;

@ApplicationScope
@SpringBootApplication
@RequestMapping
public class MyPortfolioServiceApplication {
    public static void main(String[] agrs){
        SpringApplication.run(MyPortfolioService0.class, agrs);
    }
}
