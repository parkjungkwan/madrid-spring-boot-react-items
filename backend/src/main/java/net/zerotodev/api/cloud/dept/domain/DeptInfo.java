package net.zerotodev.api.cloud.dept.domain;

import lombok.Data;

public interface DeptInfo {
    Integer getDeptNo();
    Integer getEmpCountPerDept();
    Integer getSalSum();
}
