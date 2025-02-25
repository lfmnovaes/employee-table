import { useState, useCallback } from 'react';

import EmployeeTable from '@/components/EmployeeTable';
import Navbar from '@/components/Navbar';
import SearchInput from '@/components/SearchInput';
import { temporaryEmployeesData } from './data/employees'; // Temporary data
import type { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/libs/formatters';

function App() {
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(temporaryEmployeesData);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setFilteredEmployees(temporaryEmployeesData);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = temporaryEmployeesData.filter(
      (employee: Employee) =>
        employee.name.toLowerCase().includes(lowercaseQuery) ||
        employee.job.toLowerCase().includes(lowercaseQuery) ||
        formatDate(employee.admission_date).includes(lowercaseQuery) ||
        formatPhone(employee.phone).includes(lowercaseQuery)
    );

    setFilteredEmployees(filtered);
  }, []);

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
          <EmployeeTable employees={filteredEmployees} />
        </div>
      </div>
    </div>
  );
}

export default App;
