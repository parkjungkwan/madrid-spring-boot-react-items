package net.zerotodev.api.cloud.user.controller;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.domain.UserDto;
import net.zerotodev.api.cloud.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserDto user){
        Optional<User> returnUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println("마리아DB에서 넘어온 정보: "+returnUser.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getById(@PathVariable long id) {
        System.out.println("--------");
        User user = userService.findById(id).get();
        UserDto userSerializer = UserDto.builder()
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
