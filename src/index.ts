import { loginDiscord, startChrome } from "#/utils/playwright";

const run = async(): Promise<void> => {
  const page = await startChrome();

  await loginDiscord(page);

  // Open the first direct message:
  const directMessages = page.getByRole("link", { name: "direct message" });
  const firstFriend = directMessages.nth(0);

  await directMessages.nth(0).click();

  // Get username of the first friend:
  const username = await firstFriend.textContent();

  // Send a message:
  const textbox = page.getByRole("textbox", { name: "Message" });

  await textbox.type(`Hello ${username || ""}!`);
  await page.keyboard.press("Enter");

  await textbox.type("How are you today?");
  await page.keyboard.press("Enter");
};

void run();