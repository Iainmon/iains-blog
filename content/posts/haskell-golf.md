+++
title = 'Haskell Golf'
date = 2024-03-17T20:04:18-10:00
draft = true
+++

hello

```haskell
take 0 _  = []
take _ [] = []
take n (x:xs) = x : take (n-1) xs
```
