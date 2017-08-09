const findBy = <T, K extends keyof T>(key: K) =>
  (entities: T[], value: T[K]) =>
    entities.filter(e => e[key] === value);

