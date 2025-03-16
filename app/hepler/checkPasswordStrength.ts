import type { PasswordStrength } from "~/types/types";

export const checkPasswordStrength = (password: string): PasswordStrength => {
  const symbolCount = (password.match(/[@$!%*?&#]/g) || []).length;
  const digitCount = (password.match(/\d/g) || []).length;
  const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  if (password.length > 8 && (symbolCount >= 2 || digitCount >= 2 || uppercaseCount >= 2)) {
    return 'Protected';
  }

  if (password.length >= 8 && (symbolCount === 1 || digitCount >= 1 || uppercaseCount === 1)) {
    return 'Average';
  }

  if (password.length === 8) {
    return 'Poor';
  }

  return 'Average';
};
