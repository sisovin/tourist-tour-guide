import { test, expect } from '@playwright/test';

test('home page has expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Tourist Tour Guides/);
});

test('home page has a welcome message', async ({ page }) => {
  await page.goto('/');
  const welcomeMessage = await page.textContent('h1');
  expect(welcomeMessage).toBe('Welcome to Tourist Tour Guides');
});
