package com.byulook.starbuck.model;

import javax.persistence.*;

@Entity
public class FreeVO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_code")
    private Long id;

    @Column(name = "board_title")
    private String title;

    @Column(name = "board_wirter")
    private String writer;

    @Column(name = "board_like")
    private String like ;

    @Column(name = "board_date")
    private String date;

    @Column(name = "board_time")
    private String time;

    @Column(name = "board_img")
    private String img;

    @Column(name = "board_content")
    private String content;

    @Column(name = "view_count")
    private String count;
}
