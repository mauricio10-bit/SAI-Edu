import { Switch } from './ui/switch';
import { useState } from 'react';

export function ConfigurationSection() {
  const [readingVoice, setReadingVoice] = useState(false);
  const [contrastMode, setContrastMode] = useState(false);
  const [textSize, setTextSize] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="space-y-6">
        <h2 className="text-gray-900">Configuración</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Lectura por voz</span>
            <Switch 
              checked={readingVoice} 
              onCheckedChange={setReadingVoice}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Modo alto contraste</span>
            <Switch 
              checked={contrastMode} 
              onCheckedChange={setContrastMode}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Tamaño de texto</span>
            <Switch 
              checked={textSize} 
              onCheckedChange={setTextSize}
            />
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors mt-6">
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
