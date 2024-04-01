CREATE TABLE tasks (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(200) NOT NULL,
    "isDone" BOOLEAN DEFAULT FALSE
);

SELECT * from "tasks";

