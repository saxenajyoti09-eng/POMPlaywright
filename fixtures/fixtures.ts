import {test as baseTest, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type Pages = {
    loginPage:LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = baseTest.extend<Pages>({
    loginPage: async ({page}, use)=>
    {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use)=>
    {
        await use(new InventoryPage(page));
    },
    cartPage: async ({page}, use)=>
    {
        await use(new CartPage(page));
    },
    checkoutPage: async ({page}, use)=>
    {
        await use(new CheckoutPage(page));
    }
});
export{expect};