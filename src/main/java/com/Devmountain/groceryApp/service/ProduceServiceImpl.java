package com.Devmountain.groceryApp.service;

import com.Devmountain.groceryApp.dto.ProduceDto;
//import com.Devmountain.groceryApp.exceptions.ProductNotExistsException;
//import com.Devmountain.groceryApp.exceptions.ProduceNotExistsException;
import com.Devmountain.groceryApp.model.Produce;
import com.Devmountain.groceryApp.repository.ProduceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProduceServiceImpl {
    @Autowired
    ProduceRepository produceRepository; //  produceRepository.doSomething();

    public void createProduce(ProduceDto produceDto) {
        Produce produce = new Produce();
        produce.setDescription(produceDto.getDescription());
        produce.setImageUrl(produceDto.getImageUrl());
        produce.setName(produceDto.getName());
        produce.setPrice(produceDto.getPrice());
        produceRepository.save(produce);
    }

    public ProduceDto getProduceDto(Produce produce){
        ProduceDto produceDto = new ProduceDto();
        produceDto.setDescription(produce.getDescription());
        produceDto.setImageUrl(produce.getImageUrl());
        produceDto.setName(produce.getName());
        produceDto.setPrice(produce.getPrice());
        produceDto.setId(produce.getId());
        return produceDto;
    }

    public List<ProduceDto> getAllProduce() { //This is the rewrite layer for getProduce
        List<Produce> allProduce = produceRepository.findAll();
        List<ProduceDto> produceDtos = new ArrayList<>();
        for(Produce produce: allProduce) {
            produceDtos.add(getProduceDto(produce));
        }
        return produceDtos;
    }

    public void updateProduct(Integer produceId, ProduceDto produceDto) throws Exception {
        Optional<Produce> optionalProduce = produceRepository.findById(produceId);
        if (!optionalProduce.isPresent()) {
            throw new Exception("product not present");
        }
        Produce produce = optionalProduce.get();
        produce.setDescription(produceDto.getDescription());
        produce.setImageUrl(produceDto.getImageUrl());
        produce.setName(produceDto.getName());
        produce.setPrice(produceDto.getPrice());
        produceRepository.save(produce);
    }

 /*   public Produce findById(Integer produceId) {
        Optional<Produce> optionalProduce = produceRepository.findById(produceId);
        if(optionalProduce.isEmpty()) {
           return optionalProduce; //throw new ProduceNotExistsException("Produce is Invalid" + produceId);
        }
    }*/
}