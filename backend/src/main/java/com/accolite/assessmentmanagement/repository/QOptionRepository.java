package com.accolite.assessmentmanagement.repository;

import com.accolite.assessmentmanagement.models.QOption;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QOptionRepository extends CrudRepository<QOption, Long> {
}
