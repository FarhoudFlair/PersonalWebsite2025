"use client";

import React from 'react';
import { Switch } from '@headlessui/react';

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  srText: string;
}

export const Toggle: React.FC<ToggleProps> = ({ enabled, onChange, srText }) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${enabled ? 'bg-primary' : 'bg-gray-700'}
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900`}
    >
      <span className="sr-only">{srText}</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
};
