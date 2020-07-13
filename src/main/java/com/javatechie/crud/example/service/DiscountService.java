package com.javatechie.crud.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatechie.crud.example.entity.Discount;
import com.javatechie.crud.example.repository.DiscountRepository;

@Service
public class DiscountService {
    @Autowired
    private DiscountRepository repository;

    public Discount saveDiscount(Discount discount) {
        return repository.save(discount);
    }

    public List<Discount> saveDiscounts(List<Discount> discounts) {
        return repository.saveAll(discounts);
    }

    public List<Discount> getDiscounts() {
        return repository.findAll();
    }

    public Optional<Discount> getDiscountById(int id) {
        return repository.findById(id);
    }

    public Discount getDiscountByName(String name) {
        return repository.findByName(name);
    }

    public String deleteDiscount(int id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

	/*
	 * public Product updateProduct(Product product) { Product existingProduct =
	 * repository.findById(product.getId()).orElse(null);
	 * existingProduct.setName(product.getName());
	 * existingProduct.setQuantity(product.getQuantity());
	 * existingProduct.setPrice(product.getPrice()); return
	 * repository.save(existingProduct); }
	 */


}
