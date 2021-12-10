package com.byulook.starbuck.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserVO {

    @Id
    @Column(name = "user_seq")
    private Long id;

    @Column(name = "user_id")
    private String userid;

    @Column(name = "user_password")
    private String password;

    @Column(name = "user_email")
    private String email;

}
