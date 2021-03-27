
const{Builder,By,Key,util, WebDriver}=require("selenium-webdriver");
async function booking(){
    let driver = await new Builder().forBrowser("firefox").build();
    //Call local webside
    await driver.get("file:///F:/Ambulance-Service/html/paymentpage.html");
   //  await driver.findElement(By.id("eng")).getText();
     await driver.findElement(By.name("cardname")).sendKeys("Mandeep Singh",Key.RETURN);
     await driver.findElement(By.name("cardnumber")).sendKeys("4567-6789-4567-3456",Key.RETURN);
     await driver.findElement(By.name("expmonth")).sendKeys("09",Key.RETURN);


     await driver.findElement(By.name("expyear")).sendKeys("2023",Key.RETURN);
    

     await driver.findElement(By.name("cvv")).sendKeys("456",Key.RETURN);

     await (await driver.findElement(By.name("book"))).click();

}
booking();



