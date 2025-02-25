import { useState } from 'react';

import type { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/libs/formatters';
import { EmployeeTableNames } from '@/enums/EmployeeTableNames.enum';
import ChevronUpIcon from '@/assets/chevron-up_icon.svg?react';

interface EmployeeTableProps {
  employees?: Employee[];
}

const EmployeeDesktop = ({ employees }: EmployeeTableProps) => {
  return (
    <table className="hidden md:table min-w-full bg-white rounded-t-lg">
      <thead>
        <tr className="bg-betalent-blue-primary rounded-t-lg">
          <th className="px-8 py-3 text-left text-base font-medium text-white uppercase first:rounded-tl-lg">
            {EmployeeTableNames.FOTO}
          </th>
          <th className="px-8 py-3 text-left text-base font-medium text-white uppercase">
            {EmployeeTableNames.NOME}
          </th>
          <th className="px-8 py-3 text-left text-base font-medium text-white uppercase">
            {EmployeeTableNames.CARGO}
          </th>
          <th className="px-8 py-3 text-left text-base font-medium text-white uppercase">
            {EmployeeTableNames.DATA_DE_ADMISSAO}
          </th>
          <th className="px-8 py-3 text-left text-base font-medium text-white uppercase last:rounded-tr-lg">
            {EmployeeTableNames.TELEFONE}
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {employees?.map((employee) => (
          <tr key={employee.id} className="hover:bg-gray-100 border-b border-gray-200">
            <td className="px-8 py-2">
              {employee.image ? (
                <img
                  src={employee.image}
                  alt={`${employee.name}'s profile`}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  X
                </div>
              )}
            </td>
            <td className="px-8 py-2 break-words">
              <div className="text-base text-betalent-black">
                {employee.name || 'No name available'}
              </div>
            </td>
            <td className="px-8 py-2 break-words">
              <div className="text-base text-betalent-black">
                {employee.job || 'No job specified'}
              </div>
            </td>
            <td className="px-8 py-2 break-words">
              <div className="text-base text-betalent-black">
                {employee.admission_date ? formatDate(employee.admission_date) : '--'}
              </div>
            </td>
            <td className="px-8 py-2 break-words">
              <div className="text-base text-betalent-black">{formatPhone(employee.phone)}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const EmployeeMobile = ({ employees }: EmployeeTableProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="md:hidden" data-testid="mobile-container">
      <div className="bg-betalent-blue-primary flex px-4 py-3 rounded-t-lg">
        <div className="w-16 text-base font-medium text-white uppercase">
          {EmployeeTableNames.FOTO}
        </div>
        <div className="flex-1 text-base font-medium text-white uppercase">
          {EmployeeTableNames.NOME}
        </div>
        <div className="w-4 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" role="banner" aria-hidden="true"></div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {employees?.map((employee) => (
          <div key={employee.id} className="bg-white">
            <div
              className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
              onClick={() => setExpandedId(expandedId === employee.id ? null : employee.id)}
            >
              <div className="w-16">
                {employee.image ? (
                  <img
                    src={employee.image}
                    alt={`${employee.name}'s profile`}
                    className="h-10 w-10 rounded-full"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    X
                  </div>
                )}
              </div>
              <div className="flex-1 text-base text-betalent-black">
                {employee.name || 'No name available'}
              </div>
              <ChevronUpIcon
                className={`w-6 h-6 transform transition-transform duration-200 text-betalent-blue-primary ${
                  expandedId === employee.id ? '' : 'rotate-180'
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                expandedId === employee.id ? 'max-h-40' : 'max-h-0'
              }`}
              data-testid="mobile-details"
            >
              <div className="px-4 py-3 space-y-4 bg-white">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-betalent-black">
                      {EmployeeTableNames.CARGO}
                    </span>
                    <span className="text-base text-betalent-black">{employee.job || '--'}</span>
                  </div>
                  <div
                    className="w-full border-b border-dotted border-betalent-gray-10 mt-1"
                    role="separator"
                    aria-hidden="true"
                  ></div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-betalent-black">
                      {EmployeeTableNames.DATA_DE_ADMISSAO}
                    </span>
                    <span className="text-base text-betalent-black">
                      {formatDate(employee.admission_date)}
                    </span>
                  </div>
                  <div
                    className="w-full border-b border-dotted border-betalent-gray-10 mt-1"
                    role="separator"
                    aria-hidden="true"
                  ></div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-betalent-black">
                      {EmployeeTableNames.TELEFONE}
                    </span>
                    <span className="text-base text-betalent-black">
                      {formatPhone(employee.phone)}
                    </span>
                  </div>
                  <div
                    className="w-full border-b border-dotted border-betalent-gray-10 mt-1"
                    role="separator"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EmployeeTable = ({ employees = [] }: EmployeeTableProps) => {
  return (
    <div className="w-full">
      <EmployeeDesktop employees={employees} />
      <EmployeeMobile employees={employees} />
    </div>
  );
};

export default EmployeeTable;
