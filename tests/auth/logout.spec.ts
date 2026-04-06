import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/auth/login.page';
import { HomePage } from '../../pages/home.page';
import { AccountSettings } from '../../pages/side-bar/account-settings.page';

test('user can log out successfully', async ({ page }) => {
  const auth = new AuthPage(page);
  const home = new HomePage(page);
  const accSettings = new AccountSettings(page);

  await auth.goto();

  await auth.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

  await home.goToSettings();
  await expect(page).toHaveURL(/account-settings/i);
  
  await accSettings.logout();
  await expect(page).toHaveURL(/sign-in/i);
  await expect(page.getByText(/Login to access your dashboard/i)).toBeVisible();

});
