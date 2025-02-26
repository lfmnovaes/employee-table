import axios, { AxiosError } from 'axios';

import type { Employee } from '@/types/employee';
import { ErrorMessages } from '@/constants/errorMessages';

const API_URL = 'http://localhost:3000';

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};

export const employeeService = {
  /**
   * Fetches all employees from the API
   * @returns Promise with API response containing employees or error
   */
  async getEmployees(): Promise<ApiResponse<Employee[]>> {
    try {
      const response = await axios.get<Employee[]>(`${API_URL}/employees`);
      return {
        data: response.data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error('Error fetching employees:', error);

      if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK') {
          return {
            data: null,
            error: ErrorMessages.NETWORK_ERROR,
            success: false,
          };
        } else if (error.response?.status === 404) {
          return {
            data: null,
            error: ErrorMessages.NOT_FOUND_ERROR,
            success: false,
          };
        }
      }

      return {
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      };
    }
  },

  /**
   * Fetches a single employee by ID
   * @param id The employee ID
   * @returns Promise with API response containing employee or error
   */
  async getEmployeeById(id: number): Promise<ApiResponse<Employee>> {
    try {
      const response = await axios.get<Employee>(`${API_URL}/employees/${id}`);
      return {
        data: response.data,
        error: null,
        success: true,
      };
    } catch (error) {
      console.error(`Error fetching employee with id ${id}:`, error);

      if (error instanceof AxiosError) {
        if (error.code === 'ERR_NETWORK') {
          return {
            data: null,
            error: ErrorMessages.NETWORK_ERROR,
            success: false,
          };
        } else if (error.response?.status === 404) {
          return {
            data: null,
            error: ErrorMessages.EMPLOYEE_NOT_FOUND(id),
            success: false,
          };
        }
      }

      return {
        data: null,
        error: ErrorMessages.GENERIC_ERROR,
        success: false,
      };
    }
  },
};

export default employeeService;
