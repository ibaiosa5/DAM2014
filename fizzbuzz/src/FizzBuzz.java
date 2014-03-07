
public class FizzBuzz {

	/*
	 
	public Object fizzbuzz(int i){
		Fizz fizz=new Fizz();
		Buzz buzz=new Buzz();
		Fb fb=new Fb();
		Object[] cadena=new Object[100];
		if(fizz.fizz(i)) cadena[1]="fizz";
		if(buzz.buzz(i)) cadena[1]="buzz";
		if(fb.fb(i)) cadena[1]="fizz buzz";
		if(cadena[1]!=""){
				return cadena;
		}
		return Integer.toString(i);
		
	}*/
	
	public String fizzbuzz(int i){
		Fizz fizz=new Fizz();
		Buzz buzz=new Buzz();
		Fb fb=new Fb();
		String cadena="";
		if(fizz.validate(i)) cadena="fizz";
		if(buzz.validate(i)) cadena="buzz";
		if(fb.validate(i)) cadena="fizz buzz";
		if(cadena!=""){
				return cadena;
		}
		return Integer.toString(i);
		
	}
	 
	public String print(int k){
		String result="";
		for(int i=1;i<=k;i++){
			if(i==1){
				result=fizzbuzz(i);
			}
			else result=result+", "+fizzbuzz(i);
		}
		return result;
	}
	

}
