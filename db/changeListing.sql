UPDATE houses
SET name = $1,
    address = $2,
    city = $3,
    state = $4,
    zip = $5,
    img = $6,
    mortgage = $7,
    rent = $8
WHERE id = $9;
SELECT * FROM houses;