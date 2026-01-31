package com.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {

        Map<String, String> config = new HashMap<>();
        config.put("cloud_name", "dotmdac1e");
        config.put("api_key", "966398545866624");
        config.put("api_secret", "Zd7MEuVa9q-vpNvKm5EAI3_YNbY");

        return new Cloudinary(config);
    }
}
