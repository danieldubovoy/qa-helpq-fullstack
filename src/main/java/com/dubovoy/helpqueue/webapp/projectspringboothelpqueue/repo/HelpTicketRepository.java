package com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.repo;

import com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.model.HelpTicket;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface HelpTicketRepository extends JpaRepository<HelpTicket, Long> {
    List<HelpTicket> findTicketByUrgency(String value);
    List<HelpTicket> findTicketByDepartment(String value);

    @Query("Select x From HelpTicket x")
    List<HelpTicket> findByAndSort(Sort sort);

}