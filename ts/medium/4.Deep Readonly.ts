// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
// 您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
// 例如
type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};
type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};
type Todo1 = DeepReadonly<X1>; // should be same as `Expected`
