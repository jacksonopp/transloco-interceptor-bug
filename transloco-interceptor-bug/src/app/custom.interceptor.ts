import { Translation, TranslocoInterceptor } from '@ngneat/transloco';

export class CustomInterceptor implements TranslocoInterceptor {
  preSaveTranslation(translation: Translation, lang: string): Translation {
    console.log({translation, lang}) // <- gets called
    return translation
  }
  preSaveTranslationKey(key: string, value: string, lang: string): string {
    console.log({ key, value, lang }); // <- does not get called
    return value;
  }

}
