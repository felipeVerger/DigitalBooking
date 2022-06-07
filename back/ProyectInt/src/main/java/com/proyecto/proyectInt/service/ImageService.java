package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Image;
import com.proyecto.proyectInt.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ImageService {
    private final ImageRepository repository;

    @Autowired
    public ImageService(ImageRepository repository) {
        this.repository = repository;
    }

    public Optional<Image> search(Long id) throws ResourceNotFoundException {
        Optional<Image> imageSearched = repository.findById(id);
        if(imageSearched.isPresent()){
            return imageSearched;
        }else{
            throw new ResourceNotFoundException("Could not find the image with id: "+id+", there was an error.");
        }
    }

    public List<Image> searchAll() throws BadRequestException {
        List<Image> images = repository.findAll();
        if(images.isEmpty()){
            throw new BadRequestException("There are no registered images");
        }else{
            return images;
        }
    }

    public Image imageSave(Image image) throws BadRequestException{
        Optional<Image> searchedImage = repository.findById(image.getId());
        if(searchedImage.isPresent()) {
            throw new BadRequestException("There is already a image with id: " + image.getId() + ".");
        }else {
            return repository.save(image);
        }
    }

    public void imageDelete(Long id) throws ResourceNotFoundException {
        Optional<Image> imageSearched= search(id);
        if (imageSearched.isPresent()){
            repository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("It is not possible to remove the Image class with id: "+id+", there was an error");
        }
    }

    public Image toUpdate(Image image) throws ResourceNotFoundException {
        Optional<Image> imageSearched = search(image.getId());
        if (imageSearched.isPresent())
            return repository.save(image);
        else
            return null;
    }

}
