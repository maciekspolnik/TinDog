package com.example.demo.repository;
import com.example.demo.model.Logs;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LogsRepository extends CrudRepository<Logs, Long> {
}
