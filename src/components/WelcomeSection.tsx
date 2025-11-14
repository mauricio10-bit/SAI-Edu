import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WelcomeSection() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-blue-600">
          Bienvenido a<br />SAI Edu
        </h2>
        
        <p className="text-gray-600 text-sm">
          Aprende Ciencias Naturales<br />con tu tutor personalizado
        </p>

        <div className="w-full py-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
            alt="Estudiantes aprendiendo"
            className="w-full h-40 object-cover rounded-2xl"
          />
        </div>

        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Ingresar como estudiante
        </button>

        <button className="text-gray-600 text-sm hover:text-gray-800 transition-colors">
          Ingresar como docente
        </button>
      </div>
    </div>
  );
}
