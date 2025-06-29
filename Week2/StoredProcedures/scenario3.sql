-- Let's assume the same account(account_id, balance) table for reference..
CREATE OR REPLACE PROCEDURE TransferFunds(from_id IN NUMBER, to_id IN NUMBER, amount IN NUMBER) AS sender_balance NUMBER;
BEGIN
    SELECT balance INTO sender_balance
    FROM accounts
    WHERE account_id = from_id;

    IF sender_balance >= amount THEN
        -- Sender
        UPDATE accounts
        SET balance = balance - amount
        WHERE account_id = from_id;

        -- Receiver
        UPDATE accounts
        SET balance = balance + amount
        WHERE account_id = to_id;
        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Not enough balance.');
    END IF;
END;

