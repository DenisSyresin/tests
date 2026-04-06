import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/auth/login.page';

test('user can log in successfully', async ({ page }) => {
  const auth = new AuthPage(page);

  await auth.goto();
  await auth.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

  await expect(page).toHaveURL(/home/i);
});

