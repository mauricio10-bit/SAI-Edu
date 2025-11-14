import { useState } from 'react';
import { WelcomeSection } from './components/WelcomeSection';
import { GreetingSection } from './components/GreetingSection';
import { ChatSection } from './components/ChatSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ConfigurationSection } from './components/ConfigurationSection';
import { TrackingPanel } from './components/TrackingPanel';

export default function App() {
  return (
    <div style={{backgroundColor: "#003B4F"}} className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <WelcomeSection />
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <GreetingSection />
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <ChatSection />
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <AchievementsSection />
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <ConfigurationSection />
          </div>

          {/* Column 6 */}
          <div className="space-y-6">
            <TrackingPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
