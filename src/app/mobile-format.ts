// mobile format
// string => string
export function mobileFormat(mobile: string): string {
  return mobile.slice(0, 3) + '-' + mobile.slice(3, 6) + '-' + mobile.slice(6);
}
