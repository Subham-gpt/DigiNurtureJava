package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository  
public class BookRepository {

    public void saveBook(String name) {
        System.out.println("Saving book: " + name);
    }
}
