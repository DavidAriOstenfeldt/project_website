---
title: Introduction
layout: single
next: data-description
---

Music is a large part of our daily lives. A study shows that [only 4% of Danes do not listen to any music whatsoever](https://www.dst.dk/da/Statistik/emner/kultur-og-fritid/musik/musikvaner), which leaves 96% listening through various means such as radio, streaming, live music, tv etc. 

But even though music is such a huge part of our lives, how much do we actually know about our favourite artists? For instance, do you know if DJ Khaled has collaborated with more artists than Drake? Or, is the language used is rock songs different from the language used in pop songs? Have lyrics changed since 1960, or are we still singing blues about our darlings? 

We hope to answer all these questions and more through this project. We have gathered data on your favourite artists and have analysed their lyrics and connections to other artists.

This website is intended as an experience in which you, dear reader, can explore the intricacies and nuances of your favourite music at your own leisure. It is split up into three main parts:
1. [A description of the full data.](./data-description)
2. [A network analysis of the connections between artists.](./network-analysis)
3. [An analysis of the lyrics used by artists and their evolution.](./text-analysis)

In each section we have presented you with a myriad of options to inspect precisely the attributes of each artist that you want. The data section is a thorough description of the data we have gathered, and how it is divided into genres, artists and decades. The network analysis takes you through the intricacies of artist networks, where you will be able to explore the collaborations between artists across genres. Finally, the text is a walkthrough of the lyrics of the songs we have collected, wherein we will present identifying words for each decade, genre and artist, and so much more!

Below, you can see a short preview of what we have created:

<p style="text-align: center;"> <a style="font-size:28px" href="https://davidariostenfeldt.github.io/project_website/network-analysis/">Network of all artists </a></p>

{{< all_genre_network >}}

<p style="text-align: center;"> <a style="font-size:28px" href="https://davidariostenfeldt.github.io/project_website/text-analysis/">Wordclouds of 9 genres </a></p>

![](/images/genre_clouds.png)

To get a list of songs to investigate, we looked at the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. Then we used this data to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). This was done via two APIs: the [billboard.py API](https://github.com/guoguo12/billboard-charts) and the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/).

The data was then cleaned via various methods (see [Data](./data-description) for more info), such that we were only left with unique songs.

The data can be downloaded from the table below. `Billboard List` is a list of songs on the Billboard 'Hot-100' list from 1958 to today. `Pre-cleaned` is the data we collected from Genius through the `Billboard List`. It has 4 attributes: The song title, the lyrics, the release date, and the artists who worked on the song. Finally, `Cleaned` is the cleaned final version of the data we are working with, where duplicates, non-english songs, non-songs, etc. have been removed.

| Data Set                                                                                             |  Songs | Size (mb) |
|:-----------------------------------------------------------------------------------------------------|-------:|----------:|
| [Billboard List](https://drive.google.com/file/d/1Gd4YH_U98Z8mellnIV_haINLL4UhLJKG/view?usp=sharing) | 29,128 |       1.6 |
| [Pre-cleaned](https://drive.google.com/file/d/1cyiIWnXD_0CHLsj8C0tcwNadfYI7z8FD/view?usp=sharing)    | 29,128 |      92.5 |
| [Cleaned](https://drive.google.com/file/d/1Zhof84KbTJa3a1zfhN3TcwdWqPFCTnEv/view?usp=sharing)        | 25,419 |      44.2 |



## Explainer Notebook
If you wish to get a better understanding of how all the numbers that are presented here were calculated, how the data was gathered or just want to maybe look at something that we didn't, you can take a look at our [jupyter notebook](explainer-notebook.html) in which everything is explained with great detail in a more technical approach.
