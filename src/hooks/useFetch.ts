import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { handleApiError, ApiError } from '../services/errorHandler';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseFetchOptions {
  onSuccess?: () => void;
  onError?: (error: ApiError) => void;
}

export const useFetch = <T,>(
  initialData: T | null = null
) => {
  const [state, setState] = useState<UseFetchState<T>>({
    data: initialData,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (
      fn: () => Promise<T>,
      options?: UseFetchOptions
    ): Promise<T | null> => {
      setState({ data: initialData, loading: true, error: null });
      
      try {
        const result = await fn();
        setState({ data: result, loading: false, error: null });
        options?.onSuccess?.();
        return result;
      } catch (err: unknown) {
        const apiError = handleApiError(err);
        setState({ data: initialData, loading: false, error: apiError });
        options?.onError?.(apiError);
        return null;
      }
    },
    [initialData]
  );

  return { ...state, execute };
};
