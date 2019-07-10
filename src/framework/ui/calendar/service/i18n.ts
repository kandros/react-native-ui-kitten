/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export interface NativeDateDayNames {
  narrow?: string[];
  short?: string[];
  long?: string[];
}

export interface NativeDateMonthNames {
  short?: string[];
  long?: string[];
}

export interface NativeDateI18nLocale {
  dayNames?: NativeDateDayNames;
  monthNames?: NativeDateMonthNames;
}

export interface NativeDateI18n {
  [key: string]: {
    dayNames?: NativeDateDayNames;
    monthNames?: NativeDateMonthNames;
  };
}
