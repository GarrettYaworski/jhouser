UPDATE houses
SET name = $1
WHERE id = $2;
SELECT * FROM houses;