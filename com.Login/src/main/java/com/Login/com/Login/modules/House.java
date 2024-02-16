package com.Login.com.Login.modules;

import lombok.Data;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;



@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Setter
@Table(name ="house")
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;



    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private String Price;

    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;



    public House() {

    }

    public House(String name,  String description, String price) {
        this.name = name;
        this.description = description;
        Price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
