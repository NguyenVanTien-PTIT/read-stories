package com.spring.entity;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "story")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
public class Story implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ma;

    @Column
    private String theloai;

    @Column
    private String tacgia;

    @Column
    private String tentruyen;

    @Column
    private String noidung;
}
