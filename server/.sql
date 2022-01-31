CREATE TABLE users (
  id uuid DEFAULT gen_random_uuid (),
  first_name varchar(75),
  last_name varchar(75),
  email varchar(120),
  password varchar(255),
  PRIMARY KEY (id)
)

CREATE TABLE admins (
  id INT PRIMARY KEY,
  user_id uuid,
  calender VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
)

CREATE TABLE problems (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
)

CREATE TABLE sports (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
)

CREATE TABLE user_problems (
  id SERIAL PRIMARY KEY,
  user_id uuid,
  problem_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (problem_id) REFERENCES problems(id)
)

CREATE TABLE user_sports (
  id SERIAL PRIMARY KEY,
  user_id uuid,
  sport_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (sport_id) REFERENCES sports(id)
)

INSERT INTO sports (name)
VALUES(
  'Powerlifting'
), (
  'Weekend Warrior'
), (
  'Running'
), (
  'Strongman'
), (
  'Cycling'
), (
  'Olympic Lifting'
), (
  'Bodybuilding'
), (
  'Gymnastics'
), (
  'Track & Field'
), (
  'General Health'
)

-- ! INCOMPLETE PROBLEMS TABLE. MUSCLES VS JOINTS
INSERT INTO problems (name)
VALUES(
  'Neck'
), (
  'Upper Back'
), (
  'Lower Back'
), (
  'Shoulder'
), (
  'Elbow'
), (
  'Wrist'
), (
  'Hip'
), (
  'Knee'
), (
  'Track & Field'
), (
  'General Health'
)

CREATE VIEW all_user_info AS
SELECT u.first_name, u.last_name, u.email, s.name AS sport, p.name AS issues FROM users u
JOIN user_sports us
ON u.id = us.user_id
JOIN sports s
on us.sport_id = s.id
JOIN user_problems up
on u.id = up.user_id
JOIN problems p
on up.problem_id = p.id