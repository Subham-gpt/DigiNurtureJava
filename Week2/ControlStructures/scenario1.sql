BEGIN
  FOR customer_record IN (
    SELECT c.customer_id, c.age, l.loan_id, l.interest_rate
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
  ) LOOP
    IF customer_record.age > 60 THEN
      UPDATE loans
      SET interest_rate = interest_rate - (interest_rate * 0.01)
      WHERE loan_id = customer_record.loan_id;
    END IF;
  END LOOP;
  COMMIT;
END;
