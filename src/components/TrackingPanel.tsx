import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

export function TrackingPanel() {
  const data = [
    { name: '5/6', value: 20 },
    { name: '6/6', value: 35 },
    { name: '7/6', value: 28 },
    { name: '8/6', value: 45 },
    { name: '9/6', value: 60 },
    { name: '10/6', value: 55 }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="space-y-4">
        <h2 className="text-gray-900">Panel de seguimiento</h2>

        <div>
          <p className="text-gray-900">Valentina</p>
          <p className="text-gray-500 text-sm mt-1">Progreso en el último mes</p>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                stroke="#999"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#999"
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4 flex items-start space-x-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-gray-900">Riesgo</p>
            <p className="text-gray-600 text-sm mt-1">
              Nivel: necesita de mejora
            </p>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Editar
        </button>
      </div>
    </div>
  );
}
