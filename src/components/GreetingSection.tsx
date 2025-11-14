import { Droplets, Leaf, Hand } from 'lucide-react';

export function GreetingSection() {
  const lessons = [
    { id: 1, icon: Droplets, title: 'El ciclo del agua', color: 'bg-blue-100' },
    { id: 2, icon: Leaf, title: 'Ecosistemas', color: 'bg-green-100' },
    { id: 3, icon: Hand, title: 'Los sentidos humanos', color: 'bg-purple-100' }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="space-y-4">
        <div>
          <h2 className="text-gray-900">¡Hola, Valentina!</h2>
          <p className="text-gray-600 text-sm mt-1">Tu aventura cada semana</p>
        </div>

        <div className="space-y-3">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;
            return (
              <div 
                key={lesson.id}
                className={`${lesson.color} rounded-2xl p-4 flex items-center space-x-3`}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-800">{lesson.title}</span>
              </div>
            );
          })}
        </div>

        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors mt-4">
          Hacer con el tutor
        </button>
      </div>
    </div>
  );
}
