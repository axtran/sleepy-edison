---
title: Equation de Black-Scholes
date: 2020-09-07T01:31:00Z
tags: ["math"]
category: science
---

Le modèle Black-Scholes repose sur un certain nombre de conditions :

- le prix de l'actif sous-jacent p<sub>t</sub> suit un mouvement brownien géométrique avec une volatilité 
$
{\displaystyle \sigma }
$
 constante et une dérive 
$
{\displaystyle \mu }
$
 constante :
$
{\displaystyle Pr[{\frac {\Delta p_{t}-E(\Delta p_{t})}{\sigma (\Delta p_{t})}}<{\frac {VaR_{q}-E(\Delta p_{t})}{\sigma (\Delta p_{t})}}]=1-q}
$
 est un processus de Wiener,  
$
{\displaystyle \phi ^{-}1(1-q)}
$
 est un processus de Wiener,  
$
{\displaystyle VaR_{q}={E(\Delta p_{t})}-\phi ^{-}1(q)\sigma (\Delta p_{t})}
$
 est un processus de Wiener,  
$
{\displaystyle VaR_{q}=-\phi ^{-}1(q)\sigma (\Delta p_{t})}
$
 est un processus de Wiener,  
$
{\displaystyle VaR_{q}={E(\Delta p_{\textbf {P}})}-\phi ^{-}1(q)\sigma (\Delta p_{\textbf {P}})}
$
 est un processus de Wiener,  
$
{\displaystyle ES_{p}=E[X|X>VaR_{p}]}
$
 est un processus de Wiener,  
$
{\displaystyle ES_{p}={\frac {1}{p}}\displaystyle \int _{0}^{p}VaR(_{\theta })(X)\,\mathrm {d} \theta }
$
 est un processus de Wiener ;  
- il n'y a pas d'occasions d'arbitrage ;
- le temps est une fonction continue ;
- il est possible d'effectuer des ventes à découvert ;
- il n'y a pas de coûts de transactions ;
- il existe un taux d'intérêt sans risque, connu à l'avance et constant ;  
tous les sous-jacents sont parfaitement divisibles (on peut par exemple acheter 1/100e d'action) ;  
- dans le cas d'une action, celle-ci ne paie pas de dividendes entre le moment de l'évaluation de l'option et l'échéance de celle-ci.  

Chacune de ces hypothèses est nécessaire à la démonstration de la formule.

Lorsque toutes ces hypothèses sont remplies, on parle alors de modèle de Black-Scholes, ou on dit qu'on est dans le cas Black-Scholes. Le modèle, par ses hypothèses, ne correspond pas à la réalité des marchés financiers. Mais la généralisation de l'utilisation de ce modèle renvoie à la notion de « mimétismes rationnels » (ou, précisément, dans ce cas « irrationnels ») ce qui provoque le phénomène de prises de décisions « auto-réalisatrices ».   Par exemple, quand le berger d'un troupeau se jette à l'eau et que ses moutons le suivent, nous pouvons anticiper et conclure que le troupeau et le berger vont être mouillés. Le résultat final est pertinent mais l'hypothèse de départ l'est moins.

Formule de Black-Scholes
La formule de Black-Scholes permet de calculer la valeur théorique d'une option européenne à partir des cinq données suivantes :  

- $
{\displaystyle {\mathcal {}}S_{0}}
$
 la valeur actuelle de l'action sous-jacente,  
- $
{\displaystyle {\mathcal {}}T}
$
 le temps qu'il reste à l'option avant son échéance (exprimé en années),  
- $
{\displaystyle {\mathcal {}}K}
$
 le prix d'exercice fixé par l'option,  
- $
{\displaystyle {\mathcal {}}r}
$
 le taux d'intérêt sans risque,  
- $
{\displaystyle {\mathcal {}}\sigma }
$
 la volatilité du prix de l'action.  
 
Si les quatre premières données sont évidentes, la volatilité 
$
{\displaystyle {\mathcal {}}\sigma }
$
 de l'actif est difficile à évaluer. Deux analystes pourront avoir une opinion différente sur la valeur de 
$
{\displaystyle {\mathcal {}}\sigma }
$
 à choisir.  

Le prix théorique d'une option d'achat, qui donne le droit mais pas l'obligation d'acheter l'actif S à la valeur K à la date T, est caractérisé par son payoff : 
$
{\displaystyle ({\mathcal {S}}_{T}-K)^{+}=\max(S_{T}-K;0)}
$
  
 Il est donné par l'espérance sous probabilité risque neutre du payoff terminal actualisé 
$
{\displaystyle C=\mathbb {E} ({\text{Payoff}}\times e^{-rT})}
$
, soit la formule de Black-Scholes :
$
{\displaystyle C(S_{0},K,r,T,\sigma )=S_{0}{\mathcal {N}}(d_{1})-Ke^{-rT}{\mathcal {N}}(d_{2})}
$

 De même, le prix théorique d'une option de vente, de payoff 
$
{\displaystyle (K-{\mathcal {S}}_{T})^{+}=\max(K-S_{T};0)}
$
 est donné par :  

$
{\displaystyle P(S_{0},K,r,T,\sigma )=-S_{0}{\mathcal {N}}(-d_{1})+Ke^{-rT}{\mathcal {N}}(-d_{2})}
$
 avec
- $
{\displaystyle {\mathcal {N}}}
$
 la fonction de répartition de la loi normale centrée réduite 
$
{\displaystyle {\mathcal {N}}\left(0,1\right)} 
$
 c'est-à-dire
$
{\displaystyle {\mathcal {N}}(x)=\int _{-\infty }^{x}{\frac {1}{\sqrt {2\pi }}}e^{-{\frac {1}{2}}u^{2}}du}
$
 
- $
{\displaystyle d_{1}={\frac {1}{\sigma {\sqrt {T}}}}\left[\ln \left({\frac {S_{0}}{K}}\right)+\left(r+{\frac {1}{2}}\sigma ^{2}\right)T\right]}
$
- $
{\displaystyle d_{2}=d_{1}-\sigma {\sqrt {T}}}d_{2}=d_{1}-\sigma {\sqrt  {T}}
$
  
 On peut également appliquer la formule à l'inverse. Étant donné le prix de l'option qui est coté dans les marchés, quelle valeur de 
$
{\displaystyle {\mathcal {}}\sigma }
$
 doit être choisie pour que la formule Black-Scholes donne exactement ce prix ? On obtient ainsi la volatilité implicite qui a un grand intérêt pratique et théorique.

[afficher]
