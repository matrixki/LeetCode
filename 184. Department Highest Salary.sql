-- The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

-- +----+-------+--------+--------------+
-- | Id | Name  | Salary | DepartmentId |
-- +----+-------+--------+--------------+
-- | 1  | Joe   | 70000  | 1            |
-- | 2  | Henry | 80000  | 2            |
-- | 3  | Sam   | 60000  | 2            |
-- | 4  | Max   | 90000  | 1            |
-- +----+-------+--------+--------------+
-- The Department table holds all departments of the company.

-- +----+----------+
-- | Id | Name     |
-- +----+----------+
-- | 1  | IT       |
-- | 2  | Sales    |
-- +----+----------+
-- Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.

-- +------------+----------+--------+
-- | Department | Employee | Salary |
-- +------------+----------+--------+
-- | IT         | Max      | 90000  |
-- | Sales      | Henry    | 80000  |
-- +------------+----------+--------+

# Write your MySQL query statement below
select d.Name as Department, e1.Name as Employee, e1.Salary as Salary from Employee e1, Department d where e1.DepartmentId = d.Id and e1.Salary = ( select max(Salary) from Employee e2 where e2.DepartmentId = d.Id );
select D.Name as Department, E.Name as Employee, E.Salary as Salary from Employee E join Department D ON E.DepartmentId = D.Id WHERE E.Salary = ( select max(Salary) from Employee where DepartmentId = D.Id );

# tags: Google


