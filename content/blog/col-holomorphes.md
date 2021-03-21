---
title: fonctions holomorphes 
date: "2021-03-13"
tags: ["math ", "Colmez"]
category: science
---

src: https://webusers.imj-prg.fr/~pierre.colmez/congruents.pdf

Définition. — *Si $\Omega$ est un ouvert connexe de $C$, on dit que $f: \Omega \rightarrow C $  est holomorphe sur $\Omega$, si pour tout $ z_0 \in \Omega $ , il existe r > 0 tel que*  
*$ f(z) = \sum_{n=0}^{+\infty} a_n(z_0)(z-z_0)^n $ si $ z\in \Omega $ et $|z-z_0| < r $* 

Les fonctions holomorphes vérifient les propriétés suivantes :  
- (H0) Si f atteint son maximum en un point de $\Omega$, alors f est constante.  *(Principe du maximum)*.  
- (H1) Si $ f_n $ est une suite de fonctions holomorphes sur $\Omega* convergeant uniformément sur tout compact, alors la limite est holomorphe sur $\Omega$.  
- (H2) Si $ f(x,s) : X × \Omega \rightarrow C $ est sommable en x, holomorphe en s, et s’il existe g avec 
$ \int_X |g(x)|dx < +\infty $ et $ |f(x, s)| \leq |g(x)| $ quels que soient x et s, alors  $ F(s)= \int_X f(s,x)dx $ est holomorphe sur $\Omega$.  
- (H3) Si f et g sont deux fonctions holomorphes sur $\Omega$ telles qu’il existe un compact $ K \subset \Omega $
sur lequel f − g a une infinité de zéros, alors $f = g$ sur $\Omega$ tout entier.  

Si $\Omega \subset \Omega ' $ sont connexes et si f est holomorphe sur $\Omega$, il est en général impossible de prolonger f en une fonction holomorphe sur $\Omega'$ . Quand c’est possible, un tel prolongement est unique
d’après la propriété (H3), et est appelé *prolongement analytique* de f à $\Omega '$.  

Exemple 1. — ***La fonction gamma d’Euler.***  
 Si $ \Re (s) > 0 $, l’intégrale $ \Gamma (s) = \int_0^{+\infty} e^{-t}t^s\frac{dt}{t} $ converge. La fonction $\Gamma$ est holomorphe et ne s’annule pas sur le demi-plan $\Re(s) > 0$, et y vérifie l’équation fonctionnelle $ \Gamma(s + 1) = s\Gamma(s)$. On la prolonge en une fonction holomorphe sur $C −$ {0,−1,−2,...}en posant $ \Gamma(s) = \frac{\Gamma(s+n)}{s(s+1)···(s+n−1)} $, où $ n \in N$ est choisi de telle sorte que $\Re(s) + n > 0$. La fonction $\frac{1}{\Gamma(s)}$ est alors holomorphe sur $C$ avec des zéros simples aux entiers négatifs.   

Exemple 2. — ***La fonction thêta.***  
 On note $\mathcal{H} = \{z ∈ C, \Im(z) > 0\} $ le demi-plan de Poincaré.  
 On pose $ q = e^{2iπz} $, et on définit $ \Theta : \mathcal{H}\rightarrow C $ par $ \Theta (z) = \sum_{n \in Z}q^{n^2} $  
 On a  $\Theta(z + 1) = \Theta(z) $ et  
 $ \sqrt{z}{2i}\theta (\frac{z}{2}) = \Theta(\frac{-1}{2z}) $ d’après la formule de Poisson.     

Exemple 3. — ***La fonction zêta de Riemann.***  
 Si $\Re(s) > 1$, la série  $ \zeta (s) = \sum _1^\infty n^{-s} = \prod _p \frac{1}{1-p^{-s}} $  converge sur le demi-plan $\Re(s) > 1$, et y définit une fonction holomorphe d’après la propriété (H1). On montre que cette fonction admet un prolongement analytique à $C − \{1\}$, ce quipermet d’écrire les formules suivantes    
$1+1+1+1+ ··· = \zeta(0) = −1/2$,   
$1+2+3+4+5+ ··· = \zeta(−1) = −1/12$,      
$1 + 4 + 9 + 16 + 25 + ··· = \zeta(−2) = 0$,   
$1 · 2 · 3 · 4 · 5··· = exp(−\zeta '(0)) =  \sqrt {2\pi} $
