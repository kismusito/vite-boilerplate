import axios from 'axios';
import { ErrorMessage } from 'types';

const errorHandler = (error: unknown): ErrorMessage => {
  if (axios.isAxiosError(error)) {
    return { message: error.message, status: error.status || 400 };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      status: 400,
    };
  }

  return {
    message: 'Unexpected error',
    status: 500,
  };
};

export default errorHandler;
