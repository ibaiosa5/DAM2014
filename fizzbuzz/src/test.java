import static org.junit.Assert.*;

import org.junit.Test;


public class test {

	@Test
	public void test() {
		FizzBuzz fb=new FizzBuzz();
		assertEquals("Fizz Buzz 1=1","1",fb.print(1));
		assertEquals("Fizz Buzz 2=1,2","1, 2",fb.print(2));
		assertEquals("Fizz Buzz 3=1,2, fizz","1, 2, fizz",fb.print(3));
		assertEquals("Fizz Buzz 3=1,2, fizz","1, 2, fizz, 4, buzz",fb.print(5));
		assertEquals("Fizz Buzz 3=1,2, fizz","1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizz buzz",fb.print(15));
		
		
	}

}
