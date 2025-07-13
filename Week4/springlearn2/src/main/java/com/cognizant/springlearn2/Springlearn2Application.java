package com.cognizant.springlearn2;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Springlearn2Application {
	// ApplicationContext is the central interface to the Spring Beans.
    private static final Logger LOGGER = LoggerFactory.getLogger(Springlearn2Application.class);

    @SuppressWarnings("unchecked")
    public static void displayCountries() {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
			// ClassPathXmlApplicationContext reads the XML configuration from classpath.
            List<Country> countryList = (List<Country>) context.getBean("countryList", List.class);
			// context.getBean creates an object of Country using its constructor and injects the properties defined in the XML file.
            for (Country country : countryList) {
                LOGGER.debug("Country: {}", country.toString());
            }
        }
    }

    public static void main(String[] args) {
        LOGGER.debug("START");
        displayCountries();
        LOGGER.debug("END");
    }
}
