---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data

First, we got the songs we wanted to investigate from the [Billboard 'The Hot 100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the chart, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year * 62 years), which means 293,272 songs had multiple appearances on the Billboard 'The Hot 100' list.

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). Once we had collected the data, we cleaned it via various methods. For more information on this process see the [explainer notebook](https://davidariostenfeldt.github.io/project_website/explainer-notebook.html).

This way, when collecting data for each song through the modified LyricsGenius API, we would retrieve five attributes: date of release, artists who collaborated on the song, lyrics, genres and the song title. The data looks as follows:

|   released |          artists |                                             lyrics |           genres |                          title |
|-----------:|-----------------:|---------------------------------------------------:|-----------------:|-------------------------------:|
|       1957 |  [marty robbins] |                  Out in the West Texas town of ... |        [country] |                        El Paso |
| 1960-01-04 | [frankie avalon] |            I'll never let you go\nWhy? Because ... |            [pop] |                            Why |
|       1959 | [johnny preston] |                     On the bank of the river\nS... |            [pop] |                   Running Bear |
| 1960-01-04 |  [freddy cannon] |                                      Well, way ... |            [pop] | Way Down Yonder in New Orleans |
| 1960-01-04 |   [guy mitchell] |                                   Heartaches by... | [country, cover] |       Heartaches by the Number |


# Properties of the data

After doing all data processing and cleaning, the final data set is comprised of 25,419 songs and 7,855 unique artists. In the table below, the three data sets used throughout the project can be seen and downloaded.

| Data Set                                                                                             |  Songs | Size (mb) |
|:-----------------------------------------------------------------------------------------------------|-------:|----------:|
| [Billboard List](https://drive.google.com/file/d/1Gd4YH_U98Z8mellnIV_haINLL4UhLJKG/view?usp=sharing) | 29,128 |       1.6 |
| [Pre-cleaned](https://drive.google.com/file/d/1cyiIWnXD_0CHLsj8C0tcwNadfYI7z8FD/view?usp=sharing)    | 29,128 |      92.5 |
| [Cleaned](https://drive.google.com/file/d/1Zhof84KbTJa3a1zfhN3TcwdWqPFCTnEv/view?usp=sharing)        | 25,419 |      44.2 |

The distribution of songs per artist (for artists with over 50 songs on the 'Hot-100' list) looks as follows:
![](/images/songs_per_artist.png)

As we can see on the plot, it is mostly pop artists, with some rap, r&b and rock mixed in between.  Drake is leading with 253 songs on the chart, and most of the artists are big names from the last 10-20 years. Some well known names from before still manage to break through, like the king of rock, Elvis, with 89 songs on the chart.

Likewise, the distribution of songs over genres (for genres with more than 500 songs in them):
![](/images/songs_per_genre.png)

Here, it becomes clear to see that the genres are dominated by pop, rock r&b and rap, with there being as many pop songs as the next three genres combined.


Finally, the distribution of songs per decade looks as following:
![](/images/songs_per_decade.png)

We can see that each decade has between 3000 and 5000 songs, with the most being the 1960s and the 2010s. 1920 to 1940 is of course substantially lower, since the chart started in 1958 and the songs from before that were old songs that still scored a place on the chart at some point after 1958. 2020 is  lower as well, as there are still 8 years left in this decade.

For good measure, we also plot the distribution of lengths of all songs:
![](/images/song_lengths_sns.png)

Here we see that a large majority of the collected songs fall between lengths of 0 to 500, with a few going for longer. For comparison Eminems 'Rap God' is 1560 words long.
