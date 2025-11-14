import { Droplets, Trees, Trophy } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      icon: Droplets,
      title: 'Explorador del agua',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Trees,
      title: 'Guarda bosques',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="space-y-4">
        <h2 className="text-gray-900">Tus logros</h2>

        <div className="space-y-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="flex items-center space-x-3"
              >
                <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-800">{achievement.title}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 mt-4">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Desafíos activos</span>
          </div>
          <p className="text-gray-600 text-sm">
            Completa 5 quizzes seguidos
          </p>
        </div>

        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors mt-4">
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}
