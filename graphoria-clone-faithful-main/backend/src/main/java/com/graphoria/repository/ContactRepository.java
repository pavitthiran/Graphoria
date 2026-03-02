package com.graphoria.repository;

import com.graphoria.entity.ContactRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactRequestEntity, Long> {
}
