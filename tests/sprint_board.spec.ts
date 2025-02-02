import { test, expect } from '@playwright/test';
import testdata from './json/demo_stories.json';
// Import interfaces to navigate JSON data properly
import { ITestData, App, Story } from './interfaces/ITestData.ts'
// use dotenv to keep user credentials secure and modular
import 'dotenv/config'

// setup test data with interface
const data: ITestData = testdata


// Includes modular website/url key for future scaling
data.websites.forEach((website) => {
  website.stories.forEach((story) => {
    // Runs a new test for each story being tested
    test(`Testing for presence of story: ${story.name}`, async ({ page }) => {
      // Start on the website url
      await page.goto(website.url);
      // login using secrets
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill(process.env[story.username]);
      await page.getByRole('textbox', { name: 'Username' }).press('Tab');
      await page.getByRole('textbox', { name: 'Password' }).fill(process.env[story.password]);
      await page.getByRole('button', { name: 'Sign in' }).click();
      // clicks the proper board on the side bar
      await page.getByRole('button', { name: story.app }).click();
      // Selects the expected column and story
      const correct_column = page.locator('div.w-80', { hasText: story.column });
      const correct_story = correct_column.locator('div.shadow-sm', { hasText: story.name })
      // validates the story is visible in the correct column
      await expect(correct_story).toBeVisible();
      // Iterates through tags
      for (const tag of story.tags) {
        // selects expected tag
        const correct_tag = correct_story.locator('span.py-1', { hasText: tag });
        // verifies tag is visible
        await expect(correct_tag).toBeVisible();
      }
      // logout for cleanup
      await page.getByRole('button', { name: 'Logout' }).click();
    });

  });
});

