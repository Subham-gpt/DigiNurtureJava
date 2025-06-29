-- Let's assume an employees(employee_id, department_id, salary) table for reference..
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(bonus_percentage IN NUMBER) AS
BEGIN
    FOR emp IN(
        SELECT employee_id, salary
        FROM employees
        WHERE department_id = 107
    ) LOOP
        UPDATE employees
        SET salary = salary + (salary * bonus_percentage / 100)
        WHERE employee_id = emp.employee_id;
    END LOOP;
    COMMIT; 
END;
