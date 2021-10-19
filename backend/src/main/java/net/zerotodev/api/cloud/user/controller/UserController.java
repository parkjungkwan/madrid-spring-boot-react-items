package net.zerotodev.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.domain.UserSerializer;
import net.zerotodev.api.cloud.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user){

        System.out.println("리액트에서 넘어온 정보: "+user.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserSerializer> getById(@PathVariable long id) {
        System.out.println("--------");
        User user = userService.findById(id).get();
        UserSerializer userSerializer = UserSerializer.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .email(user.getEmail())
                .regDate(user.getRegDate())
                .build();
        return new ResponseEntity<>(userSerializer, HttpStatus.OK);
    }
}
