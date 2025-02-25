import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">Employee Directory</h1>
        <EmployeeTable />
      </div>
    </div>
  );
}

export default App;
