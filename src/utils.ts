export const logObject = (message: string, obj: Object) => {
  console.groupCollapsed(message);
  Object.keys(obj)
    // @ts-ignore
    .forEach(key => console.log(`${key}: ${obj[key]}`));
  console.groupEnd();
};
