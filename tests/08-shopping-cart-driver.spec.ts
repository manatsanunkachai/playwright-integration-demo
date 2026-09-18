import {
  test,
  expect,
  BrowserContext,
  Page,
} from '@playwright/test';

// =====================================================
// DRIVER สำหรับเรียก Shopping Card
// =====================================================

async function driverOpenInventory(
  context: BrowserContext
): Promise<Page> {

  await context.addCookies([
    {
      name: 'session-username',
      value: 'standard_user',
      domain: 'www.saucedemo.com',
      path: '/',
    },
  ]);

  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(
    page.locator('.inventory_list')
  ).toBeVisible();

  return page;
}

test('Shopping Card DRIVER', async ({ browser }) => {

  const context = await browser.newContext();

  try {

    const page = await driverOpenInventory(context);

    await page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();

    await expect(
      page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    await page.locator('.shopping_cart_link').click();

    await expect(
      page.locator('.cart_item')
    ).toBeVisible();

  } finally {

    await context.close();

  }
});