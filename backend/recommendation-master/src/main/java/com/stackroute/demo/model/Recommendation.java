package com.stackroute.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Recommendation {
@Id
@GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
    strategy = "org.hibernate.id.UUIDGenerator"
    )
@Column(updatable = false, nullable = false)private String recId;
private String pid;
private String name;
private String imageURL;
private String emailId;
public Recommendation()
{
	super();
}
public Recommendation(String recId, String pid, String name, String imageURL, String emailId) {
	super();
	this.recId = recId;
	this.pid = pid;
	this.name = name;
	this.imageURL = imageURL;
	this.emailId = emailId;
}
public String getRecId() {
	return recId;
}
public void setRecId(String recId) {
	this.recId = recId;
}
public String getPid() {
	return pid;
}
public void setPid(String pid) {
	this.pid = pid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getImageURL() {
	return imageURL;
}
public void setImageURL(String imageURL) {
	this.imageURL = imageURL;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}

}
