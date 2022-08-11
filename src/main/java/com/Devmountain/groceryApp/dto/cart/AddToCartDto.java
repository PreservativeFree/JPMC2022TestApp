/* Work in Progress */
package com.Devmountain.groceryApp.dto.cart;

import javax.validation.constraints.NotNull;

public class AddToCartDto {

    private Integer id;
    private @NotNull Integer produceId;
    private @NotNull Integer quantity;

    public AddToCartDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProduceId() {
        return produceId;
    }

    public void setProduceId(Integer produceId) {
        this.produceId = produceId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
