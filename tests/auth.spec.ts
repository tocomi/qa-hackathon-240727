import { test } from '@playwright/test';
import { signIn, signOut } from './utils';

test('認証', async ({ page }) => {
  await signIn(page);
  await signOut(page);
});
