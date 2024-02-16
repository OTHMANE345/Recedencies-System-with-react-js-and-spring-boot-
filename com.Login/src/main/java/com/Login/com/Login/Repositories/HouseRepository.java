package com.Login.com.Login.Repositories;

import com.Login.com.Login.modules.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HouseRepository extends JpaRepository<House, Integer> {


}
