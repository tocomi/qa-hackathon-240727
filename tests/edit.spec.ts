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

    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByText('New Todo')).toBeVisible();
    await expect(page.getByText('New Description')).toBeVisible();
    await expect(page.getByRole('gridcell', { name: 'ACTIVE' })).toBeVisible();
  });

  // TODO: ここで待たないと編集ボタンでダイアログが開かなくなる。できればやめたい
  await page.waitForTimeout(500);

  await test.step('6. Complete to-do', async () => {
    await page.getByLabel('Edit Todo').click();
    await page.getByLabel('Active,').click();
    await page
      .getByLabel('Completed', { exact: true })
      .getByText('Completed')
      .click();
    await page.getByRole('button', { name: 'Update' }).click();
    await expect(
      page.getByRole('gridcell', { name: 'COMPLETED' })
    ).toBeVisible();
  });

  await page.waitForTimeout(500);

  await test.step('7. Edit to-do', async () => {
    await page.getByLabel('Edit Todo').click();

    await page.getByLabel('Title', { exact: true }).fill('Edited Todo');

    await page.getByLabel('Description').click();
    await page.getByLabel('Description').fill('Edited Description');

    await page.getByRole('button', { name: /28/ }).click();
    await page.getByRole('gridcell', { name: '27' }).click();
    await page.getByText('Due Date:').click();

    await page.getByLabel('Completed,').click();
    await page.getByLabel('Block', { exact: true }).getByText('Block').click();

    await page.getByRole('button', { name: 'Update' }).click();

    await expect(page.getByText('Edited Todo')).toBeVisible();
    await expect(page.getByText('Edited Description')).toBeVisible();
    await expect(page.getByRole('gridcell', { name: 'BLOCK' })).toBeVisible();
  });

  await test.step('8. Delete to-do', async () => {
    await page.getByLabel('Delete Todo').click();
    await page.getByLabel('Confirm').click();

    await expect(page.getByText('Edited Todo')).not.toBeVisible();
  });

  await signOut(page);
});
