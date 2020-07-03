import {
  LoremIpsum
} from 'lorem-ipsum';
import {
  uuidv4
} from 'uuid';

const lorem = new LoremIpsum();

export default function createContacts() {
  return {
    id: uuidv4(),
    text: lorem.generateSentences(5),
  };
}