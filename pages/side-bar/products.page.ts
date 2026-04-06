import { Locator, Page, expect } from '@playwright/test';

export class Products {
    constructor(private readonly page: Page) { }
    

    // ── Page header & main controls ────────────────────────────────────────────────
    readonly createProductButton: Locator = this.page.getByText('Create Product');
    readonly productsTabButton: Locator = this.page.getByRole('button', { name: 'Products' });
    readonly accessLvlTabButton: Locator = this.page.getByText('Access levels');
    readonly readDocButton: Locator = this.page.getByText('Read the docs');

     // ── Products table: column headers ─────────────────────────────────────────────
    readonly tableProductName: Locator = this.page.getByText('Product Name');
    readonly tableAccesslvlId: Locator = this.page.getByText('Access Level ID');
    readonly tablePeriod: Locator = this.page.getByText('Period');
    readonly tableAppStoreProductId: Locator = this.page.getByText('App Store product ID');
    readonly tablePlayStoreProductId: Locator = this.page.getByText('Play Store product ID');
    readonly tableStripePriceId: Locator = this.page.getByText('Stripe Product ID');
    readonly tableOffers: Locator = this.page.getByText('Offers');

     // ── Create Product modal: common fields ────────────────────────────────────────
    readonly productNameInput: Locator = this.page.locator('#product-name');
    readonly submitButton: Locator = this.page.locator('button[type="submit"]');

    // ── Create Product modal: App Store section ────────────────────────────────────
    readonly appStoreButton: Locator = this.page.locator('#apple"');
    readonly appStoreProductIdInput: Locator = this.page.locator('#appStoreProductId');

    // ── Create Product modal: Google Play section ─────────────────────────────────
    readonly googlePlayButton: Locator = this.page.locator('#google');
    readonly googlePlayProductIdInput: Locator = this.page.locator('#googlePlayProductId');
    readonly basePlanIdInput: Locator = this.page.locator('#googleBasePlanId');

    // ── Create Product modal: Stripe section ──────────────────────────────────────
    readonly stripeButton: Locator = this.page.getByText('Stripe');

    // ── Create Product modal: Offers section ──────────────────────────────────────
    readonly addOfferButton: Locator = this.page.getByText('Add Offer');
    readonly offerNameInput: Locator = this.page.locator('#offerName');
    readonly appleStoreOfferId: Locator = this.page.locator('#appStoreOfferId');
    readonly googlePlayOfferId: Locator = this.page.locator('#googlePlayOfferId');

    readonly appStoreOfferTypeDropdown: Locator = this.page.getByText('App Store Offer type');
    readonly appStoreOfferoption = (n: 1 | 2): Locator =>
        this.page.locator(`[data-locator="-option-${n}"]`);

    readonly deleteOfferButton: Locator = this.page.locator('botsi-icon[name="trash"]');
  
    // ── Dropdowns: Access level & period ──────────────────────────────────────────
    readonly accessLevelDrodDown: Locator = this.page.getByText(' Choose access level ID ');
    readonly AccessLvlOption = (n: 1 | 2 | 3): Locator =>
        this.page.locator(`[data-locator="-option-${n}"]`);

    readonly periodDropdown: Locator = this.page.getByText(' Choose period ');
    readonly periodOption = (n: 1 | 2 | 3): Locator =>
        this.page.locator(`[data-locator="-option-${n}"]`);

    // ── Actions ────────────────────────────────────────────────────────────────────
    async createProductButtonClick(): Promise<void> {
        await this.createProductButton.click();
        await this.page.waitForTimeout(10000);
        await expect(this.page.getByText('Access Level ID')).toBeVisible();
    }

    async productName(productName: string): Promise<void> {
        await this.productNameInput.pressSequentially(productName, { delay: 50 });
    }

    async appStoreProdId(productId: string): Promise<void> {
        await this.appStoreProductIdInput.pressSequentially(productId, { delay: 50 });
    }

    async openAccessLvl(): Promise<void> {
        this.accessLevelDrodDown.click();
    }

    async choseAccessLvl(option: 1 | 2 | 3): Promise<void> {
        await this.openAccessLvl();
        await this.AccessLvlOption(option).click();
    }

    async openPeriod(): Promise<void> {
        await this.periodDropdown.click();
    }

    async selectPeriod(option: 1 | 2 | 3): Promise<void> {
        await this.openPeriod();
        await this.periodOption(option).click();
    } 


    // ── Assertions: visibility of main page elements ───────────────────────────────
    async isElementsVisible() {
        await expect(this.createProductButton).toBeVisible();
        await expect(this.productsTabButton).toBeVisible();
        await expect(this.accessLvlTabButton).toBeVisible();
        await expect(this.readDocButton).toBeVisible();
        await expect(this.tableProductName).toBeVisible();
        await expect(this.tableAccesslvlId).toBeVisible();
        await expect(this.tablePeriod).toBeVisible();
        await expect(this.tableAppStoreProductId).toBeVisible();
        await expect(this.tablePlayStoreProductId).toBeVisible();
        await expect(this.tableStripePriceId).toBeVisible();
        await expect(this.tableOffers).toBeVisible();
    }
}
