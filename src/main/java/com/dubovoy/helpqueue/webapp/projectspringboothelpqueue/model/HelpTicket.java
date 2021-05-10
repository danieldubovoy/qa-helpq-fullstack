package com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
public class HelpTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    //Ticket Author
    @Column(name = "author")
    private String author;

    @NotNull
    //Ticket Title
    @Column(name = "title")
    private String title;

    @Column(name = "timeStamp")
    //TimeStamp
    private LocalDateTime timeStamp = LocalDateTime.now();


    @Column(name = "status")
    //Ticket Status
    private boolean status;

    @NotNull
    //Ticket Description
    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "urgency")
    private String urgency;

    @NotNull
    @Column(name = "department")
    private String department;

    public HelpTicket(Long id, @NotNull String title, @NotNull String author, @NotNull String description, @NotNull String urgency,
                      LocalDateTime timeStamp, boolean status, String department) {
        super();
        this.id = id;

        this.author = author;
        this.title = title;
        this.timeStamp = timeStamp;
        this.status = status;
        this.urgency = urgency;
        this.description = description;
        this.department = department;
    }

    public HelpTicket() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartment(){
        return department;
    }

    public void setDepartment(String department){
        this.department = department;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrgency() {
        return urgency;
    }
    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

}
