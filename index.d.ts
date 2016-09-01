import Promise = require('any-promise');

declare namespace bcryptThen {
  export function hash (password: string, iterations?: number): Promise<string>;
  export function compare (password: string, hash: string): Promise<boolean>;
}

export = bcryptThen;
