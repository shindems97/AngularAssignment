package com.javatechie.crud.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.crud.example.entity.Discount;
import com.javatechie.crud.example.entity.Product;
import com.javatechie.crud.example.service.DiscountService;

@RestController
public class DiscountController {

    @Autowired
    private DiscountService service;

    @PostMapping("/addDiscount")
    public Discount addDiscount(@RequestBody Discount discount) {
        return service.saveDiscount(discount);
    }

    @PostMapping("/addDiscounts")
    public List<Discount> addDiscounts(@RequestBody List<Discount> discounts) {
        return service.saveDiscounts(discounts);
    }

    @GetMapping("/discounts")
    public List<Discount> findAllDiscounts() {
        return service.getDiscounts();
    }

    @GetMapping("/discountById/{id}")
    public Optional<Discount> findDiscountById(@PathVariable int id) {
        return service.getDiscountById(id);
    }

    @GetMapping("/discount/{name}")
    public Discount findDiscountByName(@PathVariable String name) {
        return service.getDiscountByName(name);
    }

	/*
	 * @PutMapping("/update") public Product updateProduct(@RequestBody Product
	 * product) { return service.updateProduct(product); }
	 */

    @DeleteMapping("/deleteDiscount/{id}")
    public String deleteDiscount(@PathVariable int id) {
        return service.deleteDiscount(id);
    }
}

