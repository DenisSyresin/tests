import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/auth/login.page';
import { Products} from '../../pages/side-bar/products.page';
import { HomePage } from '../../pages/home.page';

test('Check products page', async ({ page }) => {
  const auth = new AuthPage(page);
  const products = new Products(page);
  const home = new HomePage(page);

  await auth.goto();
  await auth.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);

  await home.goToProduts();

  await products.isElementsVisible();
});