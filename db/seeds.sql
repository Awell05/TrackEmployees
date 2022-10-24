INSERT INTO department (name )
VALUE 
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role ( title, salary, department_id)
VALUES 
("Sales Lead",100000, 4),
("Salesperson", 80000, 4),
("Lead Engineer", 150000, 1),
("Software Engineer", 120000, 1),
("Account Manager", 160000, 2),
("Accountant",125000, 2),
("Legal Team Lead", 250000, 3),
("Lawyer", 190000, 3);

INSERT INTO employee ( first_name, last_name, role_id)
VALUES
("Jill", "Scott", 1 ),
("Beyonce", "Knowles", 7),
("Ari", "Lennox", 6),
("Anita", "Baker", 3),
("Bryson", "Tiller", 4),
("Toni", "Braxton", 8),
("Aubrey", "Graham", 5 ),
("Jazmine", "Sullivan", 6),
("Kendrick", "Lamar", 2);


SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;
