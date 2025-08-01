import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();  
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void addition() {
        int result = calculator.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void subtraction() {
        int result = calculator.subtract(5, 2);
        assertEquals(3, result);
    }
}
