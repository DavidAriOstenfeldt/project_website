---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data

First, we got the songs we wanted to investigate from the [Billboard 'The Hot 100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the chart, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year * 62 years), which means 293,272 songs had multiple appearances on the Billboard 'The Hot 100' list.

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). Once we had collected the data, we cleaned it via various methods. For more information on this process see the [explainer notebook](explainer-notebook.html).

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
{{< load-plotly >}}
{{< plotly json="plotly/songs_per_artist.json" height="325px" >}}

As we can see on the plot, it is mostly pop artists, with some rap, r&b and rock mixed in between.  Drake is leading with 253 songs on the chart, and most of the artists are big names from the last 10-20 years. Some well known names from before still manage to sneak in, however, like the king of rock, Elvis, with 89 songs on the chart.


The distribution over genres (for genres with more than 500 songs in them):
{{< plotly json="plotly/songs_per_genre.json" height="325px" >}}

And finally the distribution over decades:
{{< plotly json="plotly/songs_per_decade.json" height="325px" >}}
