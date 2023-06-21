import { Chart, Tooltip } from './components';

const mockData = {
  actual: {
    current: 227700,
    plan: 227700,
  },
  expected: {
    current: 690000,
    plan: 690000,
  },
};

const App: React.FC = () => (
  <div className="relative w-max px-8 py-6">
    <Chart data={mockData} />
    <div className="absolute top-1/2 left-1/2">
      <Tooltip data={mockData} />
    </div>
  </div>
);

export default App;
