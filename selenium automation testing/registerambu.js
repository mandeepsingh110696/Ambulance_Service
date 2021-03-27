
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function register(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///F:/Ambulance-Service/html/index.html");
     await driver.findElement(By.name("fname")).sendKeys("Mandeep",Key.RETURN);
     await driver.findElement(By.name("lname")).sendKeys("Singh",Key.RETURN);
     await driver.findElement(By.name("emaill")).sendKeys("mandeepsingh11066@gmail.com",Key.RETURN);
     await driver.findElement(By.name("pass")).sendKeys("135454",Key.RETURN);
     await driver.findElement(By.name("cpass")).sendKeys("135454",Key.RETURN);
    
    
     
    // await driver.findElement(By.css('#cars>option:nth-child(2)')).click();
   
     await driver.findElement(By.name("pno")).sendKeys("13455678",Key.RETURN);

     await driver.findElement(By.name("address")).sendKeys("1039 rue champlan",Key.RETURN);
     await (await driver.findElement(By.name("clikk"))).click();
    
    //await driver.get("http://google.com");
   // await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);

}

register();
