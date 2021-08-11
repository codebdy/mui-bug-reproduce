import * as React from 'react';


import { observer } from 'mobx-react';

import { BottomDrawer } from './BottomDrawer';


export const NavDrawer = observer(() => {
  return (
    <BottomDrawer/>
  );
})
