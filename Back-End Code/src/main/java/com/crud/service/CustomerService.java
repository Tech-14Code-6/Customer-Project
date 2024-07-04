package com.crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.entity.Customer;
import com.crud.repo.CustomerRepo;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepo cusRepo;
	
	public Customer createCustomer(Customer cust)
	{
		return cusRepo.save(cust);
	}
	public List<Customer> fetchAll()
	{
		return cusRepo.findAll();
	}
	public void deleteCustomer(int cid)
	{
		cusRepo.deleteById(cid);
	}
	public Customer getSingleCustomer(int cid)
	{
		return cusRepo.findById(cid).orElse(null);
	}
	public Customer updateCustomer(int cid,Customer cus)
	{
		Optional<Customer> theCustomer =cusRepo.findById(cid);
		if(theCustomer.isPresent())
		{
			Customer newCus=theCustomer.get();
			newCus.setCname(cus.getCname());
			newCus.setCemail(cus.getCemail());
			newCus.setCphone(cus.getCphone());
			return cusRepo.save(newCus);
		}
		return null;
	}

}
