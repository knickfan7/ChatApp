interface MessageType {
  attachments: AttachmentType[];
  created: string;
  custom_json: string;
  id: number;
  sender: SenderType;
  sender_username: string;
  text: string;
}

interface AttachmentType {
  file: string;
}

interface SenderType {
  avatar: string;
  custom_json: Object;
  first_name: string;
  last_name: string;
  is_online: boolean;
  username: string;
}

export interface MessageProps {
  message: MessageType;
  lastMessage?: MessageType;
}
