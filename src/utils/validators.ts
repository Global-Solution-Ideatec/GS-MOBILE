export function validateEmail(email: string): boolean {
  // Regex para validação básica de e-mail
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 8;
}

export function validateRequired(text: string): boolean {
  return text.trim().length > 0;
}
