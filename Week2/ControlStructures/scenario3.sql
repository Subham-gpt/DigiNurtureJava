BEGIN
  FOR loan_record IN (
    SELECT loan_id, customer_id, due_date
    FROM loans
    WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Loan ID ' || loan_record.loan_id ||
      ' for Customer ID ' || loan_record.customer_id ||
      ' is due on ' || TO_CHAR(loan_record.due_date)
    );
  END LOOP;
END;
