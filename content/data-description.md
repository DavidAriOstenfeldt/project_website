---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data
An impossibly large number of songs have been composed and released throughout the last century. Today songs are being released faster than one person can enjoy them due to the numerous platforms for music streaming, such as [Spotify](https://www.spotify.com). In an attempt to gather music-related data, which is both diverse in the number of artists while focusing on the ones known by most, and also represents as many popular genres as possible, we turned to the [Billboard 'The Hot 100' chart](https://www.billboard.com/charts/hot-100/). Each week a new chart containing the 100 most popular songs globally (heavily tailored to the western world). Looking back all the way to Jan 1. 1960, until today, there is roughly a potential 52$\cdot$100$\cdot$62 = 332,400 possible songs to find. Of course, most of the songs that hit the chart will stay there for more than a single week, so there is a lot less in reality. In fact, a total of 29,128 unique songs hit the Hot 100 chart in the last 62 years.


With the songs chosen, all that was left was to download the desired data from [Genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For each song, the _date of release_, _all artists who collaborated on the song_, _song lyrics_, _genre tags_ and _title_ were gathered. For further details on which tools were used to collect the data, the reader is referred to the [explainer notebook](https://davidariostenfeldt.github.io/project_website/explainer-notebook.html). Below the data of the first five songs are displayed. Interestingly, the two first songs are from before 1960 but still managed to hit the chart in that year.

|   released |          artists |                                             lyrics |           genres |                          title |
|-----------:|-----------------:|---------------------------------------------------:|-----------------:|-------------------------------:|
|       1957 |  [marty robbins] |                  Out in the West Texas town of ... |        [country] |                        El Paso |
|       1959 | [johnny preston] |                     On the bank of the river\nS... |            [pop] |                   Running Bear |
| 1960-01-04 | [frankie avalon] |            I'll never let you go\nWhy? Because ... |            [pop] |                            Why |
| 1960-01-04 |  [freddy cannon] |                                      Well, way ... |            [pop] | Way Down Yonder in New Orleans |
| 1960-01-04 |   [guy mitchell] |                                   Heartaches by... | [country, cover] |       Heartaches by the Number |


# Properties of the data

Unfortunately, scraping Genius.com for a song does not always yield the desired result. Therefore, some songs had to be removed in the data cleaning process. One particular _'artist'_ who managed to find his way into the data multiple times was the French novelist [Marcel Proust](https://genius.com/artists/Marcel-proust), with several chapters of one of his books. These chapters all have massive lengths of around 100,000 words, with Chapter 1 being almost 150,000 words long. In comparison, the figure below shows the distribution of song lyric lengths for the songs which made it through the cleaning process. The majority of the collected songs are shorter than 500 words, with only a small part reaching above 1000 words. In comparison, Eminem's famously long song, _Rap God_, is 1560 words long, which of course is puny in the scheme of full novels.


![](/images/song_lengths_sns.png)

About 13% of the downloaded songs turned out to be faulty. For example, songs and other literature which did in fact not appear on the 'Hot-100' chart or wrong versions of songs where the lyrics were translated to non-english languages. The final data set thus consists of 25,419 songs, 7,855 unique artists and 582 unique genres. The three data sets used throughout the project can be seen and downloaded in the table below. Note that removing the extremely long _'songs'_ from Marcel Proust and the likes reduces the data file size by more than 50%!

| Data Set                                                                                             |  Songs | Size (mb) |
|:-----------------------------------------------------------------------------------------------------|-------:|----------:|
| [Billboard Chart](https://drive.google.com/file/d/1Gd4YH_U98Z8mellnIV_haINLL4UhLJKG/view?usp=sharing) | 29,128 |       1.6 |
| [Pre-cleaned](https://drive.google.com/file/d/1cyiIWnXD_0CHLsj8C0tcwNadfYI7z8FD/view?usp=sharing)    | 29,128 |      92.5 |
| [Cleaned](https://drive.google.com/file/d/1Zhof84KbTJa3a1zfhN3TcwdWqPFCTnEv/view?usp=sharing)        | 25,419 |      44.2 |


Now, how is the data distributed amongst the artists, genres and decades? First, a barplot of the total number of songs the most successful artists appear on can be seen below. Specifically, all these artists have managed to reach the 'Hot-100' chart at least 60 times either alone or by collaborating with other artists. The most popular rappers and pop artists from the past 20 years heavily dominate the chart, but also some of the most famous artists throughout history appear as well. 'The King of Rock' Elvis Presley is the artist who have appeared 12'th most times, being there almost 100 times. Not too far behind comes 'The Queen of Soul' Aretha Franklin, The Beatles and Elton John. Who all have had a huge impact on the mainstream music scene. The canadian rapper, Drake, comfortably sits at the top with an impressive number of appearances, namely 253.
![](/images/songs_per_artist.png)

Moving onto the genres, the barplot below shows the number of songs which have been labelled as the given genre for all the genres which appear on at least 500 songs. Keep in mind that many songs are labelled as several genres, but that is only natural since music often is a combination of genres. The most well-known genres; pop, rock, r&b, rap and country have appeared the most, but pop certainly lives up to its name as it appears on over twice as many songs as the next most frequent genre, rock. This also indicates that more than half of the songs have the pop-label.
![](/images/songs_per_genre.png)

Finally, the distribution of songs per decade looks the following:
![](/images/songs_per_decade.png)

Each decade has between 3000 and 5000 songs, with the most being the 1960s and the 2010s. There also are a handful of songs from 1920 and 1940 which managed to stay relevant for around 20-40 years. Even though we are only a quarter through the decade 2020 as of writing this analysis, just short of 1500 songs have reached the 'Hot-100' chart.
