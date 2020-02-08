export declare type nil = null | undefined;
export declare type Nilable<T> = T | nil;
export declare type Nullable<T> = T | null;
export declare type Undefinable<T> = T | undefined;
export declare type MaybeNil<T> = T | nil;
export declare type MaybeNull<T> = T | null;
export declare type MaybeUndefined<T> = T | undefined;
export declare type MaybePromise<T> = T | Promise<T>;
export declare type MaybeArray<T> = T | T[];
export declare type MaybeAsReturnType<T> = T | ((...args: any) => T);
export declare type Voidable<T> = T | void;
export declare type NonNil<T> = T extends nil ? never : T;
export declare type NonNull<T> = T extends null ? never : T;
export declare type NonUndefined<T> = T extends undefined ? never : T;
export declare type NilableProps<T> = {
    [P in keyof T]?: T[P] | nil;
};
export declare type NullableProps<T> = {
    [P in keyof T]: T[P] | null;
};
export declare type UndefinableProps<T> = {
    [P in keyof T]?: T[P] | undefined;
};
export declare type NonNilProps<T> = {
    [P in keyof T]-?: NonNil<T[P]>;
};
export declare type NonNullProps<T> = {
    [P in keyof T]: NonNull<T[P]>;
};
export declare type NonUndefinedProps<T> = {
    [P in keyof T]-?: NonUndefined<T[P]>;
};
export declare type RequiredProps<T> = {
    [P in keyof T]-?: T[P];
};
export declare type WritableProps<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type AnyKey = keyof any;
export declare type AnyFunction = (...args: any) => any;
export declare type AnyConstructor = new (...args: any) => any;
export interface AnyClass {
    prototype: any;
    new (...args: any): any;
}
export interface AnyPrototype {
    constructor: any;
}
export interface AnyObject {
    [key: string]: any;
    [key: number]: any;
}
export interface AnyObjectWithStringKeys {
    [key: string]: any;
}
export interface AnyObjectWithNumberKeys {
    [key: number]: any;
}
export declare type ExcludeKeys<T, K extends AnyKey> = Omit<T, K>;
export declare type ValueOf<T> = T[keyof T];
export declare type Property<T, K> = K extends keyof T ? T[K] : never;
export declare type KeyOfType<T, U> = {
    [P in keyof T]-?: T[P] extends U ? P : never;
}[keyof T];
export declare type KeyOfSubType<T, U> = {
    [P in keyof T]-?: U extends T[P] ? P : never;
}[keyof T];
export declare type WithOptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type WithNilableKeys<T, K extends keyof T> = Omit<T, K> & NilableProps<Pick<T, K>>;
export declare type WithNullableKeys<T, K extends keyof T> = Omit<T, K> & NullableProps<Pick<T, K>>;
export declare type WithUndefinableKeys<T, K extends keyof T> = Omit<T, K> & UndefinableProps<Pick<T, K>>;
export declare type WithNonNilKeys<T, K extends keyof T> = Omit<T, K> & NonNilProps<Pick<T, K>>;
export declare type WithNonNullKeys<T, K extends keyof T> = Omit<T, K> & NonNullProps<Pick<T, K>>;
export declare type WithNonUndefinedKeys<T, K extends keyof T> = Omit<T, K> & NonUndefinedProps<Pick<T, K>>;
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I> ? Array<DeepPartial<I>> : DeepPartial<T[P]>;
};
export declare type DiffObjects<T, U> = Omit<T, keyof U>;
export declare type UnionObjects<T extends AnyObject, U extends AnyObject> = DiffObjects<T, U> & {
    [P in keyof T & keyof U]: T[P] | U[P];
} & DiffObjects<U, T>;
export declare type OverwriteProps<T, U> = U & DiffObjects<T, U>;
export declare type Arguments<T extends AnyFunction> = Parameters<T>;
export declare type FirstArgument<T extends AnyFunction> = T extends (arg: infer A, ...args: any) => any ? A : never;
export declare type Return<T extends AnyFunction> = ReturnType<T>;
export declare type MaybeReturnType<T> = T extends (...args: any[]) => infer R ? R : T;
export declare type InstanceOf<T extends AnyConstructor> = InstanceType<T>;
export declare type PromisedType<T extends Promise<any>> = T extends Promise<infer R> ? R : never;
export declare type MaybePromisedType<T> = T extends Promise<infer R> ? R : T;
export declare type MaybeAsyncReturnType<T extends AnyFunction> = MaybePromisedType<ReturnType<T>>;
export declare type ItemType<T extends any[]> = T extends Array<infer I> ? I : never;
export declare type Thunk<T> = () => T;
export declare type MaybeThunk<T> = T | Thunk<T>;
export declare type Unthunk<T extends Thunk<any>> = T extends Thunk<infer R> ? R : never;
export declare type MaybeUnthunk<T> = T extends Thunk<infer R> ? R : T;
export declare type Unpack<T> = T extends Array<infer I> ? I : T extends (...args: any) => infer R ? R : T extends Promise<infer P> ? P : T;
export declare type InheritClass<C1 extends AnyClass, C2 extends AnyClass> = {
    prototype: OverwriteProps<C2['prototype'], C1['prototype']>;
    new (...args: ConstructorParameters<AnyClass>): OverwriteProps<C2['prototype'], C1['prototype']>;
} & OverwriteProps<C2, C1>;
export declare type IsNonNil<T, True, False = never> = null extends T ? False : undefined extends T ? False : True;
export declare type IsNonNull<T, True, False = never> = null extends T ? False : True;
export declare type IsNonUndefined<T, True, False = never> = undefined extends T ? False : True;
export declare type IsNever<T, True, False = never> = [T] extends [never] ? True : False;
export declare type IsAny<T, True, False = never> = (True | False) extends (T extends never ? True : False) ? True : False;
export declare type IsUnknown<T, True, False = never> = unknown extends T ? IsAny<T, False, True> : False;
export declare type StrictlyIncludes<T, U, True, False = never> = Exclude<U, T> extends never ? (IsAny<T, 1, 0> extends 1 ? True : (IsAny<U, 1, 0> extends 1 ? False : (IsUnknown<T, 1, 0> extends 1 ? IsUnknown<U, True, False> : True))) : False;
export declare type AreStrictlyEqual<T, U, True, False = never> = StrictlyIncludes<T, U, 1, 0> extends 1 ? StrictlyIncludes<U, T, True, False> : False;
export declare type HaveSameKeys<T, U, True, False = never> = (Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>) extends never ? True : False;
export declare type Exact<T, X extends T> = T & {
    [K in keyof X]: K extends keyof T ? X[K] : never;
};
//# sourceMappingURL=index.d.ts.map