package net.zerotodev.api.cloud.emp.domain;
import com.sun.istack.NotNull;
import lombok.Data;
import net.zerotodev.api.cloud.board.domain.Article;
import net.zerotodev.api.cloud.dept.domain.Dept;
import org.springframework.stereotype.Component;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Data @Entity
@Component @Table(name = "emp")
public class Emp {
    @Id
    private long empNo;

    @Column(length = 10)
    @NotNull
    private String ename;
    @Column(length = 9)
    @NotNull
    private String job;
    @Column(length = 13)
    @NotNull
    private long mgr;
    @Column(length = 13)
    @NotNull
    private String hireDate;
    @Column
    @NotNull
    private long sal;
    @Column
    @NotNull
    private long comm;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "deptNo", insertable = false, updatable = false)
    private Dept dept;
}