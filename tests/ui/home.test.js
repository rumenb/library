const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    const heading = await page.$('header');
    const text = await heading.textContent();
    expect(text).toContain('Home');  
  });
  