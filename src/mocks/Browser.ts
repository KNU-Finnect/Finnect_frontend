import { Handlers } from '@finnect/mocks/handler/Handler';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...Handlers);
