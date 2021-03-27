
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function login(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///F:/Ambulance-Service/html/index.html");
     await driver.findElement(By.name("ëmail")).sendKeys("mandeepsingh11066@gmail.com",Key.RETURN);
     await driver.findElement(By.name("password")).sendKeys("135454",Key.RETURN);


     await (await driver.findElement(By.name("log"))).click();
    
    //await driver.get("http://google.com");
   // await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);

}

login();
