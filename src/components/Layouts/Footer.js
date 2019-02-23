import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tabs'

export default props =>
<Paper>
<Tabs
  value={1}
  indicatorColor="primary"
  textColor="primary"
  centered
>
  <Tab label="Item One" /> one
  <Tab label="Item Two" /> two
  <Tab label="Item Three" /> three
</Tabs>
</Paper>