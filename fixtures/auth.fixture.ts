// import { test as base, expect, Page } from '@playwright/test';
// import { AuthPage } from '../pages/auth/login.page';

// type AuthFixtures = {
//   loggedPage: Page;
// };

// export const test = base.extend<AuthFixtures>({
//   loggedPage: [async ({ browser }, use) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     const auth = new AuthPage(page);
//     await auth.goto();
//     await auth.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
      
//     await use(page);
//     await context.close();
//   }, { scope: 'worker' }],
// });

// export { expect };
