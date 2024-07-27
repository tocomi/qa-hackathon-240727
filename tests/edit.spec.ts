import test, { expect } from '@playwright/test';
import { signIn, signOut, signUp } from './utils';

const USER_PASSWORD = 'test123!';

test('更新系のテスト', async ({ page }) => {
  const email = `test+${Date.now()}@hackaton.com`;
  await signUp({
    page,
    email,
    password: USER_PASSWORD,
  });
  await signIn({
    page,
    email,
    password: USER_PASSWORD,
  });

  await test.step('4. Create a new to-do', async () => {
    await page.getByRole('button', { name: 'Add New' }).click();

    await page.getByLabel('Title', { exact: true }).fill('New Todo');

    await page.getByLabel('Description').click();
    await page.getByLabel('Description').fill('New Description');

    await page.getByRole('button', { name: 'Pick a date' }).click();
    await page.getByRole('gridcell', { name: '28' }).click();
    await page.getByText('Due Date:').click();

    await page.getByLabel('Active,').click();
    await page.getByLabel('Block', { exact: true }).getByText('Block').click();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByText('New Todo')).toBeVisible();
  });
  // await signOut(page);
});
