CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "image" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (1000) NOT NULL,
    "category_id" INT REFERENCES "category"
)

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "category_type" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("category_type")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
