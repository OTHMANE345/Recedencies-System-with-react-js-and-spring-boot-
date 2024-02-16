
package com.Login.com.Login.Wrapper;
        import org.springframework.web.multipart.MultipartFile;

public class productwrapperfordisplay  {

    private Integer id;
    private String description;
    private String price;

    private String name;

    private String image;

    public productwrapperfordisplay() {

    }







    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public productwrapperfordisplay(Integer id, String description, String price, String name,String image) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.name = name;
        this.image = image;
    }
}