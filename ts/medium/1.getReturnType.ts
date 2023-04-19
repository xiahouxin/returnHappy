// type MyReturnType<T> = T extends (...args: any) => infer R ? R : never

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
type a = MyReturnType<typeof fn>;
type b = MyReturnType<typeof fn1>;
