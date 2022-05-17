import React from 'react';

import { deniedNumbers } from 'constants/orders/index';

export const blockInvalidChar: React.KeyboardEventHandler<HTMLInputElement> = (
  e,
) => deniedNumbers.includes(e.key) && e.preventDefault();
