export const ErrorMessages = {
  NETWORK_ERROR: 'Não tem um serviço rodando em localhost:3000',
  NOT_FOUND_ERROR:
    'Há um serviço rodando em localhost:3000 mas os dados aparentemente são inválidos',
  EMPLOYEE_NOT_FOUND: (id: number) => `Funcionário com ID ${id} não encontrado`,
  GENERIC_ERROR: 'Erro ao carregar dados. Por favor, tente novamente mais tarde.',
};

export default ErrorMessages;
