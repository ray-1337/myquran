interface BaseRequest<T = never> {
  status: boolean;
  data: T extends undefined ? never : T;
}
