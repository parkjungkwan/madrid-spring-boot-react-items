package net.zerotodev.api.cloud.item.repository;

import net.zerotodev.api.cloud.item.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
