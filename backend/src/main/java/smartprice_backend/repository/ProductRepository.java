package smartprice_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import smartprice_backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}