package net.zerotodev.api.cloud.dept.controller;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.common.CommonController;
import net.zerotodev.api.cloud.dept.domain.Dept;
import net.zerotodev.api.cloud.dept.domain.DeptInfo;
import net.zerotodev.api.cloud.dept.repository.DeptRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/dept")

public class DeptController implements CommonController<Dept, Long> {

    private final DeptRepository deptRepository;

    @GetMapping("/find-depts-by-emp-count/{count}")
    public ResponseEntity<List<DeptInfo>> findDeptsByEmpCount(@PathVariable int count){
        return ResponseEntity.ok(deptRepository.findEmployeesByDeptNo(count).orElse(null));
    }


    @Override
    public ResponseEntity<List<Dept>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Dept> getById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<String> save(Dept entity) {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Dept>> findById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        return null;
    }
}
