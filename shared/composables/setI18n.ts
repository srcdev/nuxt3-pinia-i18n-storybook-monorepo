// import { useRootStore } from "@/stores/store.root";
import { useI18n } from "vue-i18n";

export default function setI18n(translations: any, userLocale: string = "en") {
  type MessageSchema = typeof translations;
  const { t, locale } = useI18n<
    false,
    {
      messages: MessageSchema;
    }
  >({
    messages: translations,
  });

  locale.value = userLocale;

  // watch(userLocale, (currentValue: any) => {
  //   locale.value = currentValue;
  // });

  return {
    t,
  };
}
