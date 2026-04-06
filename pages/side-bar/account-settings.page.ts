import { Locator, Page, expect } from '@playwright/test';

export class AccountSettings{
    constructor( private readonly page: Page ) {}

    // ─── Locators ────────────────────────────────────────────────────────────────

    readonly changePassword: Locator = this.page.getByText('Change password');
    readonly newPasswordInput: Locator = this.page.getByPlaceholder('Enter your password');
    readonly confirmNewPasswordInput: Locator = this.page.getByPlaceholder('Enter your password');
    readonly companyNameInput: Locator = this.page.getByPlaceholder('Enter your Company name');
    readonly firstNameInput: Locator = this.page.getByPlaceholder('Enter your First name');
    readonly lastNameInput: Locator = this.page.getByPlaceholder('Enter your Last name');
    readonly saveButton: Locator = this.page.getByRole('button', { name: /Save/i }); 
    readonly logoutButton: Locator = this.page.getByText('Logout');

    // ─── Actions ────────────────────────────────────────────────────────────────

    async openChangePwdModal(): Promise<void> {
        await this.changePassword.click();
        await expect(this.page).toHaveTitle('New password');
        await expect(this.page).toHaveTitle('Confirm new password');

    }

    async setNewPassword(newPassword: string, confirmNewPassword: string): Promise<void> {
        await this.newPasswordInput.fill(newPassword);
        await this.confirmNewPasswordInput.fill(confirmNewPassword);
        await this.changePassword.click();

    }

    async setNewCompanyName(companyName: string): Promise<void> {
        await this.companyNameInput.fill(companyName);
        await this.saveButton.click();

        // add expect!!!!
    }

    async setNewFirstName(newFirstName: string): Promise<void> {
        await this.firstNameInput.fill(newFirstName);
        await this.saveButton.click();

        // add expect!!!!
    }

    async setNewLastName(newLastName: string): Promise<void> {
        await this.lastNameInput.fill(newLastName);
        await this.saveButton.click();

        // add expect!!!!
    }
      async logout(): Promise<void> {
        await this.logoutButton.click();
        await expect(this.page).toHaveURL(/sign-in/i);
    }

//add agregate method!!!!

//     async updateName({ first, last }: { first: string; last: string }) {
//     await this.fillFirstName(first);
//     await this.fillLastName(last);
//     await this.save();
//   }

//   async expectNamePersisted({ first, last }: { first: string; last: string }) {
//     await expect(this.firstName).toHaveValue(first);
//     await expect(this.lastName).toHaveValue(last);
//   }
}
