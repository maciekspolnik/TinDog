package com.example.demo.controller;

import com.example.demo.manager.SettingsManager;
import com.example.demo.model.Settings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/settings")
public class SettingsController {

    private SettingsManager settings;

    @Autowired
    public SettingsController(SettingsManager settings) {
        this.settings = settings;
    }

    @GetMapping("/")
    public Optional<Settings> getSettingByID(@RequestParam Long index){
        return settings.findByID(index);
    }

    @PostMapping("/")
    public Settings addSetting(@RequestBody Settings setting) {
        return  settings.save(setting);
    }

    @PutMapping
    public Settings updateSetting(@RequestBody Settings setting) {
        return  settings.save(setting);
    }

    @DeleteMapping
    public void deleteSetting(@RequestParam Long index){
        settings.delete(index);
    }
}


