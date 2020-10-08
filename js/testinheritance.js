import myClass2 from './testinheritance2.js';

class test {
//This is a comment
	var a = 1;
	var b = 1;
	var holi = "holi";
	if (a = 1)
	{
		if (a = 1 && b == 2 || b == 1)
		{
			if (b = 2)
			{
				switch (b)
				{
					case 1:
					break;
					
					case 2:
					break;
					
					default:
					break;
					
				}
				
			}
		}
		
	}
	
	var a = require("./testinheritance2.js");
	new a("test");
	a.testFunction2("test2");
	
	function testFunction(nombre) {
		var s = document.createElement("script");
		s.src = nombre;
		document.querySelector("head").appendChild(s);
	}
}

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
