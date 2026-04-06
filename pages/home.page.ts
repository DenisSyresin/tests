import { Page, Locator, expect } from '@playwright/test';
import { time } from 'console';
import { TIMEOUT } from 'dns';

export class HomePage {
  constructor(private readonly page: Page) {}

  // ─── Locators ────────────────────────────────────────────────────────────────
  readonly myAssetsbutton: Locator = this.page.locator('[data-location="home-button"]');
  readonly analyticsButton: Locator = this.page.locator('[data-location="home-analytics-button"]');
  readonly aiPricingButton: Locator = this.page.locator('[data-location="ai-pricing-model-button"]');
  readonly paywallsButton: Locator = this.page.locator('[data-locator="paywalls-button"]');
  readonly productsTabButton: Locator = this.page.locator('[data-locator="products-button"]');
  readonly placementButton: Locator = this.page.locator('[data-location="placements-button"]');
  readonly abTestingButton: Locator = this.page.locator('[data-location="ab-testing-button"]');
  readonly refundGuardButton: Locator = this.page.locator('[data-location="refund-guard-button"]');
  readonly integrationButton: Locator = this.page.locator('[data-location="integrations-button"]');
  readonly usersProfilesButton: Locator = this.page.locator('[data-location="user-profiles-button"]');
  readonly userSegmentsButton: Locator = this.page.locator('[data-location="user-segments-button"]');
  readonly eventFeedButton: Locator = this.page.locator('[data-location="event-feed-button"]');
  readonly accountSettingsButton: Locator = this.page.locator('[data-locator="account-settings-button"]');
  // Apps Dropdown 
  readonly howDidDropdown: Locator = this.page.locator('[data-locator="apps-drop-down"]');
  readonly howDidOption = (n: 1 | 2 | 3 | 4| 5): Locator =>
    this.page.locator(`[data-locator="apps-option-${n}"]`);

  // ─── Navigation ─────────────────────────────────────────────────────────────
  async goToAssets(): Promise<void> {
    await this.myAssetsbutton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/home/i)
  }

  async goToAnalytics(): Promise<void> {
    await this.analyticsButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/revenue/i);
  }
  //PRO level account
   async goToAiModelPayid(): Promise<void> {
    await this.aiPricingButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/pricing-models/i);
   }
  
    //Free level account
   async goToAiModelFree(): Promise<void> {
    await this.aiPricingButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/landing/i);
   }
  
   async goToPaywalls(): Promise<void> {
    await this.paywallsButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/paywalls/i);
   }

  async goToProduts(): Promise<void> {
    await this.productsTabButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/products/i);
  }

  async goToPlacement(): Promise<void> {
    await this.placementButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/placements/i);
  }

  async goToAbTesting(): Promise<void> {
    await this.abTestingButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/ab-testing/i);
  }

  async goToRefundGuard(): Promise<void> {
    await this.refundGuardButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/refund-guard/i);
  }

  async goToIntegrations(): Promise<void> {
    await this.integrationButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/integrations/i);
  }

  async goToUserProfiles(): Promise<void> {
    await this.usersProfilesButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/user-profiles/i);
  }

    async goToUserSegments(): Promise<void> {
    await this.userSegmentsButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/segments/i);
    }
  
    async goToEventsFeed(): Promise<void> {
    await this.eventFeedButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/events-feed/i);
  }
  async goToSettings(): Promise<void> {
    await this.accountSettingsButton.click();
    await this.page.waitForTimeout(500);
    await expect(this.page).toHaveURL(/account-settings/i);
  }
}