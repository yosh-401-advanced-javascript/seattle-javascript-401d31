import { useContext } from 'react';
import { ChatContext } from './chat-context';

export const useChat = props => {

  const context = useContext(ChatContext);

  function chat(words) {
    context.sendText(words);
  }

  return [context.words, chat];
};
