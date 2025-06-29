import org.junit.Test;
import org.junit.Assert;

public class MainTest {
    @Test
    public void result() {
        Main main = new Main();
        int sum = main.add(2,6);
        Assert.assertEquals(8, sum);

        Assert.assertEquals(5, 2 + 3);

        Assert.assertTrue(5 > 3);

        Assert.assertFalse(5 < 3);

        Object obj = null;
        Assert.assertNull(obj);

        Assert.assertNotNull(new Object());
    }
}
