package com.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.entity.Customer;
import com.crud.service.CustomerService;

@RestController
@CrossOrigin("*")
@RequestMapping("/cust")
public class CustomerController {
	@Autowired
	private CustomerService custService;
	@PostMapping("/add")
	public Customer addCustomer(@RequestBody Customer c)
	{
		return custService.createCustomer(c);
	}
	@GetMapping("/all")
	public List<Customer> getAllCus()
	{
		return custService.fetchAll();
	}
	@DeleteMapping("del/{cid}")
	public void removeCustomer(@PathVariable int cid)
	{
		custService.deleteCustomer(cid);
	}
	@GetMapping("{id}")
	public ResponseEntity<Customer> getCustomerId(@PathVariable int id)
	{
		Customer cus=custService.getSingleCustomer(id);
		if(cus == null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(cus);
		}
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<Customer> getCustomerId(@PathVariable int id,@RequestBody Customer cus )
	{
		Customer cus1=custService.updateCustomer(id, cus);
		if(cus1 == null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(cus);
		}
	}
}
