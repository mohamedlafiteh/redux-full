DROP TABLE if exists tasks;




CREATE TABLE tasks
(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(150) NOT NULL,
    completed boolean
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO mohamed;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO mohamed;