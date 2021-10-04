package net.zerotodev.api.cloud.user.domain;

import lombok.*;
import java.io.Serializable;

@AllArgsConstructor
@Getter @Setter @ToString
public class UserSerializer implements Serializable{
    private static final long serialVersionUID = 1L;

    private long userId;
    private String username;
    private String password;
    private String name;
    private String email;
    private String regDate;
}
