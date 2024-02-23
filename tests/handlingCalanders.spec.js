import {test, expect} from '@playwright/test';

test('Handling Calendar / Date Picker', async ({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(1000);

    //approach 1 - directly filling the date in the date input box
    await page.fill("#datepicker", "02/02/2024");
    await page.waitForTimeout(3000);

    //approach 2 - date picker 
    const year = "2024"
    const month = "April"
    const date = "20"

    await page.click('#datepicker'); //opens the calendar widget
    await page.waitForTimeout(1000);  

    while(true)
    {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent(); //reading the current month in the calendar as text format
        const currentYear = await page.locator(".ui-datepicker-year").textContent(); //reading the current month in the calendar as text format

        if (currentYear == year && currentMonth == month)
        {
            break;
        };
        await page.locator(".ui-icon.ui-icon-circle-triangle-e").click(); //clicking on the next button

    };

    await page.click(`//a[@class= 'ui-state-default'][text()='${date}']`); //clicking on the desired date
    await page.waitForTimeout(3000);  

});