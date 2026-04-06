import { test, expect } from '@playwright/test';
import { SignUp } from '../../pages/auth/sign-up.page';
import {
  randomEmail,
  randomAppName,
  randomSignUpOptions
} from '../../utils/random';

test('user can sign up successfully', async ({ page }) => {
    const auth = new SignUp(page);

    const email = randomEmail(process.env.SIGN_UP_EMAIL_BASE!);
    const password = process.env.SIGN_UP_PASSWORD!;
    
    const appName = randomAppName('test_app');

    const opts = randomSignUpOptions();

    await auth.signUp(email, password, opts, appName);

    await expect(page).toHaveURL(/home/i);

});