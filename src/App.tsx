import { useState, useCallback, useEffect, Suspense, lazy } from 'react';

import Navbar from '@/components/Navbar';
import SearchInput from '@/components/SearchInput';
import type { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/libs/formatters';
import employeeService from '@/services/employeeService';

const EmployeeTable = lazy(() => import('@/components/EmployeeTable'));

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-center py-8 text-red-500">
    <p>{message}</p>
  </div>
);

const LoadingSpinner = () => (
  <div className="text-center py-8">
    <p className="text-betalent-black">Carregando funcionários...</p>
  </div>
);

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch employees from API
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await employeeService.getEmployees();

      if (response.success && response.data) {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
        setError(null);
      } else {
        setError(response.error || 'An unknown error occurred');
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setFilteredEmployees(employees);
        return;
      }

      const lowercaseQuery = query.toLowerCase();
      const filtered = employees.filter(
        (employee: Employee) =>
          employee.name.toLowerCase().includes(lowercaseQuery) ||
          employee.job.toLowerCase().includes(lowercaseQuery) ||
          formatDate(employee.admission_date).includes(lowercaseQuery) ||
          formatPhone(employee.phone).includes(lowercaseQuery)
      );

      setFilteredEmployees(filtered);
    },
    [employees]
  );

  return (
    <div className="min-h-screen bg-betalent-gray-00">
      <Navbar />
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-xl font-bold text-betalent-black mb-4 md:mb-0">Funcionários</h1>
            <div className="w-full md:w-auto">
              <SearchInput onSearch={handleSearch} />
            </div>
          </div>
          {error ? (
            <ErrorMessage message={error} />
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              <EmployeeTable employees={filteredEmployees} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
