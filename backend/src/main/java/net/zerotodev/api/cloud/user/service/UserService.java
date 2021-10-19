package net.zerotodev.api.cloud.user.service;

import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.domain.UserDto;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(long userId);
    UserDto login(String username, String password);
}
