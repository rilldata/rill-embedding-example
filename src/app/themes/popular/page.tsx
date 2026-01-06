'use client';

import React, { useState } from 'react';

interface ThemePreset {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  id: string;
}

const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'ocean',
    name: 'Ocean Wave',
    description: 'Cool blues and teals inspired by the ocean',
    colors: {
      primary: '#0369a1',
      secondary: '#06b6d4',
      background: '#f0f9ff',
      text: '#0c2340',
      accent: '#0ea5e9',
    },
  },
  {
    id: 'forest',
    name: 'Forest Green',
    description: 'Natural greens with earthy tones',
    colors: {
      primary: '#15803d',
      secondary: '#22c55e',
      background: '#f0fdf4',
      text: '#1b4332',
      accent: '#4ade80',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset Gradient',
    description: 'Warm oranges and reds for a vibrant feel',
    colors: {
      primary: '#ea580c',
      secondary: '#f97316',
      background: '#fff7ed',
      text: '#7c2d12',
      accent: '#fb923c',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight Purple',
    description: 'Deep purples with elegant contrast',
    colors: {
      primary: '#7e22ce',
      secondary: '#a855f7',
      background: '#faf5ff',
      text: '#2e1065',
      accent: '#d8b4fe',
    },
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    description: 'Elegant pink and gold combination',
    colors: {
      primary: '#be185d',
      secondary: '#ec4899',
      background: '#fdf2f8',
      text: '#500724',
      accent: '#fbcfe8',
    },
  },
  {
    id: 'slate',
    name: 'Slate Modern',
    description: 'Professional grays for a clean look',
    colors: {
      primary: '#475569',
      secondary: '#64748b',
      background: '#f8fafc',
      text: '#0f172a',
      accent: '#94a3b8',
    },
  },
];

export default function PopularThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState<string>(THEME_PRESETS[0].id);

  const getSelectedTheme = () => {
    return THEME_PRESETS.find((t) => t.id === selectedTheme) || THEME_PRESETS[0];
  };

  const theme = getSelectedTheme();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Popular Themes</h1>
        <p className="text-lg text-gray-600">
          Explore a collection of beautiful color themes to customize your dashboard experience.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Theme Grid */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Available Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {THEME_PRESETS.map((themePreset) => (
              <button
                key={themePreset.id}
                onClick={() => setSelectedTheme(themePreset.id)}
                className={`theme-card transition-all duration-300 rounded-lg p-4 border-2 cursor-pointer hover:shadow-lg ${
                  selectedTheme === themePreset.id
                    ? 'border-gray-800 shadow-lg'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
                style={{
                  backgroundColor: themePreset.colors.background,
                }}
              >
                {/* Color Swatches */}
                <div className="flex gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm"
                    style={{ backgroundColor: themePreset.colors.primary }}
                    title="Primary"
                  />
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm"
                    style={{ backgroundColor: themePreset.colors.secondary }}
                    title="Secondary"
                  />
                  <div
                    className="w-8 h-8 rounded-lg shadow-sm"
                    style={{ backgroundColor: themePreset.colors.accent }}
                    title="Accent"
                  />
                </div>

                {/* Theme Info */}
                <h3
                  className="text-lg font-semibold text-left mb-1"
                  style={{ color: themePreset.colors.text }}
                >
                  {themePreset.name}
                </h3>
                <p
                  className="text-sm text-left opacity-75"
                  style={{ color: themePreset.colors.text }}
                >
                  {themePreset.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Panel */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Live Preview</h2>
          <div
            className="theme-preview rounded-lg p-8 shadow-lg space-y-6"
            style={{ backgroundColor: theme.colors.background }}
          >
            {/* Header */}
            <div>
              <div
                className="h-12 rounded-lg mb-2 flex items-center px-4"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                }}
              >
                <span className="font-semibold">Navigation</span>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="h-4 rounded w-3/4"
                    style={{ backgroundColor: theme.colors.text, opacity: 0.3 }}
                  />
                  <div
                    className="h-4 rounded w-full"
                    style={{ backgroundColor: theme.colors.text, opacity: 0.2 }}
                  />
                  <div
                    className="h-4 rounded w-5/6"
                    style={{ backgroundColor: theme.colors.text, opacity: 0.15 }}
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-4">
              <button
                className="px-4 py-2 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme.colors.primary }}
              >
                Primary
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              >
                Secondary
              </button>
            </div>
          </div>

          {/* Color Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-gray-800">Color Palette</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: theme.colors.primary }}
                />
                <div>
                  <div className="font-medium text-gray-700">Primary</div>
                  <div className="text-gray-500 font-mono">{theme.colors.primary}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: theme.colors.secondary }}
                />
                <div>
                  <div className="font-medium text-gray-700">Secondary</div>
                  <div className="text-gray-500 font-mono">{theme.colors.secondary}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: theme.colors.accent }}
                />
                <div>
                  <div className="font-medium text-gray-700">Accent</div>
                  <div className="text-gray-500 font-mono">{theme.colors.accent}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded border border-gray-300"
                  style={{ backgroundColor: theme.colors.background }}
                />
                <div>
                  <div className="font-medium text-gray-700">Background</div>
                  <div className="text-gray-500 font-mono">{theme.colors.background}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: theme.colors.text }}
                />
                <div>
                  <div className="font-medium text-gray-700">Text</div>
                  <div className="text-gray-500 font-mono">{theme.colors.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">How to Use Themes</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Select a theme from the available options</li>
          <li>Preview the theme colors in the live preview panel</li>
          <li>Copy the color values for your custom dashboard styling</li>
          <li>Apply the theme by updating your CSS variables or component styles</li>
        </ol>
      </div>
    </div>
  );
}
