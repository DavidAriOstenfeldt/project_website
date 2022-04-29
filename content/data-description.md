---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data
First, we got the songs we wanted to investigate from the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the chart, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year * 62 years), which means 293,272 songs had multiple appearances on the Billboard 'Hot-100' list.

![](/images/billboard_py.png)

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). However, the LyricsGenius API does not collect the genres of the songs, thus we had to modify the code to allow us to collect genres as well:

```Python
def SomeShit(some, shit):
  return some += shit
````

This way, when collecting data for each song through the modified LyricsGenius API, we would retrieve five attributes: year of release, artists who collaborated on the song, lyrics, genres and the song title. The data looks as follows:

|   released |    artists       |                                              lyrics |    genres        |   title                        |
|     ----:  |           ---:   |                                               ---:  |     ---:         |   ----:                        |
|   1957     |  [marty robbins] | El Paso Lyrics\nOut in the West Texas town of ...   | [country]        | El Paso                        |
| 1960-01-04 | [frankie avalon] | Why Lyrics I'll never let you go\nWhy? Because ...  | [pop]            | Why                            |
| 1959       | [johnny preston] | Running Bear LyricsOn the bank of the river\nS...   | [pop]            | Running Bear                   |
| 1960-01-04 | [freddy cannon]  | Way Down Yonder in New Orleans LyricsWell, way ...  | [pop]            | Way Down Yonder in New Orleans |
| 1960-01-04 | [guy mitchell]   | Heartaches by the Number Lyrics\nHeartaches by...   | [country, cover] | Heartaches by the Number       |

# Preliminary investigation and cleaning
Removing duplicates..
Removing translated songs..
Removing non-english songs..
Removing gimmick songs..

## Clearning artists names

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7FXj7Qg3YorUxdrzvrcY25?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

## Filtering out bad genres

Since song titles on Billboard's 'The Hot 100' have horrible naming schemes, which differs a lot from one song to another, some preprocessing need to take place. An example of this, is the artist *Earth, Wind \& Fire with The Emotions* which actually denotes *Earth, Wind \& Fire* featuring *The Emotions*. The problem comes when we search for *Earth, Wind \& Fire with The Emotions* using the Genius API, since this wont return any valid artist. 

When searching for artists using the Genius API, we will use a sequential searching strategy. This means that we will first search for the unique artist name and if that does not yield any results, we first split the artist name at \textit{'with'} and then search for the first partition of the query. Processing like this will be done for a few keywords, like \textit{'and', '\&', featuring} and \textit{feat}, until the correct artist is found.


# Properties of the data
The final data set is ..

Create a nice table with links to download each data set...

|      Data Set     | Songs  | Size (mb) |
|:------------------|-------:|----------:|
|[Billboard List](#)| 29,128 | 1.6       |
|[Pre-cleaned](#)   | 29,128 | 92.5      |
|[Cleaned](#)       | 25,419 | 44.2      |

## Characteristics of the data
Big:
Always-on:
Non-reactive:
Incomplete:
Inaccessable:
Nonrepresentative:
Drifting:
Algorithmically confounded:
Dirty:
Sensitive:




