import { describe, test, expect } from '@jest/globals';
import { type JSONSchema, type ExpressiveJSONSchema } from './index.js';

// TODO: Find a way to tests types
describe('JSONSchema', () => {
  test('should work', () => {
    const schema: JSONSchema = {
      type: 'object',
    };

    expect(schema);
  });
});

describe('ExpressiveJSONSchema', () => {
  test('should work', () => {
    const schema: ExpressiveJSONSchema = {
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    };

    expect(schema);
  });
});
