---
title: Network analysis
prev: data-description
next: text-analysis
---

This section will cover the collaboration between artists through the use of networks. For this, we will use different network theories and constructions to analyse the properties of artists. Specifically, we will go through how the complete network of all artists was created and investigate it using various networks science analysis strategies. In addition to the network of all artists, we've also created smaller networks for specific genres. All this, and more, can be seen at the bottom of the page.

# NOTE: Mangler det fulde netværk her

# Creating the network
The network is created by making each artist into a node and linking up two artists if they have collaborated on a song. The network is created as an [_undirected network_](https://www.wikiwand.com/en/Undirected_graph) that, in comparison to a directed network, is a network where the links don't have an orientation, such that _information_ flows both ways. The node's size is determined by the number of times they have appeared on Billboard's 'The Hot 100' chart, and the colour is based upon the most common genre for that artist. The size of each link is determined by the number of times the two artists have collaborated.


# Walk-through of the full network
## Statistics
Having created the full network, we are now ready to analyse it to understand the artist's collaboratory dynamics better. The two most straightforward measures are the number of nodes and links in the graph.

\begin{equation*}
    \textrm{Number of nodes}= 7845 \qquad \textrm{Number of links}= 6799
\end{equation*}

This means that we have 7845 artists in the network, with 6799 pairs of artists having collaborated. The following measure we will be investigating is the [_density_](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html) of the network. The density describes how _densely_ connected a network is, where the density is 0 for a graph without links and 1 for a completely connected network. In this case, the network has a density of 0.00022. This value is relatively low, which is understandable given the large number of singleton nodes seen in the network above.

\begin{equation*}
    \textrm{Density} = 0.00022
\end{equation*}

Another measure used to analyse a network is the [_average clustering coefficient_](https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html). This quantity is used to describe how much the network's nodes tend to cluster together. The interpretation of the average clustering coefficient is the probability that two neighbours of a randomly selected node link to each other. For this network, the average clustering coefficient is 0.16.

\begin{equation*}
    \textrm{Average clustering coefficient} = 0.16
\end{equation*}

### Analysis of degrees
The degree of a node in an undirected network denotes the number of other nodes it's connected to, or in this case, the number of artists they have collaborated with. Analysing the degrees can tell us a great deal about the workings of a network. The average degree of the network is 1.8, which means each artist, on average, has collaborated with 1.8 other artists. The node with the largest degree is Lil Wayne, who has a whopping degree of 108, meaning that he is the biggest collaborator of all.

\begin{equation*}
    \textrm{Average degree}= 1.8 \qquad \textrm{Max degree}= 108
\end{equation*}

A common feature of real-world networks is hubs - meaning that few nodes in the network are highly connected to other nodes. One way of investigating whether a network has this trait is by looking at the distribution of degrees. Specifically, [_Scale-free networks_](https://mathinsight.org/scale_free_network) have this feature, characterised by what's called a _power-law_ degree distribution, which means their degree distribution is linear on a log-log scale. The figure below shows exactly such behaviour, meaning that few artists have collaborated much more than others.

![](/images/distribution_of_degrees_90.png)

## Community detection
In this section, we will explore the communities of the network. The most natural partitioning of the artists in the network is, as mentioned previously, by grouping them by their genre. However, this might not be the most optimal partitioning based on what's known as [_modularity_](https://en.wikipedia.org/wiki/Modularity_(networks)). Within network science, modularity measures the strength of the partitioning of the nodes into _modules_ (or communities). This means that a network with high modularity has large connectivity within the communities, while each community is sparsely connected. The modularity is a value between -0.5 if the network consists of non-modular clustering and 1 if the network has fully modular clustering. The modularity can thus be used to detect communities within the network by optimising the modularity. By grouping artists into communities that optimise the modularity, exciting structures can be found, which the genre partitioning might not be able to illuminate. This is precisely what the [_Louvain method_](https://en.wikipedia.org/wiki/Louvain_method) tries to do. 

# NOTE: Beskrivelsen herover er måske for teknisk - mangler andre øjne

In the network below, we see the partitioning that the Louvain method managed to find. The modularity of this partitioning for the network is 0.74, whereas the modularity using the genre partitioning was 0.33. This means that the Louvain method achieved a modularity more than twice as large as that of the genre partitioning. 

When looking at the network, we see some of the same tendencies as for the genre partitioning; many of the rap-artists like Drake, Lil Wayne and Nicki Minaj are still grouped in the most notable purple community - the same is the case for country artists like Tim McGraw and Kenny Chesney in the green community in the bottom left. We also see new communities where pop, rap and R&B artists are mixed. Examples of these are the light blue nodes where, e.g. Beyoncé, Rihanna, Jay-Z and Kanye are grouped, while the dark green community consists of, e.g. Taylor Swift, Eminem, Ed Sheeran, 50 Cent and Snoop Dogg.


# NOTE: Mangler det fulde netværk med Louvain communities her

## Comparison with random networks
A common practice when dealing with networks is to compare them to random networks based on the real ones. This is done to make sure that the network is, in fact, _real_ - understood in the sense that it couldn't have been generated randomly based on the number of nodes and links in the network. To make this comparison, 1000 random networks were generated using what's called the _double edge swap_ algorithm. We calculated the modularity using the genre communities for each of these random networks. The figure below shows the distribution of the modularities for the 1000 random networks and the modularity for the genre communities and the Louvain communities. It can be seen that both the genre and Louvain modularity is vastly larger than any of the random networks' modularity, which indicates that we are dealing with a real network and not random coincidence.


![](/images/Modularity.png)

## Betweenness centrality
As mentioned previously, the size of each node in the networks is determined based on the number of songs the artist has on The Hot 100 chart. The advantage of this is that the most popular artists will be the easiest ones to see; this is especially the case for older artists who haven't collaborated as much - such as Elvis Presley or The Beatles. Artists like these would be virtually invisible if the size of the nodes were based on the strength of their connections. However, scaling the nodes by the strength of their connections tells a great deal about which nodes are the biggest collaborators and, thereby, some of the most central nodes in the graph.


We will therefore in this section deal with [_betweenness centrality_](https://en.wikipedia.org/wiki/Betweenness_centrality) that, for each node in a graph, is a measure of how central that node is. The intuition is, that a node will get a large betweenness centrality score if they connect many nodes and parts of the network. Combining this with scaling the artists by the number of songs they have on the chart will give us a great overview of not just the most popular artists, but also the most central, colaboratory and connective artists. In the table below, the ten artists with the largest betweenness centrality score can be seen. Here we unsurprisingly see some artists that are also the largest in the networks, such as Lil Wayne, Kanye and Drake, but more surprisingly also Quincy Jones that _just_ has 13 songs on the chart (see if you can find him ;-) ) - compared to Drake's 253 (though Jones has had a star-studded career that goes far beyond Billboard's 'The Hot 100').

| Betweenness centrality score |
|--------------|---------------|
| Lil Wayne    | 	    0.0050 |
| Kanye West   |        0.0044 |
| Drake        |        0.0042 |
| Nicki Minaj  |        0.0036 |
| Chris Brown  |        0.0034 |
| Quincy Jones |        0.0032 |
| Ludacris     |        0.0031 |
| Snoop Dogg   |        0.0031 | 
| Mariah Carey |        0.0028 |
| Usher        |        0.0027 |

# All networks
This brings us to the end of the full network's analysis, but were not done yet. The last part of this page will be dedicated to the exploratory part in all of us. Below it is possible to go on an adventure for different subnetworks based on some of the most influential genres in all music. These networks are made such that only artists that have made songs for the given genre is present. For each of the genres listed, four different networks can be seen: the full network where nodes are coloured based on each artists' genre, the full network where nodes are coloured based on they Louvain method partitioning and two other networks with the same colouring methods, but where singleton nodes with less than five songs are removed. This is done so that the networks are as clear as possible, while still maintaining the singleton artists that are influential for the genre at hand. Alongside the networks, the appertaining statistics and betweenness centrality scores, that have been described on this page, is present. \
The reader is encouraged to explore the networks. The nodes can be hovered over to see which artists they represent, and they can also be moved around to get a better idea of which other artists they are connected to - enjoy.


{{< networks >}}
