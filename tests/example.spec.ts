import { test, expect } from '@playwright/test';

const BASE_URL = 'https://todo-app-qajp.vercel.app';
const USER_EMAIL = 'test@hackaton.com'
const USER_PASSWORD = 'test123!'

test('認証', async ({ page }) => {
  await page.goto(BASE_URL);
  
  await test.step('sign in', async () => {
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByPlaceholder('name@example.com').fill(USER_EMAIL);
    await page.locator('#password').fill(USER_PASSWORD);
    await page.getByRole('button', { name: 'Log in with Email' }).click();

    await expect(page).toHaveURL("https://todo-app-qajp.vercel.app/todo")
    await expect(page.getByRole('heading', { name: USER_EMAIL })).toBeVisible()
  })

  await test.step('sign out', async () => {
    await page.getByRole('menuitem', { name: 'Todos' }).click();
    await page.getByRole('menuitem', { name: 'Signout ⌘Q' }).click();

    await expect(page).toHaveURL(/^https:\/\/todo-app-qajp.vercel.app\/login/)
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible()
  })
});


