CREATE TABLE users (
  id uuid DEFAULT gen_random_uuid (),
  first_name varchar(75),
  last_name varchar(75),
  email varchar(120),
  password varchar(255),
  PRIMARY KEY (id)
)

INSERT INTO users (first_name, last_name, email, password)
VALUES (
  'Brady',
  'Bott',
  'bottbrady@gmail.com',
  'supercoolpassword'
)