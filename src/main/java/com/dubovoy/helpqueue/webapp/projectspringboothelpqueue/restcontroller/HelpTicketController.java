package com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.restcontroller;

import com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.model.HelpTicket;
import com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.serv.HelpTicketServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class HelpTicketController {

    @Autowired
    private HelpTicketServ service;

    public HelpTicketController(HelpTicketServ service) {
        super();
        this.service = service;
    }

    @GetMapping("/ticket/readTickets")
    public ResponseEntity<List<HelpTicket>> getTicket() {
        return ResponseEntity.ok(this.service.getTicket());
    }

    @GetMapping("/ticket/readTicket/{id}")
    public ResponseEntity<HelpTicket> getSingleTicket(@PathVariable Long id) {
        return ResponseEntity.ok(this.service.getSingleTicket(id));
    }

    @PostMapping("/ticket/createTicket")
    public ResponseEntity<HelpTicket> createTicket(@RequestBody HelpTicket ticket) {
        return new ResponseEntity<>(this.service.createTicket(ticket), HttpStatus.CREATED);
    }

    @DeleteMapping("/ticket/deleteTicket/{id}")
    public ResponseEntity<Object> deleteTicket(@PathVariable Long id) {
        if (this.service.deleteTicket(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/ticket/updateTicket/{id}")
    public ResponseEntity<HelpTicket> updateTicket(@RequestBody HelpTicket ticket, @PathVariable Long id) {
        return new ResponseEntity<>(this.service.updateTicket(ticket, id), HttpStatus.ACCEPTED);
    }

    @GetMapping("/ticket/readTickets/sort/{query}")
    public ResponseEntity<List<HelpTicket>> getAllSortTitle(@PathVariable String query){
        return ResponseEntity.ok(this.service.getAllSort(query));
    }

    //Urgency
    @GetMapping("/ticket/readTickets/urgency/{value}")
    public ResponseEntity<List<HelpTicket>> filterUrgency(@PathVariable String value){
        return ResponseEntity.ok(this.service.filterUrgency(value));
    }

    //Department
    @GetMapping("/ticket/readTickets/department/{value}")
    public ResponseEntity<List<HelpTicket>> filterDepartment(@PathVariable String value){
        return ResponseEntity.ok(this.service.filterDepartment(value));
    }
}

