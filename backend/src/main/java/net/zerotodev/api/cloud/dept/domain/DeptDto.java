package net.zerotodev.api.cloud.dept.domain;

import lombok.Data;

@Data
public class DeptDto {
    private long deptNo;
    private int empCountPerDept;
    private int salSum;
}
