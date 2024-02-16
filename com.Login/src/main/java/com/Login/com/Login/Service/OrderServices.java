package com.Login.com.Login.Service;

import com.Login.com.Login.JWT.JwtFilter;
import com.Login.com.Login.Repositories.OrderRepository;
import com.Login.com.Login.modules.Order;
import com.Login.com.Login.utils.apputils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class OrderServices {

    @Autowired
    OrderRepository orderRepository;



    @Autowired
    JwtFilter  jwtFilter;

    public ResponseEntity<String> addNewOrder(Map<String, String> requestMap) {
        try {

                if(validateOrderMap(requestMap, false)){
                    Order order = new Order();
                    order.setUser_id(Integer.valueOf(requestMap.get("user_id")));
                    order.setHouse_id(Integer.valueOf(requestMap.get("house_id")));
                    order.setHouse_name(requestMap.get("house_name"));
                    order.setPrice(requestMap.get("price"));
                    orderRepository.save(order);
                    return apputils.getResponseEntity("Order addes succefully", HttpStatus.OK);

                }


        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    private boolean validateOrderMap(Map<String, String> requestMap , boolean validateid) {
        if (requestMap.containsKey("user_id")) {
            if(validateid){
                return true;
            } else if (!validateid) {
                return  true;
            }
        }
        return false;


    }


    public ResponseEntity<List<Order>> getAllOrders() {
   List<Order> orders = new ArrayList<>();
   for(Order order : orderRepository.findAll()){
       orders.add(order);
   }
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }

    public ResponseEntity<String> deleteNewOrder(Map<String, String> requestMap) {
        try {
            if(jwtFilter.isAdmin()){


                orderRepository.deleteById(Integer.valueOf(requestMap.get("id"))); ;
                return apputils.getResponseEntity("Order deleted succefully", HttpStatus.OK);


            } else {
                return apputils.getResponseEntity("Unouthorized access", HttpStatus.UNAUTHORIZED);

            }

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in services", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
