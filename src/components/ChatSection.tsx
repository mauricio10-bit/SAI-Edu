import { MessageCircle } from 'lucide-react';

export function ChatSection() {
  const messages = [
    { text: '¡Hola Valentina! Hoy vamos a explorar el ciclo del agua...', type: 'tutor' },
    { text: '¿Empezamos?', type: 'button' },
    { text: 'Necesitas un ciclo', type: 'button' },
    { text: 'Hazme preguntas', type: 'button' },
    { text: '¡Muy bien! Así empieza el ciclo del agua', type: 'tutor' }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-6 h-6 text-blue-500" />
          <h2 className="text-gray-900">Chat con el tutor</h2>
        </div>

        <div className="space-y-3">
          {messages.map((message, index) => {
            if (message.type === 'tutor') {
              return (
                <div key={index} className="bg-gray-100 rounded-2xl p-4 text-gray-800 text-sm">
                  {message.text}
                </div>
              );
            } else {
              return (
                <button 
                  key={index}
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-sm"
                >
                  {message.text}
                </button>
              );
            }
          })}
        </div>

        <div className="pt-2">
          <p className="text-gray-500 text-sm text-center">Escribe aquí ayuda...</p>
        </div>
      </div>
    </div>
  );
}
