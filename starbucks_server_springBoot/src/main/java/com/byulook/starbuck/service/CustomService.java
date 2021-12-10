package com.byulook.starbuck.service;

import com.byulook.starbuck.model.CustomVO;

import java.util.List;

public interface CustomService extends GenericService<CustomVO, Long> {

    List<CustomVO> mainList();

}
