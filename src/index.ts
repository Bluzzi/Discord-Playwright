import { loginDiscord, startChrome } from "#/utils/playwright";

const run = async(): Promise<void> => {
  const page = await startChrome();

  await loginDiscord(page);

  await page.waitForURL("https://discord.com/app");
};

void run();