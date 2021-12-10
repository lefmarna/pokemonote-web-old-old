import axios, { AxiosError } from "axios";

/**
 * エラーメッセージ一覧
 */
export const EXCEPTION_ERROR_MESSAGE =
  "システムエラーにより処理が失敗しました。時間を置いて再度お試しください。";

/**
 * Axiosのエラーを配列にして返す
 */
export const formatAxiosError = (errorsResponse: AxiosError): string[] => {
  const errorList: string[] = [];
  if (!errorsResponse) return errorList;
  Object.values(errorsResponse).forEach((errors) => {
    errorList.push(errors[0]);
  });
  return errorList;
};

/**
 * try/catchのcatch内で使用。エラーメッセージを配列にして返す。
 */
export const exceptionErrorToArray = (error: unknown): string[] => {
  if (!axios.isAxiosError(error)) return [EXCEPTION_ERROR_MESSAGE];
  return formatAxiosError(error.response.data.errors);
};
