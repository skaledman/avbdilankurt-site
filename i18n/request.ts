import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? "tr";
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const messages = (await import(`../locales/${safeLocale}.json`)).default;
  return { locale: safeLocale, messages };
});

