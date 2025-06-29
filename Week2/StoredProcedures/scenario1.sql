-- Let's assume an account(account_id, balance) table for reference..
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    FOR account IN (
        SELECT account_id, balance
        FROM account
    ) LOOP
        UPDATE account
        SET balance = balance + (balance * 0.01)
        WHERE account_id = account.account_id;
    END LOOP;
    COMMIT;
END;

