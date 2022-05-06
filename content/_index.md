---
title: Introduction
layout: single
next: data-description
---
# OPDATER INTRODUKTION: Spil på at det er en oplevelse at være inde på hjemmesiden. Læseren opfordres til at undersøge tingene de er interesserede i... beskriv hvad der er på hvert tab...

Music is a large part of our daily lives. A study shows that [only 4% of Danes do not listen to any music whatsoever, which leaves 96% listening through various means such as radio, streaming, live music, tv etc](https://www.dst.dk/da/Statistik/emner/kultur-og-fritid/musik/musikvaner). But how much do we actually know about the various connections and intersections that happen to make our favourite listening activity? How do artists get together to create the music we love to listen to? Which artists collaborate more? Are some genres more prone to collaboration than others? Are artists collaborating more today, than in the 1960s? Does the language used in songs change through the years? What about between genres? Has Drake collaborated with more artists than DJ Khaled? All good questions, which we hope to answer in this project.

This website is intended as an experience in which you, dear reader, can explore the intricacies and nuances of your favourite music at your own leisure. It is split up into three main parts:
1. [A description of the full data.](./data-description)
2. [A network analysis of the connections between artists.](./network-analysis)
3. [An analysis of the lyrics used by artists and their evolution.](./text-analysis)

In each section we have presented you with a myriad of options to inspect precisely the attributes of each artist that you want.

Here is a small preview of what we are going to create:

# INSERT IMAGE OF WHOLE NETWORK HERE

# Det her er måske ikke nødvendigt... Måske skal links til download af data også/i stedet være her?
To get a list of songs to investigate, we looked at the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. Then we used this data to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). This was done via two APIs: the [billboard.py API](https://github.com/guoguo12/billboard-charts) and the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/).

The data was then cleaned via various methods (see [Data](./data-description) for more info), such that we were only left with unique songs.


## Explainer Notebook
If you wish to get a better understanding of how all the numbers that are presented here were calculated, how the data was gathered or just want to maybe look at something that we didn't, you can take a look at our [jupyter notebook](explainer-notebook.html) in which everything is explained with great detail in a more technical approach.
