//判断是否为never

type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes = IsNever<never>;
