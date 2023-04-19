type If<U extends Boolean, K extends any , T extends any> = U extends true ? K : T
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'


//涉及的知识点:null在严格模式和非严格模式的区别