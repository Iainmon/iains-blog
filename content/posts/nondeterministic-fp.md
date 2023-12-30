+++
title = 'Nondeterministic Functional Programming'
date = 2023-12-28T03:01:50-10:00
draft = false
tags = []
+++


Consider the C function
```c
int f(int a, int b) {
    int s = 4;
    int x,y;
    x = a * s;
    s = s + 1;
    y = b * s;
    s = s + 1;
    return x * y;
}
```
If we were to write it in Haskell, it would be
```haskell
f :: Int -> Int -> Int
f a b
  = let s = 4 in 
```





```Haskell
type Choice a = [a]

choose :: [a] -> Choice a
choose xs = xs
```

`1`

