import type { ValidationRule } from 'ant-design-vue/lib/form/Form';

export type ToggleItem = { img_src: string; img_src_hovered: string };

export type Email = { email: string; valCode: string };

export type ValidationRules = { [K: string]: ValidationRule[] };

export interface LoginData {
  switchTab: string[];
  switchTxt: string[];
  isWxLogin: boolean;
  isQRCodeValid: boolean;
  isLoading: boolean;
  isEmployee: boolean;
  valCodeClickable: boolean;

  phonePlaceholder: string;
  emailPlaceholder: string;
  valCodeCountDown: number;
}
