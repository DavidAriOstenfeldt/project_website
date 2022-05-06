---
title: Network analysis
prev: data-description
next: text-analysis
---

This section will cover the collaboration between artists aspect of the project. For this we will make use of different network theories and constructions in order to analyse the properties between artists. Specifically, we will go through how the full network of all artists were created and investigate it using various networks science analysis strategies. In addition to the network of all artists, we've also created smaller networks for specific genres. All this, and more, can be seen at the bottom of the page.

# NOTE: MÅSKE DEN FULDE GRAF HER IGEN? DUNNO THO

# Creating the network
The network is created by making each artist into a node and link up two artists if they have collaborated on a song. The network is created as an [_undirected network_](https://www.wikiwand.com/en/Undirected_graph) that, in comparison to a directed network, is a network where the links don't have an orientation, such that _information_ flows both ways. The size of a node is determined by the number of times they have appeared on Billboard's the hot 100 chart and the colour is based upon the most common genre for that artist. The size of each link is determined by the number of times the two artists have collaborated.


# Walk-through of the full network
## Statistics, degree distribution
Having created the full network, we are now ready to analyse it to get a better understanding of the artist's colaboratory dynamics. The two simplest measures are the number of nodes and links in the graph.

\begin{equation*}
    \textrm{Number of nodes}: 7845 \qquad \textrm{Number of links}: 6799
\end{equation*}

This means that we have a total of 7845 artists in the network with 6799 pairs of artists having collaborated. The next measure we will be investigating is the [_density_](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html) of the network. The density describes how _densely_ connected a network is, where the density is 0 for a graph without links and 1 for a completely connected network. In this case, the network has a density of 0.00022. This value is quite low, which is also understandable given the large number of singleton nodes seen in the network above.

\begin{equation*}
    \textrm{Density} = 0.00022
\end{equation*}

Another measure that can be used to analyse a network is the [_average clustering coefficient_](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html). This quantity is used to describe how much the network's nodes tend to cluster together. The interpretation of the average clustering coefficient is the probability that two neighbours of a randomly selected node, links to each other. For this network, the average clustering coefficient is 0.16.

\begin{equation*}
    \textrm{Average clustering coefficient} = 0.16
\end{equation*}

### Analysis of degrees
The degree of a node in an undirected network denotes the number of other nodes it's connected to, or in this case, the number of artists they have collaborated with. Analysing the degrees can tell us a great deal about the workings of a network. The average degree of the network is, e.g. 1.8, which means each artist on average has collaborated with 1.8 



## Community detection, comparison with random networks


## Betweenness centrality


# Argumentation for why we decided to also look at networks without small singletons, as well as why we picked the genres we did


# All networks with stats und alles


{{< networks >}}


We chose to only focus on the networks visualised above, as they ...

