package com.proyecto.proyectInt.controller;

import com.proyecto.proyectInt.exception.BadRequestException;
import com.proyecto.proyectInt.exception.ResourceNotFoundException;
import com.proyecto.proyectInt.model.HouseRule;
import com.proyecto.proyectInt.service.HouseRuleService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/houseRules")
public class HouseRuleController {

    @Autowired
    HouseRuleService houseRuleService;

    Logger logger = LogManager.getLogger(HouseRuleController.class);

    @GetMapping("/findAll")
    public ResponseEntity<List<HouseRule>> getHouseRuleList() throws ResourceNotFoundException {
        logger.info("Retrieving data from HouseRules table");
        return ResponseEntity.ok(houseRuleService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<HouseRule>> getHouseRuleById(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Retrieving data from HouseRules table");
        return ResponseEntity.ok(houseRuleService.findById(id));
    }
    @PostMapping
    public ResponseEntity<HouseRule> addHouseRule(@RequestBody HouseRule houseRule) throws BadRequestException {
        logger.info("Adding new HouseRules");
        return ResponseEntity.ok(houseRuleService.create(houseRule));
    }
    @PutMapping("update")
    public ResponseEntity<HouseRule> updateHouseRule(@RequestBody HouseRule houseRule) throws BadRequestException {
        logger.info("Updating HouseRules");
        return ResponseEntity.ok(houseRuleService.update(houseRule));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHouseRules(@PathVariable Long id) throws ResourceNotFoundException {
        logger.info("Deleting HouseRules");
        houseRuleService.delete(id);
        return ResponseEntity.ok("HouseRules deleted");
    }
}