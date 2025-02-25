export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (!dateString || isNaN(date.getTime())) return '--';
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

export const formatPhone = (phone: string): string => {
  if (!phone || !/^\d+$/.test(phone) || phone.length != 13) return '--';
  return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`;
};
