CREATE DATABASES online_portal;

Use online_portal; 

CREATE TABLE users (email VARCHAR(100) PRIMARY KEY, password VARCHAR(255) NOT NULL, role          ENUM('ADMIN','STUDENT') NOT NULL); 

 CREATE TABLE courses( course_id INT PRIMARY KEY AUTO_INCREMENT, course_name VARCHAR(100) NOT NULL, description VARCHAR(255), fees INT, start_date DATE, end_date DATE, video_expire_days INT); 

CREATE TABLE students( reg_no INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, email VARCHAR(100), course_id INT, mobile_no BIGINT, profile_pic BLOB, FOREIGN KEY(email) REFERENCES users(email) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(course_id) REFERENCES courses(course_id) ON DELETE SET NULL ON UPDATE CASCADE); 


CREATE TABLE videos (video_id INT AUTO_INCREMENT PRIMARY KEY, course_id INT NOT NULL,title VARCHAR(155),description VARCHAR(255),youtube_url VARCHAR(255),added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,CONSTRAINT fk_videos_courses FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE ); 

