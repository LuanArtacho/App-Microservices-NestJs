import { Content } from './content';

describe('Notification Content', () => {
  it('It should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('It should not be able to create a notifiction content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('It should not be able to create a notifiction content with more than 241 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});