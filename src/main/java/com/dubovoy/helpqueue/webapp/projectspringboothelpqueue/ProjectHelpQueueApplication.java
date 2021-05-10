package com.dubovoy.helpqueue.webapp.projectspringboothelpqueue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({"com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.restcontroller","com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.serv",
		"com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.repo","com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.model",
		"com.dubovoy.helpqueue.webapp.projectspringboothelpqueue.utilities"})
@SpringBootApplication
public class ProjectHelpQueueApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectHelpQueueApplication.class, args);
	}

}
