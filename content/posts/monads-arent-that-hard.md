+++
title = "Bro Monads Aren't That Hard"
date = 2022-08-01T00:01:55-10:00
draft = false
+++


You should know what sets and types are, what a function is, and the consequences of composing functions. 

In a programming language, you have types that are given to you and types that you can construct with your own definitions. Some examples of these are `Int`, `Bool`, and function types `Int -> Int -> Int`. You may also may have types that generalize over types, an example is the type `Optional<T>` where `T` refers to any type. Notice that there is a difference between the types `Optional<Int>`, `Optional<Bool>`, and `Optional<T>`. 

We can construct the set $T$ of all types in some programming languages ($T$ may be infinite but it doesn't matter). Since {{< katex "\texttt{Optional<T>} \in T " true />}}, we can construct the subset 
```katex
O=\{ \texttt{Optional<$t$>}\ |\ t\in T \}\subseteq T
```
to be the set of all optional types. It is again worth noting that {{< katex "\texttt{Optional<T>}\not\in O" true />}} since `Optional<T> ` must have `T` refer to a specific type. Now we can define a function
```katex
o:T\to O\\
o(t)=\texttt{Optional<$t$>}
```
which maps each type $t\in T$ to its optional type $o(t)=\texttt{Optional<$t$>}\in O$. It's also clear that we can refer to $o$ in place of `Optional`, and $o(t)$ in place of $\texttt{Optional<$t$>}$. This may take a sec to sink in. This structure can be generalized to any sort of generic type, consider the function 
```katex
m : T\to U\qquad \text{and} \qquad U\subseteq T
```
that corresponds to a generic type, in the same way $o$ corresponds to `Optional`. We can now impose additional structure on $m$ to refine the set of types that can correspond to $m$ which are of interest to us. These requirements are of two parts, existence of other functions that interact with $m$, and algebreic laws that should hold for the interplay of these functions. The restrictions are as follows: For all types $t\in T$, there must the function
```katex
i : t \to m(t)
```
that assigns every value $a\in t\in T$ of type $t$ to the value $i(a)\in m(t)\in U$ (remember $t$ and $m(t)$ are types/sets). You can think of $i$ mapping a value of $t$ to a generic value of type $m(t)$. There must also exist the function 
```katex
s : m(m(t)) \to m(t)
```
which is sort of odd to think about, but basically it maps values that are of a generic type $m$ of generic type $m$ to values of generic type $m$. Alternately, $s$ unwraps or *squishes* a double application $m(m(t))$ to a type $t$ to just a single application $m(t)$. An example for `Optional` would be
```katex
s : \texttt{Optional<Optional<$t$>>}\to\texttt{Optional<$t$>}\\
s : o(o(t))\to o(t)
```
which has the obvious implementation. Lastly, there needs to be the map 
```katex
f : (t\to u) \to (m(t) \to m(u))
```
which is a function that takes some function $g : t \to u$ and returns a function $f(g) : m(t) \to m(u)$. For `Optional`, this would be
```katex
f : (t\to u) \to(\texttt{Optional<$t$>}\to\texttt{Optional<$u$>})\\
f : (t\to u) \to(o(t)\to o(u))
```
which also has the obvious implementation. These functions give us enough to define the convenient binary operation 
```katex
\succ : m(t) \times (t\to m(u))\to m(u)\\
a\succ h=(s\circ f(h)) (a)
```
where the function $h : t \to m(u)$ maps some value $a\in t$ to the value $h(a)\in m(t)$. 

Finally, the algebraic rules for these functions are the following equalities, for all $t,u\in T$ and all $a \in t$ or $a : t$, $b \in m(t)$ or $b : m(t)$, and the functions $g : t\to u$, and $h,k : t \to m(u)$,
```katex
\begin{gather*}
i(a)\succ h = h(a) &\quad s(f(h)(i(a)))=h(a)\\
b \succ i = b &\quad s(f(i)(b))=b\\
b \succ (x \mapsto h (x)\succ k)=(b\succ h)\succ k&\quad s(f(x\mapsto s(f(k)(h(x))))(b))=s(f(k)(s(f(h)(b))))
\end{gather*}
```
where the left equalities is use the more concise $\succ$ operation. This concludes the definitions required for the definition of a monad. If there is a generic type `M<T>` that coresponds to $m$ in the way we have outlined, there exists the functions above that operate on $m$ and fit the type structure, and those functions satisfy the three laws, then we say `M` behaves like a monad. That's all it is really, a generic type, with certain functions, satisfying some weird laws. 

Above is insufficient to *understand* the benefits and patterns that monads provide. Usually the laws are disregarded as the type structure is usually enough to constrain the possible implementations. It isn't obvious, but monadic behavior captures a very important sense in computing: composition of computational effects, which when understood and used correctly, makes you feel like a poet.



### Additional Notes

Most of the time, it makes the most sense to define just the two functions
```katex
\begin{align*}
i &: t \to m (t)\\
\succ & : m(t)\times (t \to m(u)) \to m(u)
\end{align*}
```
as the existence of the other $s$ and $f$ functions are implied by the two above. 
