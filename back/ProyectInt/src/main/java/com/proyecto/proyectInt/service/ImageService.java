package com.proyecto.proyectInt.service;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.Image;
import com.proyecto.proyectInt.repository.ImageRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ImageService implements EntityService<Image>{
    @Autowired
    ImageRepository repository;

    private static final Logger logger = LogManager.getLogger(ImageService.class);


    @Override
    public Optional<Image> findById(Long id) throws ResourceNotFoundException {
        Optional<Image> imageSearched = repository.findById(id);
        if (imageSearched.isPresent()) {
            logger.info("Success. Image found with id " + id + ".");
            return imageSearched;
        } else {
            logger.error("Attempt failed. The image you are requesting does not exist in our database. Please check input id");
            throw new ResourceNotFoundException("Attempt failed. The image you are requesting does not exist in our database. Please check input id.");
        }

    }

    @Override
    public Image update(Image image) throws BadRequestException {
        Optional<Image> imageSearched = repository.findById(image.getId());
        if (imageSearched.isPresent()) {
            logger.info("Success. Image found and modified.");
            return repository.save(image);
        } else {
            logger.error("Attempt failed. The image you are requesting does not exist in our database. Please check spelling.");
            throw new BadRequestException("Attempt failed. The image you are requesting does not exist in our database. Please check spelling.");
        }
    }

    @Override
    public List<Image> findAll() throws ResourceNotFoundException {
        List<Image> imagesSearched = repository.findAll();
        if (imagesSearched.isEmpty()) {
            logger.error("Attempt Failed. No images found in our database.");
            throw new ResourceNotFoundException("Attempt Failed. No images found in our database.");
        } else {
            logger.info("Success. Retrieving list of images.");
            return imagesSearched;
        }
    }

    @Override
    public Image create(Image image) throws BadRequestException {
        if (image.getId() != null) {
            logger.error("Attempt failed. This image already exists in our database.");
            throw new BadRequestException("Attempt failed. This image already exists in our database.");
        } else {
            logger.info("Success. New Image added to the database.");
            return image;
        }
    }

    @Override
    public void delete(Long id) throws ResourceNotFoundException {
        if (findById(id).isPresent()) {
            logger.info("Success. Image with id " + id + " has been eliminated from our database.");
            repository.deleteById(id);
        } else {
            logger.error("Attempt failed. Image with id " + id + " could not be found. Database remains untouched.");
            throw new ResourceNotFoundException("Attempt failed. Image with id " + id + " could not be found. Database remains untouched.");
        }
    }


    //additional services

    public Optional<Image> findByTitle(String title) throws ResourceNotFoundException{
        Optional<Image> imageSearched = repository.findByTitle(title);
        if (imageSearched.isPresent()) {
            logger.info("Success. Image found with title " + imageSearched.get().getTitle() + ".");
            return imageSearched;
        } else {
            logger.error("Attempt failed. The image you are requesting does not exist in our database. Please check input title");
            throw new ResourceNotFoundException("Attempt failed. The image you are requesting does not exist in our database. Please check input title.");
        }
    }
}
