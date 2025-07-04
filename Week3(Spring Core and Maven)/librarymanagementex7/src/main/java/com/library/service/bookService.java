package com.library.service;

import com.library.repository.bookRepository;

public class bookService {

    private loggerService loggerService1;
    private bookRepository bookRepository1;

    public bookService(loggerService loggerService1) {
        this.loggerService1 = loggerService1;
    }

    public void setBookRepository(bookRepository bookRepository1) {
        this.bookRepository1 = bookRepository1;
    }

    public void addBook(String name) {
        loggerService1.log("Adding book: " + name);
        bookRepository1.saveBook(name);
    }
}
