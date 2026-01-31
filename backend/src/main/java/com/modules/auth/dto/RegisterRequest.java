package com.modules.auth.dto;

import com.enums.Role;
// import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequest {
    

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    // @JsonIgnore 
    private String password;

    private Role role; // ADMIN / USER

}
