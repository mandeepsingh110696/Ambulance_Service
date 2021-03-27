
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function booking(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///F:/Ambulance-Service/html/booking.html");
   //  await driver.findElement(By.id("eng")).getText();
     await driver.findElement(By.name("pname")).sendKeys("Mandeep",Key.RETURN);
     await driver.findElement(By.name("pemail")).sendKeys("mandeepsingh11066@gmail.com",Key.RETURN);
     await driver.findElement(By.name("pphone")).sendKeys("5678909878",Key.RETURN);


     await driver.findElement(By.name("pickup")).sendKeys("1039 rue champlan",Key.RETURN);
     await driver.findElement(By.name("dest")).sendKeys("4567 rue sally",Key.RETURN);
     await driver.findElement(By.name("gender")).sendKeys("male",Key.RETURN);


     await driver.findElement(By.name("patient")).sendKeys("self",Key.RETURN);
     await driver.findElement(By.name("condition")).sendKeys("critical",Key.RETURN);
     await driver.findElement(By.name("req")).sendKeys("4:00",Key.RETURN);

     await (await driver.findElement(By.name("confbook"))).click();

}
booking();



