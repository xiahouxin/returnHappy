type Concat<T extends any[],U extends any[]> = [...T,...U]
type Result = Concat<[1], [2]> 

//extends的用法