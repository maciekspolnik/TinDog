package com.example.demo.model;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name="logs")
public class Logs {
    public Logs() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String startup_time;
    private String ip;
    private String status;

    public Logs(String startup_time, String ip, String status) {
        this.startup_time = startup_time;
        this.ip = ip;
        this.status = status;
    }

    public String getStartup_time() { return startup_time; }

    public void setStartup_time(String startup_time) { this.startup_time = startup_time; }

    public String getIp() { return ip; }

    public void setIp(String ip) { this.ip = ip; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }
}
