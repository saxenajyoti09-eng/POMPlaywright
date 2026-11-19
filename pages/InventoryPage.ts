import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import {Logger} from '../utils/Logger';
import {HeaderComponent} from './component/HeaderComponent';
import {SidebarMenuComponent} from './component/SidebarMenuComponent';
 
export class InventoryPage extends BasePage {
    readonly pageTitle: Locator;
    readonly productSortDropdown: Locator;
    readonly header: HeaderComponent;
    readonly sidebar: SidebarMenuComponent;
 
  constructor(page:Page){
        super(page);
        this.pageTitle = page.locator('.title');
        this.productSortDropdown = page.locator('.product_sort_container');
        this.header = new HeaderComponent(page);
        this.sidebar = new SidebarMenuComponent(page);
    }
 
    async addProductToCart(productDataTestName:string):Promise<void>{
        Logger.info(`Adding product to cart with data-test attribute: ${productDataTestName}`);
        await this.page.locator(`[data-test="add-to-cart-${productDataTestName}"]`).click();
    }
 
    async removeProductFromCart(productDataTestName:string):Promise<void>{
        Logger.info(`Removing product from cart with data-test attribute: ${productDataTestName}`);
        await this.page.locator(`[data-test="remove-from-cart-${productDataTestName}"]`).click();
    }
 
    async openCart():Promise<void>{
        Logger.info(`Opening the shopping cart`);
        await this.header.openCart();
    }
   
    async logout():Promise<void>{
        Logger.info(`Logging out from the application`);
        await this.sidebar.logout();
    }
}
 