
  package com.javatechie.crud.example.controller;
  
  import org.springframework.stereotype.Controller; import
  org.springframework.web.bind.annotation.RequestMapping; import
  org.springframework.web.servlet.ModelAndView;
  
  @Controller public class MainController {
  
  @RequestMapping("/") ModelAndView home(ModelAndView modelAndView) {
  
  modelAndView.setViewName("index");
  
  return modelAndView; } }
 