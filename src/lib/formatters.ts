export const formatDate = (dateString: string): string => {
  if (!dateString) return 'No date available';
  const date = new Date(dateString);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const day = utcDate.getDate().toString().padStart(2, '0');
  const month = (utcDate.getMonth() + 1).toString().padStart(2, '0');
  const year = utcDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phone: string): string => {
  if (!phone) return 'No phone available';
  const countryCode = phone.slice(0, 2);
  const areaCode = phone.slice(2, 4);
  const firstPart = phone.slice(4, 9);
  const secondPart = phone.slice(9);
  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
};
