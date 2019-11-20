// NO STYLES IN THIS FILE! Import from MegaMenuLists/ListStyles
import React from 'react';


import {
  MegaMenuUl,
  MegaMenuLi,
  MegaMenuLink,

} from './ListStyles';

import ListHeader from './ListHeader';

const AccountList = () => {
  return (
    <>
      <MegaMenuUl>
        <ListHeader title="Account" />

        <MegaMenuLi>
          <MegaMenuLink to="/app">App</MegaMenuLink>
        </MegaMenuLi>
        <MegaMenuLi>
          <MegaMenuLink to="/app">Dashboard</MegaMenuLink>
        </MegaMenuLi>
      </MegaMenuUl>
    </>
  );
};

export default AccountList;
