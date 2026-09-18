import { test, expect } from '@playwright/test';

test('Shopping Card STUB:มนัสนันท์ กาชัย', async ({ page }) => {

  // =====================================================
  // STUB : Shopping Card
  // =====================================================

  await page.setContent(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Stub Shopping Card</title>
      </head>
      <body>
        <h1>Shopping Card</h1>

        <div class="shopping_cart" data-test="stub-shopping-card">
          <div class="cart_item">
            <div class="inventory_item_name">
              มนัสนันท์ กาชัย
            </div>
          </div>
        </div>
      </body>
    </html>
  `);

  // =====================================================
  // Assert : ตรวจสอบชื่อและนามสกุล
  // =====================================================

  await expect(
    page.locator('[data-test="stub-shopping-card"]')
  ).toBeVisible();

  await expect(
    page.locator('.inventory_item_name')
  ).toContainText('มนัสนันท์');

  await expect(
    page.locator('.inventory_item_name')
  ).toContainText('กาชัย');
});