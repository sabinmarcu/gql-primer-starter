import React from 'react';

const context = require.context('./', false, /\.tsx$/);
const data: { link: string, title: string, default: React.Component }[] = context.keys().map(
  // @ts-ignore
  key => context(key),
);

export default data;
