package com.example.demo.manager;

import com.example.demo.model.Settings;
import com.example.demo.model.User;
import com.example.demo.repository.SettingsRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SettingsManager {

    private SettingsRepository settingsRepository;

    @Autowired
    public SettingsManager(SettingsRepository settingsRepository){
        this.settingsRepository = settingsRepository; }

    public Optional<Settings> findByID(Long id){
        return settingsRepository.findById(id); }

    public Settings save(Settings setting){
        return settingsRepository.save(setting); }

    public void delete(Long id){
        settingsRepository.deleteById(id); }

}
