	var express = require('express');
	var bcrypt = require('bcrypt');
	var jwt = require('jsonwebtoken');
	var env= require('dotenv/config');
	const mongoose= require('mongoose');
	var router = express.Router();
	var model = require('../models/User');
	var config= require('../config');
	const Joi = require('joi')


	
	
	/*------------ADD USER IN DB-------------------*/	
	const createCustomer = async (req,res) => {
		const results = await model.create(req.body);
		res.json(results);
	};
	
	router.post('/add',createCustomer);
	
	
	/*-----------------FETCH ALL USERS----------------*/
	const getCustomers = async (req,res) => {
		const results = await model.find();
		res.json(results);
	};
			
	router.get('/users',getCustomers);

	
	/*-----------------DELETE USER BY ID----------------*/
	const deleteUser = async (req, res) => {
	  const results = await model.remove({
		 _id: req.params.id
	  });
	  res.json(results);
	};
	router.delete('/user/:id',deleteUser)

	/*-----------------UPDATE USER BY ID----------------*/
	const updateUser = async (req ,res) => {
	  const results = await model.updateOne(
		  {_id:req.params.id},
			{
				$set:req.body
			}
	  );
	  res.json(results);
	};

	router.patch('/user/:id',updateUser);
	
	module.exports=router;
