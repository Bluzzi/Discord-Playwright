import { loginDiscord, startChrome } from "#/utils/playwright";

const run = async(): Promise<void> => {
  const page = await startChrome();

  await loginDiscord(page);

  await page.waitForURL("https://discord.com/app");
  await page.goto("https://discord.com/channels/1096459263175577670/1096459263175577673");

  setInterval(async() => {
    try {
      await page.getByRole("button", { name: "thumbsup, 1" }).last().click({ timeout: 450 });
    } catch {
      // EMPTY
    }
  }, 500);
};

void run();