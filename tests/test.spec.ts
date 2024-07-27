import { test, expect } from '@playwright/test';
import { signIn, signOut } from './utils';

const USER_EMAIL = 'test+TT@hackaton.com';
const USER_PASSWORD = 'test123!';

test('TODO一覧を表示する', async ({ page }) => {
  await signIn({page, email: USER_EMAIL, password: USER_PASSWORD});

  await expect(page.getByText('Total 3 todos')).toBeVisible();
  await expect(page.getByRole('rowheader')).toHaveCount(3);

  await signOut(page)
});
