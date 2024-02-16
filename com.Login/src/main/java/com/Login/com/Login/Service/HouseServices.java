package com.Login.com.Login.Service;

import com.Login.com.Login.JWT.JwtFilter;
import com.Login.com.Login.Repositories.HouseRepository;
import com.Login.com.Login.Wrapper.Productwrapper;
import com.Login.com.Login.Wrapper.productwrapperfordisplay;
import com.Login.com.Login.modules.House;
import com.Login.com.Login.utils.apputils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
@Slf4j
@Service
public class HouseServices {

    @Autowired
    HouseRepository houseRepository;


    @Autowired
    JwtFilter jwtFilter;



    public ResponseEntity<String> addNewHouse(Productwrapper requestMap) {
        try {
            if(jwtFilter.isAdmin()){
                houseRepository.save(getHouseFromMap(requestMap)) ;
                    return apputils.getResponseEntity("House addes succefully", HttpStatus.OK);
            } else {
                return apputils.getResponseEntity("Unouthorized access", HttpStatus.UNAUTHORIZED);

            }

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in services", HttpStatus.INTERNAL_SERVER_ERROR);

    }




    private House getHouseFromMap(Productwrapper requestMap) throws IOException {
        House house = new House();
        house.setName(requestMap.getName());
        house.setPrice(requestMap.getPrice());
        house.setDescription(requestMap.getDescription());
        house.setImage(Base64.getEncoder().encodeToString(requestMap.getImage().getBytes()));
        return house;
    }





    public ResponseEntity<List<House>> getAllHouses() {
     List<House> houses = houseRepository.findAll();
        return new ResponseEntity<>(houses, HttpStatus.OK);

    }



//here i still need to change the wrapper
    public ResponseEntity<productwrapperfordisplay> showHouse(Map<String, String> requestMap) {
        try {
            String id = requestMap.get("id");
            House house = houseRepository.findById(Integer.valueOf(id)).get();
            productwrapperfordisplay housewrapper = new productwrapperfordisplay();

            housewrapper.setName(house.getName());
            housewrapper.setPrice(house.getPrice());
            housewrapper.setDescription(house.getDescription());

            housewrapper.setImage(house.getImage());
            housewrapper.setId(Integer.valueOf(id));
            return new ResponseEntity<>(housewrapper, HttpStatus.OK);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new productwrapperfordisplay(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<String> updateNewHouse(Map<String, String> requestMap) {
        try {
            if(jwtFilter.isAdmin()){
                String id = requestMap.get("id");
                //hna mn afdal n7yd optional w nkhli ghi House
                Optional<House> house = houseRepository.findById(Integer.valueOf(id));
                if(!house.isEmpty()){

                    House house1 = new House();
                    house1.setName(requestMap.get("name"));
                    house1.setId(Integer.valueOf(id));
                    house1.setDescription(requestMap.get("description"));
                    house1.setPrice(requestMap.get("price"));

                    House house2 = houseRepository.findById(Integer.valueOf(id)).get();

                    house1.setImage(house2.getImage());
                    houseRepository.save(house1) ;
                    return apputils.getResponseEntity("House updates succefully", HttpStatus.OK);
                }else {
                    return apputils.getResponseEntity("House id doesn't exist", HttpStatus.BAD_REQUEST);

                }
            } else {
                return apputils.getResponseEntity("Unouthorized access", HttpStatus.UNAUTHORIZED);

            }

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in services", HttpStatus.INTERNAL_SERVER_ERROR);

    }



    public ResponseEntity<String> deleteNewHouse(Map<String, String> requestMap) {
        try {
            if(jwtFilter.isAdmin()){


                houseRepository.deleteById(Integer.valueOf(requestMap.get("id"))); ;
                return apputils.getResponseEntity("House deleted succefully", HttpStatus.OK);


            } else {
                return apputils.getResponseEntity("Unouthorized access", HttpStatus.UNAUTHORIZED);

            }

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return apputils.getResponseEntity("Something went wrong in services", HttpStatus.INTERNAL_SERVER_ERROR);
    }


}

