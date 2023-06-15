import { chromium, type Page } from "playwright";
import { env } from "#/utils/env";

export const startChrome = async(): Promise<Page> => {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  return page;
};

export const loginDiscord = async(page: Page): Promise<void> => {
  await page.goto("https://discord.com/login");

  await page.evaluate(token => {
    setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.body.appendChild(document.createElement("iframe")).contentWindow!.localStorage.token = `"${token}"`;
    }, 50);

    setTimeout(() => {
      location.reload();
    }, 2500);
  }, env.DISCORD_TOKEN);

  await page.waitForURL("https://discord.com/app");
};