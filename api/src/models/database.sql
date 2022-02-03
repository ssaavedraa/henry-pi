CREATE TABLE IF NOT EXISTS country(
    ID VARCHAR(3) PRIMARY KEY,
    countryName VARCHAR(255),
    flagImg VARCHAR(255),
    continent VARCHAR(255),
    capital VARCHAR(255),
    subregion VARCHAR(255),
    area BIGINT,
    population BIGINT
);