package com.example.demo.repository;
import com.example.demo.model.Logs;
import com.example.demo.model.Settings;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingsRepository extends CrudRepository<Settings, Long> {
}
