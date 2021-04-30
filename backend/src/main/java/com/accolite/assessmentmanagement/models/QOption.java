package com.accolite.assessmentmanagement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class QOption {

//    TODO: Add support fot patching and authorization from user

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Question question;

    private String datas;

    public QOption() { }

    public QOption(String datas, Question question){
        this.datas = datas;
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getdatas() {
        return datas;
    }

    public void setdatas(String datas) {
        this.datas = datas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        QOption option = (QOption) o;
        return id.equals(option.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Option{" +
                "id=" + id +
                ", datas='" + datas + '\'' +
                '}';
    }
}
