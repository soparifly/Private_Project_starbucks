package com.byulook.starbuck.service;

import com.byulook.starbuck.model.FreeVO;

import java.util.List;

public interface FreeService extends GenericService<FreeVO, Long> {
    public List<FreeVO> search(String select, String query);
}
