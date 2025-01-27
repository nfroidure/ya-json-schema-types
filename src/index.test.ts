import { describe, test, expect } from '@jest/globals';
import { type JSONSchema } from './index.js';

// TODO: Find a way to tests types
describe('JSONSchema', () => {
  test('should work', () => {
    const schema: JSONSchema = {
      type: 'object',
    };

    expect(schema);
  });
});
