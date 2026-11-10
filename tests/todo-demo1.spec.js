import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('buy groccery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('go to work');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('playing PS4');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('doing Homwork');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'buy groccery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'go to work' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'playing PS4' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'doing Homwork' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});