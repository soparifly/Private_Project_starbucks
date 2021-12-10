package com.byulook.starbuck.model;

import javax.persistence.*;

@Entity
public class CustomVO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_code")
    private Long id;

    @Column(name = "menu_title")
    private String title;

    @Column(name = "menu_writer")
    private String writer;

    @Column(name = "img_url")
    private String imgUrl;

    @Column(name = "menu_option")
    private String option;
}
