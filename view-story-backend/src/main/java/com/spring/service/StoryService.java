package com.spring.service;

import com.spring.entity.Story;
import com.spring.repository.StoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class StoryService {
    @Autowired
    private StoryRepository storyRepository;


    public List<Story> findAll() {
        List<Story> stories = storyRepository.findAll();
        log.info("DS truyen {}", stories);
        return stories;
    }

    public Story findOne(Integer id) {
        return storyRepository.findById(id).orElse(new Story());
    }

    public Story save(Story story) {
        return storyRepository.save(story);
    }

}
