export enum MessageType {
  success = 'success',
    error = 'error',
    info = 'info',
    warning = 'warning'
}

export interface IMessage {
  type: MessageType;
  message: string;
  title?: string;
  buttons?: Array<{
    label: string,
    action?: Function,
    css?: string
  }>;
}

export enum CloseType {
  TIMES, NORMAL
}
