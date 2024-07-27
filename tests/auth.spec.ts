import { test } from '@playwright/test';
import { signIn, signOut } from './utils';

const USER_EMAIL = 'test@hackaton.com';
const USER_PASSWORD = 'test123!';

test('認証', async ({ page }) => {
  await signIn({page, email:USER_EMAIL,  password: USER_PASSWORD});
  await signOut(page);
});
