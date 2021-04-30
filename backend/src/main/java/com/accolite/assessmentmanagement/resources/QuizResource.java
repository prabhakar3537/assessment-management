package com.accolite.assessmentmanagement.resources;

import com.accolite.assessmentmanagement.models.Quiz;
import com.accolite.assessmentmanagement.services.QuizService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuizResource {

    private final QuizService quizService;

    public QuizResource(QuizService quizService){
        this.quizService = quizService;
    }

    @GetMapping("/api/quizes")
    public List<Quiz> getQuizes(){
        return  quizService.getAllQuizes();
    }

    @PostMapping("/api/quiz")
    public Quiz saveQuiz(@RequestBody Quiz quiz){
        return quizService.saveQuiz(quiz);
    }



}
