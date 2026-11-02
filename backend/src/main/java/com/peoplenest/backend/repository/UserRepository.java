package com.peoplenest.backend.repository;

import com.peoplenest.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    boolean existsByEmailIgnoreCase(String email);
}
