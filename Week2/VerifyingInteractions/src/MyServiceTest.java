import static org.mockito.Mockito.*;
import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalAPI mockApi = mock(ExternalAPI.class); 
        MyService service = new MyService(mockApi);    
        service.fetchData();                           
        verify(mockApi).getData();                     
    }
}
