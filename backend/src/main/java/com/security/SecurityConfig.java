package com.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .cors(cors -> {})  // ✅ IMPORTANT
                .csrf(csrf -> csrf.disable())
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth

                        // ✅ Allow CORS preflight
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers("/error").permitAll()
                        
                        // ✅ Allow Swagger/OpenAPI 
                        .requestMatchers("/swagger-ui/**", 
                        "/v3/api-docs/**", 
                        "/swagger-resources/**", 
                        "/webjars/**").permitAll()

                        // ✅ Allow login/register
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/user/canvas/feedback").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/user/canvas/recentFeedback").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/user/contact").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/user/announcements").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/user/latest-announcement").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/admin/artworks/upload").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/user/collections").permitAll()
                        .requestMatchers(HttpMethod.GET,"/api/admin/dashboard/stats").permitAll()
                        
                        // ✅ Protected
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .requestMatchers("/api/admin/announcements").permitAll()
                        .requestMatchers("/api/admin/all-announcements").permitAll()
                        .requestMatchers("/api/user/**").hasAnyRole("USER","ADMIN")

                        .anyRequest().authenticated()
                )
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
