package com.byulook.starbuck.model;

import javax.persistence.*;

@Entity
public class ItemVO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "base_category")
    private String base;

    @Column(name = "menu_category")
    private String menu;
}
