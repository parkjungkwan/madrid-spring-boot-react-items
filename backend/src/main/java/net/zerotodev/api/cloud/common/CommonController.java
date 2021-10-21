package net.zerotodev.api.cloud.common;

import java.util.List;
import java.util.Optional;

public interface CommonController<R, T> {
    List<R> findAll();
    R getById(T id);
    void save(R entity);
    Optional<R> findById(T id);
    boolean existsById(T id);
    long count();
    void deleteById(T id);
}
