package com.spring.api;

import com.spring.entity.Story;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring.service.*;


@CrossOrigin
@RestController
public class StoryAPI {

    @Autowired
    private StoryService storyService;

    @PostMapping(value = {"/story"})
    public ResponseEntity<?> save(@RequestBody Story story){
        return ResponseEntity.ok(storyService.save(story));
    }

    @GetMapping(value = {"/stories"})
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(storyService.findAll());
    }

    @GetMapping(value = {"/story/{id}"})
    public ResponseEntity<?> getAll(@PathVariable Integer id){
        return ResponseEntity.ok(storyService.findOne(id));
    }
}
