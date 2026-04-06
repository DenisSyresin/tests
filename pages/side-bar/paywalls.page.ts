import { Locator, Page, expect } from '@playwright/test';

export class Paywalls {
    constructor( private readonly page: Page ) { }
    
    // ─── Locators ────────────────────────────────────────────────────────────────

    readonly createPaywall: Locator = this.page.locator('');

    // ─── Navigation ───────────────────────────────────────────────

    
    // ─── Actions ───────────────────────────────────────────────


}