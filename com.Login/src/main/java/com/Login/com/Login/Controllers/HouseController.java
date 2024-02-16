package com.Login.com.Login.Controllers;

import com.Login.com.Login.Service.HouseServices;
import com.Login.com.Login.Wrapper.Productwrapper;
import com.Login.com.Login.Wrapper.productwrapperfordisplay;
import com.Login.com.Login.modules.House;
import com.Login.com.Login.utils.apputils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequestMapping(path = "/house")
@RestController
public class HouseController {

    @Autowired
    HouseServices houseServices;
    @PostMapping(path = "/add")
    public ResponseEntity<String> addNewHouse(@ModelAttribute Productwrapper requestMap){
        try {
            return houseServices.addNewHouse(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in controller", HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @GetMapping(path = "/get")
    public ResponseEntity<List<House>> getAllHouses(){
        try {
            return houseServices.getAllHouses();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(path = "/show")
    public ResponseEntity<productwrapperfordisplay> showHouse(@RequestBody(required = true) Map<String,String> requestMap){
        try {
            return houseServices.showHouse(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new productwrapperfordisplay(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(path = "/update")
    public ResponseEntity<String> updateNewHouse(@RequestBody(required = true) Map<String,String> requestMap){
        try {
            return houseServices.updateNewHouse(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in controller", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(path = "/delete")
    public ResponseEntity<String> deleteNewHouse(@RequestBody(required = true) Map<String,String> requestMap){
        try {
            return houseServices.deleteNewHouse(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in controller", HttpStatus.INTERNAL_SERVER_ERROR);
    }




}
