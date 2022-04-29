---
title: Data description
prev: "/"
next: network-analysis
---

# Gathering the data
First, we got the songs we wanted to investigate from the [Billboard 'Hot-100' list](https://www.billboard.com/charts/hot-100/). Here, we collected song titles and artist names of all songs that appeared on the list starting from the first week of 1960, all the way to today. This was done with the [billboard.py API](https://github.com/guoguo12/billboard-charts). We made sure to only collect the songs if it was either the first time they appeared on the chart, or if we hadn't already added them to the list. This way we collected a total of 29,128 unique songs, out of the total possible 322,400 songs (5,200 a year * 62 years), which means 293,272 songs had multiple appearances on the Billboard 'Hot-100' list.

![](/images/billboard_py.png)

We used the songs from this list to limit our scope, as otherwise the amount of data we would have to download would be insurmountable. This of course means that the data set does not provide a full picture of the entire network and vocabulary of artists, but as the data is collected from the most popular songs each week, we believe it to be a sufficient representation of the general trends in artists and lyrics through the years. We used the list of artists and song titles to collect lyrics, release year, collaborations, genres and titles from [genius.com](https://genius.com/Rick-astley-never-gonna-give-you-up-lyrics). For this part the [LyricsGenius API](https://lyricsgenius.readthedocs.io/en/master/) was used, which is an extension of the [base genius API](https://docs.genius.com/) that also collects the lyrics from each song via the python module [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/). However, the LyricsGenius API does not collect the genres of the songs (known as tags on the genius website), thus we had to modify the code to allow us to collect genres as well:

```Python
def SomeShit(some, shit):
  return some += shit
````

## Avoiding incorrect songs
Since song titles on Billboard's 'The Hot 100' have horrible naming schemes, which differs a lot from one song to another, some preprocessing need to take place. An example of this, is the artist *Earth, Wind \& Fire with The Emotions* which actually denotes *Earth, Wind \& Fire* featuring *The Emotions*. When searching for songs on the Genius website, the best result achieved when searching for both the song title and artists, as many songs share titles. The problem comes when we search for *Boogie Wonderland* by *Earth, Wind \& Fire with The Emotions* using the Genius API, since this wont return any song. 

When searching for songs using the Genius API, we used a sequential searching strategy. This means that we would first search for the song title and full artist name and if that does not yield any results, we first split the artist name at *'feature'*, *'feat.'*, *'ft.'* or *'with'* and then search for the song title and the first partition of the artists name query. If this still doesn't result in any valid song, we remove parentheses from the artist names and replace *'and'* with *'&'*, after which we again search for the song title and artists name. If this fails as well, we try splitting the modified artist names at *'&'* and *','* and search again. If none of these steps result in a valid song, we simply search for the song title and hope for the best.

## Filtering out bad genres and separating artists
Immediately after loading a song, we make sure it is actually a song. To do this, we filter out songs with specific genres/tags, as Genius also house texts which are not song lyrics. We therefore used the following list of bad genres to avoid those; `['track\\s?list', 'album art(work)?', 'liner notes', 'booklet', 'credits', 'interview', 'skit', 'instrumental', 'setlist', 'non-music', 'literature']`.

The last step before all the raw data was gathered, was to separate all artists for each song. This was done using regex to find and split artists at *','*, *'and'*, *'featuring'* and so on. This results in the artists *Megan Thee Stallion & Dua Lipa* for the song *Sweetest Pie* to be changed to `[Megan Thee Stallion, Dua Lipa]` and the artists *Lil Durk Featuring Gunna* for the song *What Happened To Virgil* to be changed to `[Lil Durk, Gunna]`. However, a negative side effect of this processing is, that artists like the previously mentioned *Earth, Wind & Fire* was changed to `[Earth, Wind, Fire]`. This was a necesary part of the preprocessing and these kinds of artists were regrouped later in the data cleaning. 

This way, when collecting data for each song through the modified LyricsGenius API, we would retrieve five attributes: date of release, artists who collaborated on the song, lyrics, genres and the song title. The data looks as follows: 

|   released |    artists       |                                              lyrics |    genres        |   title                        |
|     ----:  |           ---:   |                                               ---:  |     ---:         |   ----:                        |
|   1957     |  [marty robbins] | El Paso Lyrics\nOut in the West Texas town of ...   | [country]        | El Paso                        |
| 1960-01-04 | [frankie avalon] | Why Lyrics I'll never let you go\nWhy? Because ...  | [pop]            | Why                            |
| 1959       | [johnny preston] | Running Bear LyricsOn the bank of the river\nS...   | [pop]            | Running Bear                   |
| 1960-01-04 | [freddy cannon]  | Way Down Yonder in New Orleans LyricsWell, way ...  | [pop]            | Way Down Yonder in New Orleans |
| 1960-01-04 | [guy mitchell]   | Heartaches by the Number Lyrics\nHeartaches by...   | [country, cover] | Heartaches by the Number       |

# Preliminary investigation and cleaning
At this point we had all the raw data, but it was apparant that in spite of our efforts during the data gathering, a lot of cleaning still had to be done.

First of all, unwanted unicodes like *\u200b*, *\u200e* and *\u200c*, which had slipped in when the data was loaded, was removed from artists, genres and the lyrics. Next up, duplicates were removed and songs which were not in english were removed by doing a language detection with the Python module `langdetect`.

As can be seen in the table above, each of the songs' lyric's begins with the title of the song and *'Lyrics'*. This was also removed, as it wasn't part of the actually lyrics, but rather an artifact from gathering the song info using the Genius API.



Removing duplicates..
Removing translated songs..
Removing non-english songs..
Removing gimmick songs..





## Filtering out non english songs
Using **langdetect**


## Removing duplicates, unwanted unicodes (\u200x), songs clearly loaded wrong (cut list), songs with length > 10,000 characters, regrouping artists 




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




