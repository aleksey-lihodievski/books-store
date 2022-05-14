import React from 'react';

export const blockInvalidChar: React.KeyboardEventHandler<HTMLInputElement> = (
  e,
) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
