import type { Employee } from '../types/employee';
import { formatDate, formatPhone } from '../lib/formatters';

interface EmployeeTableProps {
  employees?: Employee[];
}

const temporaryEmployeesData: Employee[] = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image: '',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '2020-03-12T00:00:00.000Z',
    phone: '5550321654789',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 3,
    name: 'Maria',
    job: 'Front-end',
    admission_date: '2020-03-15T00:00:00.000Z',
    phone: '5557894561230',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 4,
    name: 'Cleber',
    job: 'Back-end',
    admission_date: '2020-06-01T00:00:00.000Z',
    phone: '5557410258963',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 5,
    name: 'Giovana',
    job: 'Designer',
    admission_date: '2020-06-20T00:00:00.000Z',
    phone: '5553698520147',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 6,
    name: 'Mario',
    job: 'Front-end',
    admission_date: '2020-10-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
  {
    id: 7,
    name: 'Gabriel',
    job: 'Back-end',
    admission_date: '2021-01-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 8,
    name: 'Carla',
    job: 'Back-end',
    admission_date: '2021-03-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
  {
    id: 10,
    name: 'Fernanda',
    job: 'Front-end',
    admission_date: '2021-05-01T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png',
  },
];

const EmployeeTable = ({ employees = temporaryEmployeesData }: EmployeeTableProps) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Job
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admission Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
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
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.name || 'No name available'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.job || 'No job specified'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.admission_date
                  ? formatDate(employee.admission_date)
                  : 'No date available'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{formatPhone(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
