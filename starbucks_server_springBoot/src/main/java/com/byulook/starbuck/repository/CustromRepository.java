package com.byulook.starbuck.repository;

import com.byulook.starbuck.model.CustomVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface CustromRepository extends JpaRepository<CustomVO, Long> {

    List<CustomVO> findAllById(Long id);

    List<CustomVO> findByImageSeq(@Param(value="customSeq")Long customId);


}
