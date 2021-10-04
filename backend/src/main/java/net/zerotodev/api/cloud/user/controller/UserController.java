package net.zerotodev.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.domain.UserSerializer;
import net.zerotodev.api.cloud.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;

    @GetMapping("/users/{id}")
    public ResponseEntity<UserSerializer> getById(@PathVariable long id) throws JsonProcessingException {
        User user = userService.findById(id).get();
        UserSerializer userSerializer = new UserSerializer(user.getUserId(),
                user.getUsername(), user.getPassword(), user.getName(), user.getEmail(), user.getRegDate());
        return new ResponseEntity<>(userSerializer, HttpStatus.OK);
    }
}
