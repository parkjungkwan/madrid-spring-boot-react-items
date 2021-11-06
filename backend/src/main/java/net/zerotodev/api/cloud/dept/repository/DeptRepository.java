package net.zerotodev.api.cloud.dept.repository;

import net.zerotodev.api.cloud.dept.domain.DeptInfo;
import net.zerotodev.api.cloud.emp.domain.Emp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DeptRepository extends JpaRepository<Emp, Long> {



    @Query(value = "select dept_no deptNo, count(*) empCountPerDept, sum(sal) salSum\n" +
            "from emp\n" +
            "group by dept_no\n" +
            "having count(*)  > :count", nativeQuery = true)
    Optional<List<DeptInfo>> findEmployeesByDeptNo(@Param("count") int empCountPerDept);

}

