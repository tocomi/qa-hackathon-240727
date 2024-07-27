import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://todo-app-qajp.vercel.app';
const USER_EMAIL = 'test@hackaton.com';
const USER_PASSWORD = 'test123!';

export const signIn = async (page: Page, email = USER_EMAIL) => {
  await test.step('sign in', async () => {
    await page.goto(BASE_URL);

    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.locator('#password').fill(USER_PASSWORD);
    await page.getByRole('button', { name: 'Log in with Email' }).click();

    await expect(page).toHaveURL('https://todo-app-qajp.vercel.app/todo');
    await expect(page.getByRole('heading', { name: email })).toBeVisible();
  });
};

export const signOut = async (page: Page) => {
  await test.step('sign out', async () => {
    await page.getByRole('menuitem', { name: 'Todos' }).click();
    await page.getByRole('menuitem', { name: 'Signout ⌘Q' }).click();

    await expect(page).toHaveURL(/^https:\/\/todo-app-qajp.vercel.app\/login/);
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  });
};

export const signUp = async (page: Page, email: string) => {
  await test.step('sign up', async () => {
    await page.goto(`${BASE_URL}/register`);

    await page.getByPlaceholder('name@example.com').fill(email);
    await page.locator('#password').fill(USER_PASSWORD);

    await page.getByRole('button', { name: 'Sign up' }).click();

    await expect(page).toHaveURL('https://todo-app-qajp.vercel.app/todo');
  });
};
