import { Locator, Page, expect } from '@playwright/test';
import { CategoryId } from '../../utils/random';
import { MrrId } from '../../utils/random';
import { HowDidId } from '../../utils/random';
import { InterestedId } from '../../utils/random';

export class SignUp {
  constructor(private readonly page: Page) { }

  // ─── Locators ────────────────────────────────────────────────────────────────
  readonly signUpEmailInput: Locator = this.page.locator('[data-locator="sing-up-email"]');
  readonly signUpPasswordInput: Locator = this.page.locator('[data-locator="sing-up-password"]');
  readonly signUpButton: Locator = this.page.locator('[data-locator="sign-up-button"]');
  readonly signInButton: Locator = this.page.locator('[data-locator="sign-in-button"]');
  readonly submitButton: Locator = this.page.locator('[data-locator="submit-button"]');
  readonly appNameInput: Locator = this.page.locator('[data-locator="app-name-text"]');
  // TODO: замінити на data-locator, коли зʼявиться на фронті
  readonly welcomeText: Locator = this.page.getByText(/you['’]re steps away/i);
  
  // ─── How Did Dropdown ───────────────────────────────────────────────────────
  readonly howDidDropdown: Locator = this.page.locator('[data-locator="how-did-drop-down"]');
  readonly howDidOption = (n: HowDidId): Locator =>
    this.page.locator(`[data-locator="how-did-option-${n}"]`);
  // readonly howDidOption = (n: 1 | 2 | 3 | 4 | 5 | 6 | 7): Locator =>
  //   this.page.locator(`[data-locator="how-did-option-${n}"]`);
  // ─── MRR Dropdown ───────────────────────────────────────────────────────────
  readonly mrrDropdown: Locator = this.page.locator('[data-locator="mrr-drop-down"]');
  readonly mrrOption = (n: MrrId): Locator =>
    this.page.locator(`[data-locator="mrr-option-${n}"]`);

  // ─── Botsi Interested Dropdown ───────────────────────────────────────────────
  readonly botsiInterestedDropdown: Locator = this.page.locator('[data-locator="botsi-interested-drop-down"]');
  readonly botsiInterestedOption = (n: InterestedId): Locator =>
    this.page.locator(`[data-locator="botsi-interested-option-${n}"]`);

  // ─── Category Dropdown ───────────────────────────────────────────────
  readonly categoryDropdown: Locator = this.page.locator('[data-locator="category-drop-down"]');
  readonly categoryOption = (n: CategoryId ): Locator =>
    this.page.locator(`[data-locator="category-option-${n}"]`);

  // ─── Navigation ─────────────────────────────────────────────────────────────
  async goto(): Promise<void> {
    await this.page.goto(`${process.env.BASE_URL!}/sign-up`);
    await expect(this.welcomeText).toBeVisible();
  }

  // ─── Actions ────────────────────────────────────────────────────────────────
  async fillSignUpEmail(email: string): Promise<void> {
    await expect(this.signUpEmailInput).toBeVisible({ timeout: 5000 });
    await this.signUpEmailInput.pressSequentially(email,{ delay: 50 });
  }

  async fillSignUpPassword(password: string): Promise<void> {
    // await expect(this.signUpPasswordInput).toBeVisible({ timeout: 5000 });
    await this.signUpPasswordInput.pressSequentially(password, { delay: 50 });
  }

  async fillAppName(appName: string): Promise<void> {
    await this.appNameInput.pressSequentially(appName, { delay: 50 });
  }

  async openHowDid(): Promise<void> {
    await expect(this.howDidDropdown).toBeVisible({ timeout: 5000 });
    await this.howDidDropdown.click();
  }

  async selectHowDid(option: HowDidId): Promise<void> {
    await this.openHowDid();
    await expect(this.howDidOption(option)).toBeVisible({ timeout: 5000 });
    await this.howDidOption(option).click();
    await this.howDidDropdown.press('Escape');
  }

  async openMrr(): Promise<void> {
    await expect(this.mrrDropdown).toBeVisible({ timeout: 5000 });
    await this.mrrDropdown.click();
  }

  async selectMrr(option: MrrId): Promise<void> {
    await this.openMrr();
    await this.mrrOption(option).click();
    // await this.mrrDropdown.press('Escape');
  }

  async openBotsiInterested(): Promise<void> {
    await expect(this.botsiInterestedDropdown).toBeVisible({ timeout: 5000 });
    await this.botsiInterestedDropdown.click();
  }

  async selectBotsiInterested(option: InterestedId): Promise<void> {
    await this.openBotsiInterested();
    await expect(this.botsiInterestedOption(option)).toBeVisible({ timeout: 5000 });
    await this.botsiInterestedOption(option).click();
    await this.page.getByText('MRR of your apps in USD').click();
  }

  async openCategory(): Promise<void> {
    await this.categoryDropdown.click();
  }

  async selectCategory(option: CategoryId): Promise<void> {
    await this.openCategory();
    // await expect(this.categoryOption(option)).toBeVisible({ timeout: 5000 });
    await this.categoryOption(option).click();
  }

  async signUpBttn(): Promise<void> {
    await this.signUpButton.click();
  }

  async submitBttn(): Promise<void> {
    await this.submitButton.click();
  }

  async signUp(
    email: string, password: string,
    opts: {
      howDid: HowDidId; mrr: MrrId;
      interested: InterestedId; category: CategoryId
    },
    appName: string,
    expectUrl: RegExp = /onboarding/i): Promise<void> {
    
    await this.goto();

    await this.fillSignUpEmail(email);
    await this.fillSignUpPassword(password)

    await this.selectHowDid(opts.howDid);
    await this.selectMrr(opts.mrr);
    await this.selectBotsiInterested(opts.interested);

    await expect(this.signUpButton).toBeEnabled();
    await this.signUpBttn();

    await expect(this.page).toHaveURL(expectUrl);
    
    await this.fillAppName(appName);
    await this.selectCategory(opts.category);   

    await this.submitBttn();
  }

}
