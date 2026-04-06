import { Locator, Page, expect } from '@playwright/test';

export class AuthPage {
  constructor( private readonly page: Page ) {}

  //  --- Locators ---
  readonly signInEmailInput: Locator = this.page.locator('[data-locator="email"]');
  readonly signInPasswordInput: Locator = this.page.locator('[data-locator="password"]');
  readonly submitButton: Locator = this.page.locator('[data-locator="submit-button"]');
  readonly signUpButton: Locator = this.page.locator('[data-locator="sign-up-button"]');
  readonly forgotPasswordButton: Locator = this.page.locator('[data-locator="forgot-password"]');

  // --- Navigation ---  
  async goto(): Promise<void> {
    await this.page.goto(`${process.env.BASE_URL!}/sign-in`);
  }

  // --- Actions ---  
  async login(email: string, password: string): Promise<void> {
    await this.signInEmailInput.pressSequentially(email,{delay: 50});
    await this.signInPasswordInput.pressSequentially(password, {delay: 50});
    await this.submitButton.click();
    await expect(this.page).toHaveURL(/home/i);
  }

  async signUp(): Promise<void> {
    await this.signUpButton.click();
  }

  async forgotPassword(): Promise<void> {
    await this.forgotPasswordButton.click();
  }

}
