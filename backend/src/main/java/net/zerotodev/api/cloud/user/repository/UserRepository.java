package net.zerotodev.api.cloud.user.repository;

import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.domain.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Query(value = "select username from users where users.username=:username and users.password=:passowrd",
    nativeQuery = true)
    Optional<String> login(@Param("username") String username, @Param("password") String password);
}
