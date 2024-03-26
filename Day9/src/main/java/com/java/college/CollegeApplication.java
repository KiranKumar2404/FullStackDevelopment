package com.java.college;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.college.Enum.Role;
import com.java.college.model.User;
import com.java.college.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class CollegeApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(CollegeApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository) {
		return args -> {
			if (userRepository.count() > 0)
				return;
			var admin = User.builder()
					.name("Admin")
					.email("admin@gmail.com")
					.password(passwordEncoder.encode("Admin@123"))
					.number("9988776655")
					.role(Role.ADMIN)
					.build();
			userRepository.save(admin);
		};
	}

}
