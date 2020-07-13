package com.javatechie.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javatechie.crud.example.entity.Discount;

public interface DiscountRepository extends JpaRepository<Discount,Integer>{
	Discount findByName(String name);
}
