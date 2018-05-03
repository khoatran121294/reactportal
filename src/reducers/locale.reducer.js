import { SELECT_LOCALE } from "../actions";
import intlMessagesEN from "../i18n/locales/en";
import intlMessagesVI from "../i18n/locales/vi";

const initialState = {
  lang: "en",
  messages: intlMessagesEN
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_LOCALE:
        switch(action.lang) {
            case "en": return { ...initialState, lang: "en", messages: intlMessagesEN };
            case "vi": return { ...initialState, lang: "vi", messages: intlMessagesVI };
            case "it": return { ...initialState, lang: "it", messages: null };
            default: return { ...initialState, lang: "en", messages: intlMessagesEN };
        }
    default:
      return state;
  }
}
