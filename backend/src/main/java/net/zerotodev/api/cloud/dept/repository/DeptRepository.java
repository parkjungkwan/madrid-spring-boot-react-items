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



    @Query(value = "select dept_no deptNo,  " +
            "(select dname from dept where dept.dept_no = emp.dept_no) deptName, count(*) empCountPerDept, sum(sal) salSum\n" +
            "from emp\n" +
            "group by dept_no\n" +
            "having count(*)  > :count", nativeQuery = true)
    Optional<List<DeptInfo>> findEmployeesByDeptNo(@Param("count") int empCountPerDept);

    @Query(value = "select dept_no deptNo,\n" +
            "       (select dname from dept where dept.dept_no = emp.dept_no) as deptName,\n" +
            "       count(emp_no) as empCountPerDept\n" +
            "from emp\n" +
            "group by dept_no\n" +
            "having count(dept_no) = (select count(dept_no) \n" +
            "                           from emp group by dept_no order by count(*) desc limit 1)", nativeQuery = true)
    List<DeptInfo> findDeptWhichHasMaxEmpCount();




}

