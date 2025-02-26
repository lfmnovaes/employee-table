import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { employeeService } from '../employeeService';
import { mockEmployee } from '@/components/__tests__/mockData';
import { ErrorMessages } from '@/constants/errorMessages';

vi.mock('axios');
const mockedAxios = axios as unknown as {
  get: ReturnType<typeof vi.fn>;
};

describe('employeeService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('getEmployees', () => {
    it('should fetch employees successfully', async () => {
      const mockEmployees = [mockEmployee];
      mockedAxios.get.mockResolvedValueOnce({ data: mockEmployees });

      const result = await employeeService.getEmployees();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees');
      expect(result).toEqual({
        data: mockEmployees,
        error: null,
        success: true,
      });
    });

    it('should handle network errors when service is not running', async () => {
      const networkError = new Error('Network Error') as AxiosError;
      networkError.code = 'ERR_NETWORK';
      mockedAxios.get.mockRejectedValueOnce(networkError);

      const result = await employeeService.getEmployees();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });

    it('should handle 404 errors with invalid data', async () => {
      const notFoundError = new Error('Not Found') as AxiosError;
      notFoundError.response = { status: 404 } as AxiosResponse;
      mockedAxios.get.mockRejectedValueOnce(notFoundError);

      const result = await employeeService.getEmployees();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });

    it('should handle other errors with generic message', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Other error'));

      const result = await employeeService.getEmployees();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });
  });

  describe('getEmployeeById', () => {
    it('should fetch an employee by id successfully', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockEmployee });

      const result = await employeeService.getEmployeeById(1);

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees/1');
      expect(result).toEqual({
        data: mockEmployee,
        error: null,
        success: true,
      });
    });

    it('should handle network errors when service is not running', async () => {
      const networkError = new Error('Network Error') as AxiosError;
      networkError.code = 'ERR_NETWORK';
      mockedAxios.get.mockRejectedValueOnce(networkError);

      const result = await employeeService.getEmployeeById(1);

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees/1');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });

    it('should handle 404 errors when employee not found', async () => {
      const notFoundError = new Error('Not Found') as AxiosError;
      notFoundError.response = { status: 404 } as AxiosResponse;
      mockedAxios.get.mockRejectedValueOnce(notFoundError);

      const result = await employeeService.getEmployeeById(1);

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees/1');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });

    it('should handle other errors with generic message', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Other error'));

      const result = await employeeService.getEmployeeById(1);

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3000/employees/1');
      expect(result).toEqual({
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      });
    });
  });
});
